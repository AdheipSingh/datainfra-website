---
slug: dual-network-rdma-kubernetes-gh200
title: "Dual-Network Kubernetes Pods with RDMA on NVIDIA GH200: A Hands-On Guide"
authors: [Adheip Singh]
tags: [gpu, rdma, kubernetes, networking, gh200, nccl, tutorial]
---

*How to set up a management network and a dedicated RDMA training network inside Kubernetes pods — from hardware discovery to working RDMA verbs, on a bare-metal GH200 Grace Hopper superchip.*

<!-- truncate -->

---

## Why two networks?

In GPU training clusters, every pod needs two distinct network paths. The first is the management network — the standard Kubernetes pod network (Flannel, Calico, Cilium) that carries API traffic, health checks, metrics, DNS, and control plane communication. The second is the training network — a dedicated, high-bandwidth path that carries NCCL collective operations (all-reduce, all-gather, broadcast) directly between GPUs across nodes.

Mixing both on a single interface is a non-starter for serious GPU workloads. NCCL traffic is latency-sensitive and bandwidth-hungry. It needs to bypass kube-proxy, skip the overlay network, and in the case of RDMA, bypass the kernel entirely. The management network, by contrast, is low-bandwidth but needs reliable service discovery and DNS.

The Kubernetes-native way to give a pod two interfaces is Multus CNI. The primary CNI plugin (Flannel, in our case) provides `eth0` for management. Multus attaches a secondary interface (`net1`) backed by the physical RDMA-capable NIC, giving the pod direct access to the high-speed fabric.

This post walks through the full setup on an NVIDIA GH200 Grace Hopper bare-metal instance with a ConnectX-7 NIC — from discovering whether RDMA is even available, through Kubernetes configuration, to running RDMA verbs inside a pod.

---

## Hardware: What we're working with

Our test platform is a single NVIDIA GH200 480GB Grace Hopper superchip — a Grace ARM CPU (72 cores) unified with an H200 GPU on a single module. The system runs Ubuntu 22.04 on the NVIDIA 6.8.0 kernel:

```
Linux guest 6.8.0-1050-nvidia-64k aarch64 GNU/Linux
```

Key specs from the system:

- **CPU**: 72-core Grace ARM (aarch64)
- **GPU**: NVIDIA GH200 480GB HBM3, 700W TDP
- **NIC**: Mellanox ConnectX-7 dual-port Ethernet
- **Memory**: ~576GB system memory
- **Driver**: NVIDIA 580.95.05, CUDA 13.0

---

## Step 1: Discovering RDMA capability

Before installing anything Kubernetes-related, you need to know whether your hardware supports RDMA and whether the drivers are properly configured. This is a multi-step discovery process.

### Check network interfaces

Start with the basics:

```bash
ip a
```

On our GH200, this shows:

```
2: enp1s0f0np0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 ...
    link/ether a0:88:c2:a7:5c:d4 brd ff:ff:ff:ff:ff:ff
    inet 66.42.90.253/23 ...
3: enp1s0f1np1: <BROADCAST,MULTICAST> mtu 1500 ... state DOWN
    link/ether a0:88:c2:a7:5c:d5 brd ff:ff:ff:ff:ff:ff
```

The NIC naming is the first clue. `enp1s0f0np0` breaks down as: `en` (Ethernet), `p1` (PCI bus 1), `s0` (slot 0), `f0` (function 0), `np0` (network port 0). The `np` suffix is specific to Mellanox/NVIDIA ConnectX NICs. The MAC prefix `a0:88:c2` is registered to NVIDIA/Mellanox.

Two ports, same PCI device: `f0np0` and `f1np1`. Port 0 is up with a public IP; port 1 is down (no cable/link partner). This dual-port setup is exactly the pattern we need — one port for management, one for data.

### Check PCI devices

```bash
lspci | grep -iE "mellanox|nvidia"
```

Output:

```
0000:01:00.0 Ethernet controller: Mellanox Technologies MT2910 Family [ConnectX-7]
0000:01:00.1 Ethernet controller: Mellanox Technologies MT2910 Family [ConnectX-7]
0009:01:00.0 3D controller: NVIDIA Corporation Device 2342 (rev a1)
```

The ConnectX-7 (MT2910) sits at PCI bus `0000:01:00.0`. The GPU sits at `0009:01:00.0`. Different PCI root complexes, but on the same NUMA node (the GH200 is a single-socket design).

### Check GPU-NIC topology

```bash
nvidia-smi topo -m
```

```
        GPU0  NIC0  NIC1  CPU Affinity  NUMA Affinity
GPU0     X    NODE  NODE  0-71          0
NIC0    NODE   X    PIX
NIC1    NODE  PIX    X
```

This topology matrix tells us:

- **GPU0 <-> NIC0/NIC1**: `NODE` — they traverse PCIe within the same NUMA node. Not the tightest coupling (that would be `PIX` or `PXB`), but good enough for GPUDirect RDMA.
- **NIC0 <-> NIC1**: `PIX` — the two ports share the same PCIe bridge. They're physically the same device.

### Check kernel modules

This is where you determine if RDMA is actually enabled at the kernel level:

```bash
lsmod | grep -E 'rdma|ib_|mlx'
```

```
mlx5_ib               655360  0
ib_uverbs             327680  3 nvidia_peermem,rdma_ucm,mlx5_ib
ib_core               589824  8 rdma_cm,ib_ipoib,iw_cm,ib_umad,rdma_ucm,ib_uverbs,mlx5_ib,ib_cm
mlx5_core            2686976  1 mlx5_ib
```

The critical modules and what they mean:

- **`mlx5_core`** — ConnectX base driver. Handles Ethernet. Without this, the NIC doesn't work at all.
- **`mlx5_ib`** — RDMA/InfiniBand driver for ConnectX. This is what enables RDMA verbs on the NIC. If only `mlx5_core` is loaded but `mlx5_ib` is absent, RDMA is not active. You can try `modprobe mlx5_ib` to load it.
- **`ib_core`** — Core InfiniBand/RDMA subsystem. Required by all RDMA drivers.
- **`ib_uverbs`** — Userspace verbs interface. Exposes `/dev/infiniband/uverbsN` devices that applications use to perform RDMA operations.
- **`nvidia_peermem`** — GPUDirect RDMA bridge. This module allows the ConnectX NIC to DMA directly to/from GPU HBM memory, bypassing CPU memory entirely. Its presence means the system is configured for GPU-to-GPU RDMA transfers.
- **`mlx_compat`** (if present) — MOFED compatibility shim, indicating NVIDIA MOFED drivers are installed rather than stock kernel drivers.

### Check RDMA devices

```bash
rdma link show
```

```
link mlx5_0/1 state ACTIVE physical_state LINK_UP netdev enp1s0f0np0
link mlx5_1/1 state DOWN physical_state DISABLED netdev enp1s0f1np1
```

Two RDMA devices corresponding to the two physical ports. `mlx5_0` is active and linked to `enp1s0f0np0`.

### Get detailed HCA information

```bash
ibv_devinfo
```

```
hca_id: mlx5_0
transport: InfiniBand (0)
fw_ver: 28.40.1000
vendor_part_id: 4129
phys_port_cnt: 1
  port: 1
    state:      PORT_ACTIVE (4)
    max_mtu:    4096 (5)
    active_mtu: 1024 (3)
    link_layer: Ethernet
```

Key fields:

- **`vendor_part_id: 4129`** — hex `0x1021`, which identifies this as ConnectX-7
- **`link_layer: Ethernet`** — this is RoCE (RDMA over Converged Ethernet), not InfiniBand. The `transport: InfiniBand (0)` line refers to the verbs API layer, not the physical link
- **`state: PORT_ACTIVE`** — RDMA is ready on this port
- **`fw_ver: 28.40.1000`** — firmware version, useful for support cases and compatibility checks

Common ConnectX device IDs you'll encounter:

| Device ID (hex) | Model |
|---|---|
| 0x1017 | ConnectX-5 |
| 0x101b | ConnectX-6 |
| 0x1021 | ConnectX-7 |

### Check RDMA namespace mode

```bash
rdma system show
```

```
netns shared copy-on-fork on
```

The RDMA subsystem must be in `shared` mode for the Kubernetes RDMA device plugin to work. In `shared` mode, multiple pods (network namespaces) can access the same RDMA device simultaneously through independent Queue Pairs. If this shows `exclusive`, change it:

```bash
rdma system set netns shared
```

### Summary of discovery

At this point, we've confirmed:

- ConnectX-7 dual-port NIC with RDMA active on port 0
- MOFED drivers installed (mlx5_core + mlx5_ib)
- GPUDirect RDMA enabled (nvidia_peermem)
- RoCE v2 over Ethernet
- RDMA namespace mode set to shared
- GPU and NIC on the same NUMA node

The hardware and driver stack are ready. Now we set up Kubernetes.

---

## Step 2: Installing Kubernetes (k3s)

We use k3s for its simplicity on a single bare-metal node. The critical detail: k3s bundles its own Flannel CNI implementation, which bypasses the standard `/etc/cni/net.d/` plugin chain. Multus requires being the first CNI in that chain. To make them work together, install k3s with the built-in flannel disabled:

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --flannel-backend=none" sh -
```

The node will start in `NotReady` state until a CNI is installed.

### Install Flannel manually

Download and patch the Flannel manifest to match k3s's default pod CIDR:

```bash
curl -L https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml -o /tmp/flannel.yml
sed -i 's|10.244.0.0/16|10.42.0.0/16|g' /tmp/flannel.yml
kubectl apply -f /tmp/flannel.yml
```

Wait for the cluster to be fully ready:

```bash
kubectl get pods -A -w
```

All system pods (coredns, metrics-server, etc.) should reach Running state before proceeding.

### Install standard CNI plugins

The default k3s installation only includes a minimal set of CNI binaries. Multus and our secondary network need additional plugins (macvlan, host-device, etc.). On the GH200's ARM architecture:

```bash
curl -L https://github.com/containernetworking/plugins/releases/download/v1.5.1/cni-plugins-linux-arm64-v1.5.1.tgz | tar -xz -C /opt/cni/bin/
```

For x86 systems, replace `arm64` with `amd64`.

---

## Step 3: Installing Multus CNI

Multus is a "meta-CNI" — it doesn't provide networking itself. It calls the primary CNI (Flannel) for `eth0`, then calls additional CNI plugins for secondary interfaces.

```bash
kubectl apply -f https://raw.githubusercontent.com/k8snetworkplumbingwg/multus-cni/master/deployments/multus-daemonset-thick.yml
```

Verify the CNI chain is correct:

```bash
ls -la /etc/cni/net.d/
```

You should see:

```
00-multus.conf         <- Multus shim (called first by kubelet)
10-flannel.conflist    <- Flannel (called by Multus as primary CNI)
```

The alphabetical ordering matters. Kubelet calls the first config file it finds. `00-multus.conf` ensures Multus is invoked, which then delegates to `10-flannel.conflist` for the primary network and processes secondary network annotations.

Verify Multus is running:

```bash
kubectl get pods -n kube-system | grep multus
```

---

## Step 4: RDMA Shared Device Plugin

Kubernetes has no built-in awareness of RDMA hardware. The RDMA shared device plugin is a DaemonSet that discovers RDMA-capable NICs on each node and registers them as extended resources that pods can request through the standard `resources.limits` mechanism.

### Deploy the plugin

```bash
git clone https://github.com/Mellanox/k8s-rdma-shared-dev-plugin.git
cd k8s-rdma-shared-dev-plugin/deployment/k8s/base
```

Edit the ConfigMap to match our ConnectX-7:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: rdma-devices
  namespace: kube-system
data:
  config.json: |
    {
      "configList": [
        {
          "resourceName": "rdma_shared_device",
          "rdmaHcaMax": 100,
          "selectors": {
            "vendors": ["15b3"],
            "deviceIDs": ["1021"],
            "drivers": ["mlx5_core"]
          }
        }
      ]
    }
```

Breaking down each field:

- **`resourceName`**: The Kubernetes extended resource name. Pods will request `rdma/rdma_shared_device`.
- **`rdmaHcaMax: 100`**: Maximum number of pods that can share the same physical RDMA HCA simultaneously. This works because RDMA supports thousands of independent Queue Pairs on a single NIC — each pod gets its own QP with no contention. Set this to match your expected concurrent pod count.
- **`vendors: ["15b3"]`**: PCI vendor ID filter. `15b3` = NVIDIA/Mellanox.
- **`deviceIDs: ["1021"]`**: PCI device ID filter. `1021` = ConnectX-7.
- **`drivers: ["mlx5_core"]`**: Only match devices bound to the mlx5 kernel driver (excludes devices bound to DPDK/vfio-pci).

Deploy:

```bash
kubectl apply -k .
```

Verify the plugin discovered the NIC and registered resources:

```bash
kubectl describe node | grep rdma
```

Expected output:

```
rdma/rdma_shared_device:  100
rdma/rdma_shared_device:  100
```

100 allocatable and 100 capacity, meaning the plugin found our ConnectX-7 and is advertising 100 RDMA slots.

---

## Step 5: NetworkAttachmentDefinition

The NetworkAttachmentDefinition (NAD) tells Multus how to configure the secondary interface when a pod requests it.

```yaml
apiVersion: k8s.cni.cncf.io/v1
kind: NetworkAttachmentDefinition
metadata:
  name: rdma-net
  annotations:
    k8s.v1.cni.cncf.io/resourceName: rdma/rdma_shared_device
spec:
  config: |
    {
      "cniVersion": "0.3.1",
      "type": "macvlan",
      "master": "enp1s0f0np0",
      "mode": "bridge",
      "ipam": {
        "type": "host-local",
        "subnet": "192.168.50.0/24"
      }
    }
```

Key decisions and an important caveat:

**Both interfaces share the same physical port.** In our setup, `enp1s0f1np1` (port 1) has no link — no cable, no link partner. So both the Flannel overlay (`eth0`) and the macvlan secondary interface (`net1`) are backed by the same physical NIC: `enp1s0f0np0` (port 0). Flannel builds a vxlan tunnel on top of it for pod-to-pod management traffic, and macvlan carves out a separate virtual sub-interface with its own MAC address for the RDMA data path. They share the same wire.

This is a test-environment constraint, not a production design. What we're validating here is that the **Multus + RDMA device plugin plumbing works** — a pod gets a secondary interface and RDMA device access through Kubernetes. The networking stack doesn't care whether the two interfaces are backed by the same port or physically separate NICs.

**In production, you would use physically separate interfaces:**

```
Port 0 / NIC 0 (onboard)       -> Flannel/Calico -> management (eth0)
Port 1 / NIC 1 (dedicated HCA) -> host-device    -> RDMA training (net1)
```

With a dedicated NIC for training, you would use the `host-device` CNI plugin instead of macvlan. `host-device` moves the entire physical interface into the pod's network namespace, giving the pod exclusive access — no sharing, no overhead. That's the standard pattern for NCCL traffic in GPU training clusters.

**Why macvlan works for this POC**: `macvlan` creates a virtual sub-interface on top of a physical NIC. The host retains the interface, and multiple pods can each get their own L2 identity backed by the same port. It proves the dual-interface pod pattern without requiring two active physical links.

**The resourceName annotation** links this NAD to the RDMA device plugin. When a pod requests both `rdma/rdma_shared_device` in its resource limits and `rdma-net` in its network annotation, Kubernetes ensures the pod gets both the secondary interface and the RDMA device files (`/dev/infiniband/*`).

---

## Step 6: Launch the test pod

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: rdma-test
  annotations:
    k8s.v1.cni.cncf.io/networks: rdma-net
spec:
  containers:
  - name: test
    image: ubuntu:24.04
    command: ["sleep", "infinity"]
    securityContext:
      capabilities:
        add: ["IPC_LOCK"]
    resources:
      limits:
        rdma/rdma_shared_device: 1
```

The `IPC_LOCK` capability is required for RDMA operations — it allows the process to lock memory pages, which is necessary for RDMA registered memory regions.

---

## Step 7: Verification

### Check network-status annotation

The first thing to verify is that Multus processed the pod:

```bash
kubectl describe pod rdma-test | grep -A 30 network-status
```

```json
[{
    "name": "cbr0",
    "interface": "eth0",
    "ips": ["10.42.0.9"],
    "mac": "22:8a:8d:e8:3c:76",
    "default": true,
    "dns": {},
    "gateway": ["10.42.0.1"]
},{
    "name": "default/rdma-net",
    "interface": "net1",
    "ips": ["192.168.50.2"],
    "mac": "9e:08:29:80:a3:94",
    "dns": {}
}]
```

Two interfaces listed: `eth0` from Flannel (default route, management) and `net1` from our `rdma-net` NAD (macvlan on ConnectX-7, RDMA data path).

### Verify dual interfaces inside the pod

```bash
kubectl exec rdma-test -- ip a
```

```
2: eth0@if43: <BROADCAST,MULTICAST,UP,LOWER_UP> ...
    inet 10.42.0.9/24 brd 10.42.0.255 scope global eth0
3: net1@if2: <BROADCAST,MULTICAST,UP,LOWER_UP> ...
    inet 192.168.50.2/24 brd 192.168.50.255 scope global net1
```

Both interfaces are up. `eth0` carries Kubernetes service traffic; `net1` is our RDMA-capable secondary interface backed by the ConnectX-7.

### Verify RDMA device files

```bash
kubectl exec rdma-test -- ls /dev/infiniband/
```

```
rdma_cm  umad0  umad1  uverbs0  uverbs1
```

The RDMA device plugin has mounted the InfiniBand device files into the pod. `uverbs0` and `uverbs1` correspond to the two ConnectX-7 ports. `rdma_cm` is the RDMA connection manager.

### Run RDMA verbs inside the pod

```bash
kubectl exec rdma-test -- ibv_devinfo
```

```
hca_id: mlx5_0
  fw_ver: 28.40.1000
  vendor_part_id: 4129
  port: 1
    state:      PORT_ACTIVE (4)
    link_layer: Ethernet

hca_id: mlx5_1
  fw_ver: 28.40.1000
  vendor_part_id: 4129
  port: 1
    state:      PORT_DOWN (1)
    link_layer: Ethernet
```

RDMA verbs work from inside the Kubernetes pod. The ConnectX-7 is fully visible and operational through the container boundary.

---

## Architecture summary

The final pod networking topology — note that both interfaces share the same physical NIC port in this test setup:

![GH200 Dual-Network RDMA Architecture](/img/blog/gh200-dual-network-rdma-architecture.svg)

In production, the two pod interfaces would be backed by **physically separate NICs** — management traffic on one, RDMA training traffic on another — with `host-device` replacing `macvlan` for exclusive NIC access.

---

## What comes next

This single-node setup proves the full networking stack: Multus secondary interface attachment, RDMA device exposure into pods, and RDMA verbs working through the container namespace. The components validated here — Multus, macvlan, RDMA shared device plugin — are the same components used in production GPU training clusters.

The next steps for a production deployment:

1. **Multi-node NCCL testing** — Add a second GH200 node, run `nccl-tests` (`all_reduce_perf`) across nodes to validate GPU-to-GPU RDMA throughput through Kubernetes.

2. **GPUDirect RDMA verification** — Run `ib_write_bw --use_cuda=0` to confirm the NIC can DMA directly to GPU HBM memory, bypassing CPU memory.

3. **SR-IOV or host-device for dedicated NICs** — In production, each node would have a dedicated NIC pair: one for management, one for training. The training NIC would use `host-device` (exclusive pod access) or SR-IOV (hardware-partitioned virtual functions) instead of macvlan.

4. **Network Operator for fleet management** — At scale (dozens to hundreds of nodes), the NVIDIA Network Operator automates MOFED driver installation, device plugin deployment, and Multus configuration across the cluster. For a single node or small cluster, the manual setup described here gives you more control and visibility.

---

*This guide was tested on an NVIDIA GH200 Grace Hopper bare-metal instance running Ubuntu 22.04, k3s v1.34.6, Multus CNI (thick plugin), and the Mellanox RDMA shared device plugin. The ConnectX-7 NIC was running firmware 28.40.1000 with MOFED drivers.*

---

## Related

- [GPU Kubernetes Consulting →](/services/gpu-kubernetes)
- [GPU Networking & RDMA Consulting →](/services/gpu-networking)
- [GPU-to-GPU Communication Across Nodes →](/blog/gpu-to-gpu-communication-across-nodes)
