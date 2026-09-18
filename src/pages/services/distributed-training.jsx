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
    "name": "Distributed Training Optimization",
    "provider": { "@type": "Organization", "name": "BaaZ", "url": "https://baaz.dev" },
    "description": "NCCL tuning, RDMA configuration, GPUDirect RDMA setup, and network topology optimization for multi-node GPU training.",
    "url": "https://baaz.dev/services/distributed-training",
}

const faqItems = [
    {
        question: "What is distributed training optimization?",
        answer: "It's the practice of tuning GPU networking, NCCL, and collective-communication paths so multi-node training scales near-linearly with node count - RDMA/RoCE configuration, GPUDirect RDMA, NCCL algorithm tuning, and topology-aware process placement to eliminate network-induced GPU idle time.",
    },
    {
        question: "How do I know if my multi-node training is network-bound?",
        answer: "If scaling from 8 to 64 GPUs delivers far less than the added GPUs should, or GPUs sit idle during AllReduce, the network is the bottleneck. Profiling with nccl-tests and per-iteration timing of AllReduce vs compute will confirm it.",
    },
    {
        question: "What is the difference between NCCL over TCP and NCCL over RDMA?",
        answer: "NCCL over TCP goes through the kernel networking stack. NCCL over RDMA (RoCE v2 or InfiniBand) bypasses the CPU, uses zero-copy GPU-to-GPU transfers via GPUDirect RDMA, and delivers much higher effective bandwidth and an order-of-magnitude lower latency.",
    },
    {
        question: "Do I need InfiniBand, or is RoCE enough?",
        answer: "Both work. InfiniBand is a lossless, purpose-built fabric standard in DGX SuperPOD deployments. RoCE v2 runs RDMA over Ethernet and achieves comparable throughput when configured correctly with PFC and ECN - often the better fit for cloud, colo, and bare-metal Kubernetes clusters.",
    },
    {
        question: "Can you fix distributed training issues without changing hardware?",
        answer: "Often, yes. Many underperforming clusters are misconfigured rather than under-provisioned: NCCL falling back to TCP, PFC/ECN disabled, wrong IB_HCA selection, NUMA-misaligned processes. We frequently recover lost throughput using existing NICs and switches.",
    },
    {
        question: "What results do BaaZ clients typically see?",
        answer: "Higher training throughput moving from TCP to properly configured RDMA, inter-node latency dropping from hundreds of microseconds to single digits with GPUDirect, near-linear scaling across nodes, and elimination of NCCL timeouts.",
    },
]

export default function DistributedTraining() {
    return (
        <Layout
            title="Distributed Training Optimization"
            description="Fix slow multi-node GPU training. NCCL tuning, RDMA configuration, GPUDirect setup. We fix slow multi-node GPU training on production clusters."
        >
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Head>
            <Navbar />
            <main className={styles.subPage}>
                <span className={styles.subLabel}>Service</span>
                <h1 className={styles.subTitle}>Distributed Training Optimization</h1>
                <p className={styles.subLead}>
                    Multi-node training that barely scales past a single node. GPUs sitting idle during AllReduce.
                    NCCL timeouts killing overnight runs. We fix the network and configuration layer that
                    causes all of this.
                </p>

                <h2 className={styles.subH2}>What We Do</h2>
                <ul className={styles.subList}>
                    <li><strong>NCCL tuning</strong>: algorithm selection (Ring/Tree/CollnetDirect), protocol tuning, buffer sizing, thread configuration for your specific topology</li>
                    <li><strong>RDMA/RoCE configuration</strong>: PFC, ECN/DCQCN, GID indexes, traffic class, DSCP marking, lossless validation across NICs, switches, and hosts</li>
                    <li><strong>InfiniBand optimization</strong>: subnet manager config, adaptive routing, partition keys, rail-optimized topologies</li>
                    <li><strong>GPUDirect RDMA setup</strong>: zero-copy GPU-to-GPU transfers, peer memory modules, GDR copy validation</li>
                    <li><strong>Topology-aware optimization</strong>: NVLink/NVSwitch intra-node routing, PCIe affinity alignment, NUMA-aware process placement</li>
                    <li><strong>Profiling and diagnostics</strong>: perftest benchmarks, NCCL test validation, bandwidth calculators, bottleneck identification</li>
                </ul>

                <h2 className={styles.subH2}>Proof</h2>
                <p className={styles.subP}>
                    We helped a computer vision company go from TCP-based multi-node training to GPUDirect
                    RDMA over RoCE on bare-metal Kubernetes. Result: gradient sync moved off the CPU onto the
                    RDMA path, and multi-node training stopped being network-bound.
                </p>
                <p>
                    <Link to="/case-studies/rdma-kubernetes" className={styles.subLink}>
                        Read the full case study →
                    </Link>
                </p>

                <h2 className={styles.subH2}>How We Work</h2>
                <div className={styles.processRow}>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>1</div>
                        <p className={styles.processBoxTitle}>Assess</p>
                        <p className={styles.processBoxDesc}>Profile your network fabric, NCCL config, and GPU topology.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>2</div>
                        <p className={styles.processBoxTitle}>Diagnose</p>
                        <p className={styles.processBoxDesc}>Find the real bottleneck. It's usually the network.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>3</div>
                        <p className={styles.processBoxTitle}>Implement</p>
                        <p className={styles.processBoxDesc}>Tune NCCL, configure RDMA, fix switch configs.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>4</div>
                        <p className={styles.processBoxTitle}>Transfer</p>
                        <p className={styles.processBoxDesc}>Document everything so your team operates independently.</p>
                    </div>
                </div>

                <h2 className={styles.subH2}>Technologies</h2>
                <div className={styles.techTagsRow}>
                    {["NCCL", "InfiniBand", "RoCE v2", "GPUDirect RDMA", "ConnectX-6/7", "PyTorch DDP", "DeepSpeed", "Megatron-LM", "FSDP", "H100", "A100", "GH200"].map(t => (
                        <span key={t} className={styles.subTag}>{t}</span>
                    ))}
                </div>

                <h2 className={styles.subH2}>Related</h2>
                <ul className={styles.relatedList}>
                    <li><Link to="/blog/network-bottleneck-distributed-training" className={styles.subLink}>How to Calculate if Your Network is Bottlenecking Training →</Link></li>
                    <li><Link to="/blog/gpu-to-gpu-communication-across-nodes" className={styles.subLink}>GPU-to-GPU Communication Across Nodes →</Link></li>
                    <li><Link to="/blog/dual-network-rdma-kubernetes-gh200" className={styles.subLink}>Dual-Network RDMA on GH200 →</Link></li>
                    <li><Link to="/services/gpu-networking" className={styles.subLink}>GPU Networking & RDMA Service →</Link></li>
                    <li><Link to="/services/ai-factory" className={styles.subLink}>AI Factory Setup →</Link></li>
                </ul>

                <FAQSection items={faqItems} />

                <div className={styles.subCta}>
                    <h2 className={styles.subCtaTitle}>Struggling with Multi-Node Training?</h2>
                    <p className={styles.subCtaText}>
                        No sales pitch. We'll look at your NCCL config and network fabric and tell you what's wrong.
                    </p>
                    <a href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer" className={styles.subCtaButton}>
                        Schedule a Call
                    </a>
                </div>
            </main>
        </Layout>
    )
}
