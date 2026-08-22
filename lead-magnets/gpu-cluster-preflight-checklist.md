# GPU Cluster Pre-Flight Checklist

A one-pager from BaaZ (baaz.dev). Work through it top to bottom before you
trust a cluster with real training or inference workloads. Each item is
something we have seen silently wrong in a "working" cluster.

## 1. Network fabric and RDMA data path

- [ ] NCCL is actually using RDMA, not TCP. Run the 5-minute NCCL fallback
      test (nccl-fallback-test.sh) across two nodes and look for `NET/IB`
      in the log. `NET/Socket` on an RDMA-equipped cluster means you are
      leaving most of your multi-node performance on the table.
- [ ] GPUDirect RDMA is in the path: `nvidia-peermem` (or dmabuf) loaded,
      and NCCL log shows `GPU Direct RDMA` enabled for the NICs.
- [ ] `NCCL_IB_GID_INDEX` matches your RoCEv2 config (`show_gids` on the
      host). Wrong index = silent fallback to TCP.
- [ ] PFC/ECN configured on the switch for RoCE traffic class; counters for
      pause frames and ECN marks are visible and near zero at idle.
- [ ] measured all_reduce bus bandwidth is a large fraction of link rate
      (rule of thumb: expect >80% of line rate on a healthy 2-node RoCE
      setup with 100MB+ payloads).
- [ ] On Kubernetes: the RDMA NIC is reachable *from inside training pods*
      (Multus/secondary network attached, device plugin resources granted).
      Host-level tests prove nothing about the pod data path.

## 2. NCCL and training stack

- [ ] One pinned NCCL version across all nodes/images; mixed versions cause
      hangs that look like network problems.
- [ ] `NCCL_SOCKET_IFNAME` / `NCCL_IB_HCA` set explicitly so NCCL cannot
      pick the management interface.
- [ ] A known-good nccl-tests (`all_reduce_perf`) baseline is recorded
      somewhere your team can find - you cannot spot a regression without
      a baseline.

## 3. Scheduler and sharing

- [ ] Distributed jobs are gang-scheduled (KAI Scheduler, Volcano, or
      Slurm) - partial placement deadlocks waste GPU-days.
- [ ] GPU requests/limits, quotas, and preemption policy are explicit per
      team; "SSH and hope" is not multi-tenancy.
- [ ] Utilization is measured per job (DCGM), not just per node - 100%
      `nvidia-smi` "utilization" can hide idle SMs.

## 4. GPU health and observability

- [ ] DCGM exporter running on every node; dashboards show XID errors, ECC
      counts, thermals, and power per GPU.
- [ ] Alerts exist for the failure modes that kill overnight jobs: XID
      errors, GPU falling off the bus, thermal throttling, ECC page
      retirement.
- [ ] `nvidia-smi -q` firmware/driver/CUDA versions are identical across
      nodes (see §6).

## 5. Storage data path

- [ ] Data loading is benchmarked separately from training - a saturated
      NFS mount looks exactly like "slow GPUs".
- [ ] Checkpoint write time is measured and does not stall training
      (async/sharded checkpointing for large models).
- [ ] Scratch space (local NVMe) exists and jobs actually use it instead
      of hammering shared storage.

## 6. Node build consistency

- [ ] Nodes are built from a repeatable recipe (PXE/MaaS, image, or IaC) - not hand-configured. You will need to rebuild one at the worst time.
- [ ] Kernel, NVIDIA driver, MOFED/DOCA, container runtime, and firmware
      (GPU, NIC, BMC) versions are pinned and identical across nodes.
- [ ] IOMMU/ACS settings are deliberate and consistent - ACS quietly
      disables P2P and GPUDirect on many boards.
- [ ] A fresh node can be enrolled (BMC → provisioned → joined → passing
      the NCCL test) without archaeology.

---

If several boxes are unchecked and you want them fixed rather than
documented: https://baaz.dev/audit - a fixed-scope, two-week GPU Cluster
Audit. Safe fixes ship during the audit; the rest arrives as a prioritized
plan.
