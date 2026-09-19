import React from "react"
import ServiceDetail from "@site/src/components/ServiceDetail"

export default function GPUNetworking() {
    return (
        <ServiceDetail
            seoTitle="GPU Networking & RDMA | BaaZ"
            seoDescription="RDMA network design and implementation for GPU clusters. InfiniBand, RoCE, GPUDirect RDMA, switch fabric design and NCCL optimization."
            breadcrumb="GPU Networking & RDMA"
            h1="GPU Networking & RDMA"
            lead="The network between your GPUs is the single biggest performance lever in distributed training. A misconfigured switch port or missing PFC config silently kills throughput for the entire cluster. We design and implement RDMA networks that run at wire rate."
            valueProps={[
                { title: "Lossless by design", body: "InfiniBand or RoCE v2 fabrics configured for real workloads: PFC, ECN/DCQCN, QoS and MTU tuned across NICs, switches and hosts." },
                { title: "Zero-copy across nodes", body: "GPUDirect RDMA verified across the path, so inter-node GPU traffic moves off the CPU entirely." },
                { title: "Forensic when it's broken", body: "We bring perftest, nccl-tests and switch counter experience to find why the fabric underperforms, then fix it in place." },
            ]}
            whatWeDo={{
                heading: "Design, build and repair the GPU fabric.",
                lead: "From switch topology down to the driver on each NIC, we make the RDMA path work and stay working.",
                rows: [
                    { n: "01", title: "InfiniBand fabric", body: "Quantum switch deployment, subnet manager configuration, adaptive routing, fat-tree and dragonfly topology design, partition keys." },
                    { n: "02", title: "RoCE v2 fabric", body: "Lossless Ethernet with PFC, ECN/DCQCN tuning, leaf-spine design, ECMP multi-path, jumbo frames and DSCP trust." },
                    { n: "03", title: "GPUDirect RDMA", body: "Zero-copy GPU-to-GPU transfers bypassing the CPU, peer memory module setup, GDR copy validation and firmware tuning." },
                    { n: "04", title: "Switch configuration", body: "Spectrum-X and Quantum switch deployment, port speed validation, error counter monitoring, QoS policies and MTU config." },
                    { n: "05", title: "Kubernetes networking", body: "Network Operator (NicClusterPolicy, RDMA device plugin), Multus secondary networks, SR-IOV, and dual-network designs that separate management from RDMA training traffic. We contributed the global config feature upstream." },
                ],
            }}
            steps={[
                { n: "01", title: "Assess", body: "Audit link speeds, error counters, PFC/ECN and PCIe topology." },
                { n: "02", title: "Design", body: "Fabric topology, oversubscription, QoS and traffic separation." },
                { n: "03", title: "Implement", body: "Configure switches, NICs, RDMA and GPUDirect. Validate across the path." },
                { n: "04", title: "Transfer", body: "Network monitoring dashboards, runbooks and documentation." },
            ]}
            tech={["InfiniBand", "RoCE v2", "GPUDirect RDMA", "ConnectX-6/7", "Spectrum-X", "Quantum", "NCCL", "Network Operator", "Multus", "SR-IOV", "MACVLAN"]}
            related={[
                { tag: "Blog", title: "Dual-Network RDMA on Kubernetes with GH200", to: "/blog/dual-network-rdma-kubernetes-gh200" },
                { tag: "Blog", title: "Adding Global Config to NVIDIA Network Operator", to: "/blog/global-config-nvidia-network-operator" },
                { tag: "Case study", title: "RDMA on Bare-Metal Kubernetes", to: "/case-studies/rdma-kubernetes", cta: "Read the case study" },
            ]}
            faqs={[
                { q: "What is RDMA and why does it matter for GPU training?", a: "RDMA lets NICs read and write remote memory directly, bypassing the CPU and kernel. Combined with GPUDirect RDMA, it enables zero-copy GPU-to-GPU transfers across nodes, giving far higher effective bandwidth and an order-of-magnitude lower latency than TCP on the same hardware." },
                { q: "Should I use InfiniBand or RoCE?", a: "Both deliver RDMA performance. InfiniBand is a purpose-built lossless fabric standard in DGX SuperPOD deployments. RoCE v2 runs RDMA over Ethernet: cheaper, more flexible, and the right choice for most cloud, colo and bare-metal clusters when PFC and ECN are configured correctly." },
                { q: "Do I need PFC and ECN for RoCE?", a: "Yes, if you want lossless RoCE v2. PFC prevents packet drops during microbursts and ECN signals congestion before buffers overflow. Without these configured across NICs, switches and host settings, RoCE falls over under load and NCCL silently underperforms." },
                { q: "What is GPUDirect RDMA?", a: "GPUDirect RDMA lets the NIC DMA directly to and from GPU memory without an intermediate CPU copy. It requires matched driver support, peer-memory modules and PCIe affinity between GPU and NIC. When enabled, inter-node GPU communication drops to single-digit microseconds." },
                { q: "Can you fix existing GPU networking problems?", a: "Yes. A lot of our work is forensic: NCCL falling back to TCP, PFC dropping packets under load, GPU-to-NIC PCIe affinity mismatches, wrong NCCL_IB_HCA, incorrect DSCP marking. We bring perftest, nccl-tests and switch counter experience to find and fix these without replacing hardware." },
                { q: "Do I need two NICs per GPU node?", a: "For production distributed training, yes. One NIC for Kubernetes management (pod CNI, API traffic, metrics) and one or more RDMA-capable NICs dedicated to NCCL and training traffic via Multus secondary networks. Single-NIC works for proofs of concept but degrades at scale." },
            ]}
            ctaEyebrow="Network holding back your GPUs?"
            ctaHeading="We'll profile your fabric, find the bottleneck and fix it."
        />
    )
}
