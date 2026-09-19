import React from "react"
import ServiceDetail from "@site/src/components/ServiceDetail"

export default function DistributedTraining() {
    return (
        <ServiceDetail
            seoTitle="Distributed Training Optimization | BaaZ"
            seoDescription="Fix slow multi-node GPU training. NCCL tuning, RDMA configuration, GPUDirect setup and topology-aware placement on production clusters."
            breadcrumb="Distributed Training Optimization"
            h1="Distributed Training Optimization"
            lead="Multi-node training that barely scales past a single node. GPUs sitting idle during AllReduce. NCCL timeouts killing overnight runs. We fix the network and configuration layer that causes all of this."
            valueProps={[
                { title: "The network is the lever", body: "Most underperforming clusters are misconfigured, not under-provisioned. We recover throughput on the NICs and switches you already own." },
                { title: "Verified, not guessed", body: "We profile with nccl-tests and perftest, then tune against measured AllReduce-to-compute ratios rather than defaults." },
                { title: "We do the implementation", body: "NCCL algorithm selection, RDMA fabric config and topology-aware placement, applied and validated on your cluster." },
            ]}
            whatWeDo={{
                heading: "The path your gradients travel.",
                lead: "We tune every hop from GPU memory to the wire and back, so collective communication stops stalling the job.",
                rows: [
                    { n: "01", title: "NCCL tuning", body: "Algorithm selection (Ring, Tree, CollnetDirect), protocol tuning, buffer sizing and thread configuration for your specific topology." },
                    { n: "02", title: "RDMA / RoCE configuration", body: "PFC, ECN/DCQCN, GID indexes, traffic class and DSCP marking, with lossless validation across NICs, switches and hosts." },
                    { n: "03", title: "InfiniBand optimization", body: "Subnet manager config, adaptive routing, partition keys and rail-optimized topologies." },
                    { n: "04", title: "GPUDirect RDMA setup", body: "Zero-copy GPU-to-GPU transfers, peer memory modules and GDR copy validation." },
                    { n: "05", title: "Topology and profiling", body: "NVLink/NVSwitch intra-node routing, PCIe affinity and NUMA-aware placement, plus perftest and nccl-tests to find the real bottleneck." },
                ],
            }}
            steps={[
                { n: "01", title: "Assess", body: "Profile your network fabric, NCCL config and GPU topology." },
                { n: "02", title: "Diagnose", body: "Find the real bottleneck. It is usually the network." },
                { n: "03", title: "Implement", body: "Tune NCCL, configure RDMA and fix switch configs." },
                { n: "04", title: "Transfer", body: "Document everything so your team operates independently." },
            ]}
            tech={["NCCL", "InfiniBand", "RoCE v2", "GPUDirect RDMA", "ConnectX-6/7", "PyTorch DDP", "FSDP", "DeepSpeed", "Megatron-LM", "H100", "A100", "GH200"]}
            related={[
                { tag: "Blog", title: "How to Calculate if Your Network is Bottlenecking Training", to: "/blog/network-bottleneck-distributed-training" },
                { tag: "Blog", title: "GPU-to-GPU Communication Across Nodes: What Actually Works", to: "/blog/gpu-to-gpu-communication-across-nodes" },
                { tag: "Service", title: "GPU Networking & RDMA", to: "/services/gpu-networking", cta: "Learn more" },
            ]}
            faqs={[
                { q: "What is distributed training optimization?", a: "It is the practice of tuning GPU networking, NCCL and collective-communication paths so multi-node training scales near-linearly with node count. That means RDMA/RoCE configuration, GPUDirect RDMA, NCCL algorithm tuning and topology-aware process placement to eliminate network-induced GPU idle time." },
                { q: "How do I know if my multi-node training is network-bound?", a: "If scaling from 8 to 64 GPUs delivers far less throughput than the added GPUs should, or GPUs sit idle during AllReduce, the network is the bottleneck. Profiling with nccl-tests and per-iteration timing of AllReduce versus compute will confirm it." },
                { q: "What is the difference between NCCL over TCP and NCCL over RDMA?", a: "NCCL over TCP goes through the kernel networking stack. NCCL over RDMA (RoCE v2 or InfiniBand) bypasses the CPU, uses zero-copy GPU-to-GPU transfers via GPUDirect RDMA, and delivers far higher effective bandwidth with an order-of-magnitude lower latency." },
                { q: "Do I need InfiniBand, or is RoCE enough?", a: "Both work. InfiniBand is a lossless, purpose-built fabric standard in DGX SuperPOD deployments. RoCE v2 runs RDMA over Ethernet and reaches comparable throughput when configured correctly with PFC and ECN, often the better fit for cloud, colo and bare-metal Kubernetes clusters." },
                { q: "Can you fix distributed training issues without changing hardware?", a: "Often, yes. Many underperforming clusters are misconfigured rather than under-provisioned: NCCL falling back to TCP, PFC/ECN disabled, wrong IB_HCA selection, NUMA-misaligned processes. We frequently recover lost throughput using the existing NICs and switches." },
                { q: "How do you prove the improvement?", a: "We baseline with nccl-tests and per-iteration timing before touching anything, apply the configuration changes, then re-run the same benchmarks so the difference in AllReduce time and scaling efficiency is measured, not asserted." },
            ]}
            ctaEyebrow="Struggling with multi-node training?"
            ctaHeading="Let's look at your NCCL config and network fabric and tell you what's wrong."
        />
    )
}
