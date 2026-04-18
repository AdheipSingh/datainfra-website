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
    "name": "AI Factory Setup Consulting",
    "provider": { "@type": "Organization", "name": "BaaZ", "url": "https://baaz.dev" },
    "description": "End-to-end AI factory architecture: compute, RDMA networking, storage, Kubernetes/Slurm orchestration, and GPU operations.",
    "url": "https://baaz.dev/services/ai-factory",
}

const faqItems = [
    {
        question: "What is an AI factory?",
        answer: "A full-stack GPU compute environment purpose-built for AI training and inference — compute, high-speed networking, storage, orchestration, observability, and tenancy — operated as a product for internal or external AI teams.",
    },
    {
        question: "How long does it take to stand up a production GPU cluster?",
        answer: "For a well-scoped deployment on dedicated hardware, a functional training-ready GPU cluster is typically weeks, not months. Full production hardening — multi-tenancy, self-service, cost allocation, SLOs — is usually a follow-on phase.",
    },
    {
        question: "Should I build on-prem, in a colo, or in the cloud?",
        answer: "Cloud is fastest to start and best for bursty workloads. Colo hits a lower $/GPU-hour once utilization is above 50-60%. On-prem makes sense for the largest sustained fleets and regulated environments. We help model the tradeoff with your real numbers.",
    },
    {
        question: "What storage architecture do I need?",
        answer: "Training I/O is dominated by large-file sequential reads and checkpoint writes. Most clusters combine a parallel filesystem (Lustre, WEKA, VAST) or high-throughput object store for datasets, plus local NVMe for checkpoints and scratch.",
    },
    {
        question: "How do you size the network fabric?",
        answer: "We size inter-node bandwidth from the model's gradient volume and target AllReduce-to-compute ratio, then pick NICs and switch radix accordingly. GPU-to-GPU fabric uses non-blocking or 2:1 CLOS topologies with RoCE v2 or InfiniBand.",
    },
    {
        question: "Do you operate the cluster after it is built?",
        answer: "Both. We lead greenfield builds end-to-end and can hand off to your SRE/platform team with documentation and runbooks, or stay on as a co-operating partner for a defined period while they ramp up.",
    },
]

export default function AIFactory() {
    return (
        <Layout
            title="AI Factory Setup Consulting"
            description="End-to-end AI factory architecture and implementation. Compute, networking, storage, orchestration, and operations — production-ready from day one."
        >
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Head>
            <Navbar />
            <main className={styles.subPage}>
                <span className={styles.subLabel}>Service</span>
                <h1 className={styles.subTitle}>AI Factory Setup</h1>
                <p className={styles.subLead}>
                    You're building a GPU cluster from scratch — on-prem, colo, or cloud. You want to get
                    compute, networking, storage, orchestration, and monitoring right the first time without
                    spending months figuring out what NVIDIA's docs don't tell you.
                </p>

                <div className={styles.metricsRow}>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>End-to-End</span>
                        <span className={styles.metricBoxLabel}>Architecture Design</span>
                    </div>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>Day 1</span>
                        <span className={styles.metricBoxLabel}>Production Ready</span>
                    </div>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>Full Stack</span>
                        <span className={styles.metricBoxLabel}>Implementation</span>
                    </div>
                </div>

                <h2 className={styles.subH2}>What We Do</h2>
                <ul className={styles.subList}>
                    <li><strong>Compute layer</strong> — GPU server selection (DGX, HGX, custom builds), H100/H200/B200 sizing, NVLink/NVSwitch topology, power and cooling planning</li>
                    <li><strong>Network layer</strong> — RDMA fabric design (InfiniBand or RoCE), leaf-spine topology, compute/storage network separation, GPUDirect RDMA</li>
                    <li><strong>Storage layer</strong> — Parallel filesystem selection (Lustre, WekaFS, GPFS), checkpoint storage, data staging, GPUDirect Storage</li>
                    <li><strong>Orchestration</strong> — Kubernetes with GPU Operator + KAI Scheduler, or Slurm with Pyxis/Enroot. Multi-tenancy, quotas, job scheduling</li>
                    <li><strong>Operations</strong> — DCGM monitoring, XID error detection, automated fault recovery, capacity planning, runbooks</li>
                    <li><strong>Cost planning</strong> — TCO analysis across hardware, facility, and ops. Build-vs-buy comparison for your workload</li>
                </ul>

                <h2 className={styles.subH2}>Proof</h2>
                <p className={styles.subP}>
                    We've built GPU clusters from zero for multiple companies — from 3-node bare-metal setups
                    with RTX 5000 Ada to multi-rack H100 deployments with full RDMA fabric. We built the
                    GPUaaS platform at Aarna Networks from day one through its acquisition by Armada.
                </p>
                <p>
                    <Link to="/case-studies/rdma-kubernetes" className={styles.subLink}>
                        Read case study: 8.5x Faster Training with RDMA →
                    </Link>
                </p>

                <h2 className={styles.subH2}>How We Work</h2>
                <div className={styles.processRow}>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>1</div>
                        <p className={styles.processBoxTitle}>Scope</p>
                        <p className={styles.processBoxDesc}>Understand your workload, scale, budget, and timeline.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>2</div>
                        <p className={styles.processBoxTitle}>Design</p>
                        <p className={styles.processBoxDesc}>Architecture document covering all five layers with hardware BOM.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>3</div>
                        <p className={styles.processBoxTitle}>Build</p>
                        <p className={styles.processBoxDesc}>Rack, cable, configure, test. We do the implementation.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>4</div>
                        <p className={styles.processBoxTitle}>Handoff</p>
                        <p className={styles.processBoxDesc}>Runbooks, dashboards, and knowledge transfer.</p>
                    </div>
                </div>

                <h2 className={styles.subH2}>Technologies</h2>
                <div className={styles.techTagsRow}>
                    {["H100", "H200", "B200", "DGX", "HGX", "InfiniBand", "RoCE", "Spectrum-X", "Kubernetes", "Slurm", "GPU Operator", "KAI Scheduler", "Lustre", "WekaFS", "DCGM", "Prometheus", "Grafana"].map(t => (
                        <span key={t} className={styles.subTag}>{t}</span>
                    ))}
                </div>

                <h2 className={styles.subH2}>Related</h2>
                <ul className={styles.relatedList}>
                    <li><Link to="/blog/gpu-to-gpu-communication-across-nodes" className={styles.subLink}>GPU-to-GPU Communication Across Nodes →</Link></li>
                    <li><Link to="/blog/network-bottleneck-distributed-training" className={styles.subLink}>Network Bottlenecks in Distributed Training →</Link></li>
                    <li><Link to="/services/distributed-training" className={styles.subLink}>Distributed Training Optimization →</Link></li>
                    <li><Link to="/services/gpu-networking" className={styles.subLink}>GPU Networking & RDMA →</Link></li>
                    <li><Link to="/services/gpu-kubernetes" className={styles.subLink}>GPU Kubernetes Consulting →</Link></li>
                </ul>

                <FAQSection items={faqItems} />

                <div className={styles.subCta}>
                    <h2 className={styles.subCtaTitle}>Planning a GPU Cluster Build?</h2>
                    <p className={styles.subCtaText}>
                        We've done this before. Let's talk about what you're building and where we can help.
                    </p>
                    <a href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer" className={styles.subCtaButton}>
                        Schedule a Call
                    </a>
                </div>
            </main>
        </Layout>
    )
}
