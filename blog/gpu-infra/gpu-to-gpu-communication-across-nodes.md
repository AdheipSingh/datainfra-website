---
slug: gpu-to-gpu-communication-across-nodes
title: "GPU-to-GPU Communication Across Nodes: What Actually Works"
description: A practical guide to NVLink, NVSwitch, InfiniBand, RoCE, and GPUDirect for multi-node GPU clusters. Cut through the jargon and understand what hardware and software you actually need for distributed training.
url: gpu-to-gpu-communication-across-nodes
authors: [Adheip Singh]
date: 2025-01-18T10:00
tags: [gpu, infrastructure, networking, distributed-training, nvlink, infiniband, rdma]
---

If you're building a multi-node GPU cluster for distributed training, you've probably run into a confusing mess of terminology — NVLink, NVSwitch, InfiniBand, RoCE, GPUDirect. Half the blog posts out there mix these up, and vendor documentation assumes you already know what you're doing.

So let's sort this out.

<!--truncate-->

## NVLink and NVSwitch

NVLink is NVIDIA's high-speed interconnect for GPU-to-GPU communication. We're talking 600-900+ GB/s depending on the generation. Originally, NVLink was limited to GPUs within a single server — a direct point-to-point link between cards on the same motherboard.

NVSwitch changed that. It acts as a high-bandwidth crossbar switch that connects multiple GPUs together. Within a single node (like a DGX A100 or H100), NVSwitch lets all 8 GPUs talk to each other at full NVLink speed.

But here's where it gets interesting: in newer configurations like the DGX SuperPOD and GB200 NVL72, NVSwitch extends across nodes. The NVLink fabric becomes rack-scale, connecting 72 or more GPUs with NVLink bandwidth between them — regardless of which physical server they sit in. This is the gold standard for large-scale training, but it requires purpose-built systems. You can't just buy NVSwitch separately and add it to commodity servers.

For most of us building clusters from standard hardware, inter-node communication means going over a network.

## The Real Options for Inter-Node Communication

When GPU 0 on Server A needs to send data to GPU 1 on Server B, that data has to travel over some kind of network. Your options are:

### 1. Regular TCP/IP over Ethernet

This works. It's what happens by default if you don't have anything special set up. Your training framework (PyTorch, TensorFlow) will use NCCL, and NCCL will fall back to socket-based communication.

The problem: it's slow. The data path looks like this:

```
GPU → PCIe → CPU → System RAM → NIC → Network → NIC → System RAM → CPU → PCIe → GPU
```

Every transfer bounces through the CPU and system memory twice. For large gradient synchronizations, this becomes a serious bottleneck.

### 2. RDMA (Remote Direct Memory Access)

RDMA lets one machine write directly into another machine's memory without involving the CPU. It's been around for decades in HPC.

Two main flavors:

- **InfiniBand** — dedicated fabric, purpose-built for this, lowest latency
- **RoCE (RDMA over Converged Ethernet)** — RDMA that runs over regular Ethernet infrastructure

Both give you much better throughput and latency than TCP, but we're still going through system RAM.

### 3. GPUDirect RDMA

This is where it gets interesting. GPUDirect RDMA combines GPU direct memory access with network RDMA. The data path becomes:

```
GPU → PCIe → NIC → Network → NIC → PCIe → GPU
```

The CPU and system memory are completely bypassed. The NIC reads directly from GPU memory on one end and writes directly to GPU memory on the other.

For distributed training where you're constantly shuffling gradients between nodes, this makes a big difference.

## What Hardware Do You Need?

To get GPUDirect RDMA working, you need:

### Network Cards

You'll need RDMA-capable NICs. The NVIDIA ConnectX series (ConnectX-6, ConnectX-7) is the go-to choice because they support GPUDirect out of the box. These come in both InfiniBand and Ethernet variants.

### Switches

If you go the InfiniBand route, you need InfiniBand switches (NVIDIA Quantum series). These are expensive but purpose-built for this workload.

For RoCE, you can use Ethernet switches, but they need to support Data Center Bridging (DCB) — specifically Priority Flow Control (PFC) and ECN. Without these, RoCE performance falls apart under congestion. Not every switch supports this properly, so check the specs.

### GPUs

Most modern NVIDIA datacenter and workstation GPUs support GPUDirect RDMA — A100, H100, RTX A6000, etc. Consumer cards (GeForce) generally don't.

## InfiniBand vs RoCE: Which One?

This is the classic debate.

**InfiniBand** gives you the best raw performance. Lower latency, higher bandwidth, more predictable behavior. It's what you'll find in serious HPC clusters and most large-scale ML training setups. The downside is cost — both the NICs and switches are more expensive, and you're running a separate network fabric.

**RoCE** lets you do RDMA over your existing Ethernet infrastructure. Cheaper, simpler to integrate if you already have a good Ethernet setup. The catch is that RoCE is sensitive to network configuration. Get the PFC/ECN settings wrong and performance tanks. It's not plug-and-play.

For a small cluster (2-8 nodes), RoCE often makes sense from a cost perspective. For larger deployments or when you need maximum performance, InfiniBand is usually worth the investment.

## The Software Side

Hardware is only half the story. The software stack matters too.

**NCCL (NVIDIA Collective Communications Library)** handles the actual GPU-to-GPU communication in most deep learning frameworks. It's smart enough to detect what hardware you have and use the fastest available path — NVLink for intra-node, GPUDirect RDMA for inter-node if available, TCP as a fallback.

**UCX (Unified Communication X)** is another option, used by some MPI implementations and frameworks. It also supports GPUDirect RDMA.

On Kubernetes, you'll typically add the **NVIDIA Network Operator** to manage the RDMA NICs and expose them to your pods.

## What Actually Happens During Distributed Training

When you run distributed training across multiple nodes, the most network-intensive operation is gradient synchronization. After each forward and backward pass, every GPU has computed gradients that need to be aggregated across all GPUs.

The standard approach is all-reduce — every GPU ends up with the same averaged gradients. With 8 GPUs across 2 nodes, that's a lot of data moving around. Depending on your model, this could be hundreds of megabytes or several gigabytes per iteration.

If this transfer is slow, your expensive GPUs sit idle waiting for network operations to complete. That's why the interconnect matters so much.

## Quick Summary

| Option | Performance | Cost | Notes |
|--------|-------------|------|-------|
| **NVLink + NVSwitch** | Fastest | Highest | Now supports multi-node in DGX SuperPOD and GB200, requires purpose-built hardware |
| **InfiniBand + GPUDirect RDMA** | Excellent | High | Standard for HPC and large ML clusters, best performance on commodity hardware |
| **RoCE + GPUDirect RDMA** | Good | Medium | Works over Ethernet, needs proper switch configuration |
| **TCP/IP** | Slow | Low | Always works, fine for development, painful for production |

If you're building a multi-node training setup from standard servers, getting GPUDirect RDMA working should be near the top of your list. The difference between TCP and RDMA can easily be 5-10x in effective throughput, and that translates directly to faster training times.
