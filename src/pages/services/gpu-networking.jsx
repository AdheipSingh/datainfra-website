import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import FAQSection from "@site/src/components/FAQSection"
import styles from "./styles.module.css"

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GPU Networking & RDMA Consulting",
    "provider": { "@type": "Organization", "name": "BaaZ", "url": "https://baaz.dev" },
    "description": "RDMA network design for GPU clusters — InfiniBand, RoCE, GPUDirect RDMA, switch fabric design, and NCCL optimization.",
    "url": "https://baaz.dev/services/gpu-networking",
}

const faqItems = [
    {
        question: "What is RDMA and why does it matter for GPU training?",
        answer: "RDMA lets NICs read and write remote memory directly, bypassing the CPU and kernel. Combined with GPUDirect RDMA, it enables zero-copy GPU-to-GPU transfers across nodes — 5-10x higher bandwidth and an order-of-magnitude lower latency than TCP on the same hardware.",
    },
    {
        question: "Should I use InfiniBand or RoCE?",
        answer: "Both deliver RDMA performance. InfiniBand is a purpose-built lossless fabric standard in DGX SuperPOD deployments. RoCE v2 runs RDMA over Ethernet — cheaper, more flexible, and the right choice for most cloud, colo, and bare-metal clusters when PFC and ECN are configured correctly.",
    },
    {
        question: "Do I need PFC and ECN for RoCE?",
        answer: "Yes, if you want lossless RoCE v2. PFC prevents packet drops during microbursts, ECN signals congestion before buffers overflow. Without these configured end-to-end — NICs, switches, and host settings — RoCE falls over under load and NCCL silently underperforms.",
    },
    {
        question: "What is GPUDirect RDMA?",
        answer: "GPUDirect RDMA lets the NIC DMA directly to and from GPU memory without an intermediate CPU copy. It requires matched driver support, peer-memory modules, and PCIe affinity between GPU and NIC. When enabled, inter-node GPU communication drops to single-digit microseconds.",
    },
    {
        question: "Can you fix existing GPU networking problems?",
        answer: "Yes. A lot of our work is forensic: NCCL falling back to TCP, PFC dropping packets under load, GPU-NIC PCIe affinity mismatches, wrong NCCL_IB_HCA, incorrect DSCP marking. We bring perftest, nccl-tests, and switch counter experience to find and fix these without replacing hardware.",
    },
    {
        question: "Do I need two NICs per GPU node?",
        answer: "For production distributed training, yes. One NIC for Kubernetes management (pod CNI, API traffic, metrics) and one or more RDMA-capable NICs dedicated to NCCL/training traffic via Multus secondary networks. Single-NIC works for POCs but degrades at scale.",
    },
]

export default function GPUNetworking() {
    return (
        <Layout
            title="GPU Networking & RDMA Consulting"
            description="RDMA network design and implementation for GPU clusters. InfiniBand, RoCE, GPUDirect RDMA, NCCL optimization. Sub-microsecond latency, wire-rate transfers."
        >
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Head>
            <Navbar />
            <main className={styles.subPage}>
                <span className={styles.subLabel}>Service</span>
                <h1 className={styles.subTitle}>GPU Networking & RDMA</h1>
                <p className={styles.subLead}>
                    The network between your GPUs is the single biggest performance lever in distributed
                    training. A misconfigured switch port or missing PFC config silently kills throughput
                    for the entire cluster. We design and implement RDMA networks that run at wire rate.
                </p>

                <div className={styles.metricsRow}>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>400 Gb/s</span>
                        <span className={styles.metricBoxLabel}>Per-Port Bandwidth</span>
                    </div>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>&lt;2 μs</span>
                        <span className={styles.metricBoxLabel}>RDMA Latency</span>
                    </div>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>Zero</span>
                        <span className={styles.metricBoxLabel}>CPU Overhead</span>
                    </div>
                </div>

                <h2 className={styles.subH2}>What We Do</h2>
                <ul className={styles.subList}>
                    <li><strong>InfiniBand fabric</strong> — Quantum switch deployment, subnet manager configuration, adaptive routing, fat-tree/dragonfly topology design, partition keys</li>
                    <li><strong>RoCE v2 fabric</strong> — Lossless Ethernet with PFC, ECN/DCQCN tuning, leaf-spine design, ECMP multi-path, jumbo frames, DSCP trust</li>
                    <li><strong>GPUDirect RDMA</strong> — Zero-copy GPU-to-GPU transfers bypassing CPU, peer memory module setup, GDR copy validation, firmware tuning</li>
                    <li><strong>Switch configuration</strong> — Spectrum-X / Quantum switch deployment, port speed validation, error counter monitoring, QoS policies, MTU config</li>
                    <li><strong>Network Operator on Kubernetes</strong> — NicClusterPolicy setup, Multus secondary networks, SR-IOV, RDMA device plugin. We contributed the <Link to="/blog/global-config-nvidia-network-operator" className={styles.subLink}>global config feature</Link></li>
                    <li><strong>Dual-network architectures</strong> — Separate management and RDMA training networks, MACVLAN/IPVLAN secondary interfaces, network isolation for multi-tenant clusters</li>
                </ul>

                <h2 className={styles.subH2}>Proof</h2>
                <p className={styles.subP}>
                    We configured GPUDirect RDMA over RoCE on bare-metal Kubernetes with ConnectX-6 NICs.
                    Result: <strong>10x inter-node latency reduction</strong> and <strong>8.5x training
                    throughput improvement</strong> over the previous TCP configuration.
                </p>
                <p className={styles.subP}>
                    We also deployed{" "}
                    <Link to="/blog/dual-network-rdma-kubernetes-gh200" className={styles.subLink}>
                        dual-network Kubernetes pods with RDMA on NVIDIA GH200
                    </Link>
                    {" "}— separate management and training networks with working RDMA verbs.
                </p>

                <h2 className={styles.subH2}>InfiniBand vs RoCE</h2>
                <table className={styles.comparisonTable}>
                    <thead>
                        <tr><th></th><th>InfiniBand</th><th>RoCE v2</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Lossless guarantee</strong></td><td>Built-in (credit-based)</td><td>Requires PFC config</td></tr>
                        <tr><td><strong>Congestion handling</strong></td><td>Native</td><td>ECN/DCQCN must be tuned</td></tr>
                        <tr><td><strong>Bandwidth</strong></td><td>400 Gb/s (NDR)</td><td>400 Gb/s (ConnectX-7)</td></tr>
                        <tr><td><strong>Switch vendors</strong></td><td>NVIDIA Quantum only</td><td>Multiple vendors</td></tr>
                        <tr><td><strong>Ops complexity</strong></td><td>Needs subnet manager</td><td>Standard Ethernet ops</td></tr>
                        <tr><td><strong>Cost</strong></td><td>Higher</td><td>Lower</td></tr>
                    </tbody>
                </table>

                <h2 className={styles.subH2}>How We Work</h2>
                <div className={styles.processRow}>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>1</div>
                        <p className={styles.processBoxTitle}>Assess</p>
                        <p className={styles.processBoxDesc}>Audit link speeds, error counters, PFC/ECN, PCIe topology.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>2</div>
                        <p className={styles.processBoxTitle}>Design</p>
                        <p className={styles.processBoxDesc}>Fabric topology, oversubscription, QoS, traffic separation.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>3</div>
                        <p className={styles.processBoxTitle}>Implement</p>
                        <p className={styles.processBoxDesc}>Configure switches, NICs, RDMA, GPUDirect. Validate end-to-end.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>4</div>
                        <p className={styles.processBoxTitle}>Transfer</p>
                        <p className={styles.processBoxDesc}>Network monitoring dashboards, runbooks, documentation.</p>
                    </div>
                </div>

                <h2 className={styles.subH2}>Technologies</h2>
                <div className={styles.techTagsRow}>
                    {["InfiniBand", "RoCE v2", "GPUDirect RDMA", "ConnectX-6/7", "Spectrum-X", "Quantum", "NCCL", "Network Operator", "Multus", "SR-IOV", "MACVLAN"].map(t => (
                        <span key={t} className={styles.subTag}>{t}</span>
                    ))}
                </div>

                <h2 className={styles.subH2}>Related</h2>
                <ul className={styles.relatedList}>
                    <li><Link to="/blog/dual-network-rdma-kubernetes-gh200" className={styles.subLink}>Dual-Network RDMA on GH200 →</Link></li>
                    <li><Link to="/blog/gpu-to-gpu-communication-across-nodes" className={styles.subLink}>GPU-to-GPU Communication Across Nodes →</Link></li>
                    <li><Link to="/blog/global-config-nvidia-network-operator" className={styles.subLink}>Adding Global Config to NVIDIA Network Operator →</Link></li>
                    <li><Link to="/blog/network-bottleneck-distributed-training" className={styles.subLink}>Network Bottlenecks in Distributed Training →</Link></li>
                    <li><Link to="/services/distributed-training" className={styles.subLink}>Distributed Training Optimization →</Link></li>
                </ul>

                <FAQSection items={faqItems} />

                <div className={styles.subCta}>
                    <h2 className={styles.subCtaTitle}>Network Holding Back Your GPUs?</h2>
                    <p className={styles.subCtaText}>
                        We'll profile your fabric, find the bottleneck, and fix it. RDMA, GPUDirect, switch configs — all of it.
                    </p>
                    <a href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer" className={styles.subCtaButton}>
                        Schedule a Call
                    </a>
                </div>
            </main>
        </Layout>
    )
}
