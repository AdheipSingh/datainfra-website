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
    "name": "GPU Kubernetes Consulting",
    "provider": { "@type": "Organization", "name": "BaaZ", "url": "https://baaz.dev" },
    "description": "Production GPU clusters on Kubernetes — GPU Operator, KAI Scheduler, MIG partitioning, multi-tenancy, EKS, GKE, and bare metal.",
    "url": "https://baaz.dev/services/gpu-kubernetes",
}

const faqItems = [
    {
        question: "What is the NVIDIA GPU Operator?",
        answer: "A set of Kubernetes operators that automate the lifecycle of GPU drivers, Container Toolkit, device plugin, DCGM exporter, and MIG manager across every GPU node. You need it any time you want GPUs scheduled as Kubernetes resources.",
    },
    {
        question: "How does GPU sharing work in Kubernetes?",
        answer: "Three modes: MIG for hardware partitioning on A100/H100 (hard isolation, fixed sizes), time-slicing for simple time-multiplexing (no isolation), and MPS for CUDA-level process sharing. Pick MIG for multi-tenant production; time-slicing for dev/inference.",
    },
    {
        question: "What is the KAI Scheduler?",
        answer: "KAI Scheduler (formerly Run:ai scheduler) is a Kubernetes-native gang scheduler purpose-built for GPU workloads: queues, fair-share, gang scheduling, and preemption with GPU-awareness. We're an active contributor to this project.",
    },
    {
        question: "Can I run GPU workloads on EKS, GKE, or AKS?",
        answer: "Yes. All three support GPU node groups, and the GPU Operator runs on top. The complications are around driver versions, instance-type-specific CUDA images, multi-tenancy isolation, and in-cluster networking (especially RDMA or EFA).",
    },
    {
        question: "Do I need Slurm if I already run Kubernetes?",
        answer: "Not usually. Kubernetes with GPU Operator, KAI or Volcano scheduler, and Kubeflow Training Operator covers most distributed-training workloads. Slurm still wins for traditional HPC or organizations with deep Slurm operational expertise.",
    },
    {
        question: "How do you approach multi-tenant GPU clusters?",
        answer: "Namespace quotas, ResourceQuotas on nvidia.com/gpu, a GPU-aware scheduler for fair-share, MIG or SR-IOV for hardware isolation where needed, node taints/tolerations for workload separation, and per-namespace DCGM metrics for visibility.",
    },
]

export default function GPUKubernetes() {
    return (
        <Layout
            title="GPU Kubernetes Consulting"
            description="Production GPU clusters on Kubernetes. GPU Operator, KAI Scheduler, MIG, fractional GPU sharing, multi-tenancy. EKS, GKE, and bare metal."
        >
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Head>
            <Navbar />
            <main className={styles.subPage}>
                <span className={styles.subLabel}>Service</span>
                <h1 className={styles.subTitle}>GPU Kubernetes Consulting</h1>
                <p className={styles.subLead}>
                    Your GPU cluster is running at 25% utilization. Teams wait days for GPU access. Training
                    jobs fail because the scheduler doesn't understand GPU topology. Kubernetes can run GPUs
                    well — it just needs someone who's done it before.
                </p>

                <div className={styles.metricsRow}>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>70%+</span>
                        <span className={styles.metricBoxLabel}>GPU Utilization</span>
                    </div>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>3x</span>
                        <span className={styles.metricBoxLabel}>Resource Efficiency</span>
                    </div>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>Zero</span>
                        <span className={styles.metricBoxLabel}>Scheduling Conflicts</span>
                    </div>
                </div>

                <h2 className={styles.subH2}>What We Do</h2>
                <ul className={styles.subList}>
                    <li><strong>GPU Operator stack</strong> — Driver containers, Container Toolkit, Device Plugin, DCGM Exporter, GPU Feature Discovery. We handle driver conflicts, runtime differences, secure boot, upgrade rollouts</li>
                    <li><strong>KAI Scheduler</strong> — Topology-aware placement, fair-share scheduling, gang scheduling for distributed training, preemption policies, queue management. We're an active contributor</li>
                    <li><strong>MIG & fractional GPU sharing</strong> — A100/H100 MIG partitioning, time-slicing for non-MIG GPUs, workload-aware partition profiles</li>
                    <li><strong>Multi-tenancy</strong> — Namespace isolation, GPU resource quotas, RBAC, priority classes, cost allocation and chargeback</li>
                    <li><strong>EKS / GKE / bare metal</strong> — GPU node groups with EFA, GKE GPU pools with multi-networking, bare-metal with Calico/Cilium + MetalLB. We've shipped all three</li>
                    <li><strong>Training job orchestration</strong> — Kubeflow Training Operator, PyTorchJob, integration with MLflow and W&B</li>
                </ul>

                <h2 className={styles.subH2}>Proof</h2>
                <p className={styles.subP}>
                    We deployed a 3-node Kubespray cluster with GPU Operator, KAI Scheduler, JupyterHub,
                    and full RDMA networking for a client — bare metal, 2x RTX 5000 Ada + 1x RTX A5500,
                    with Traefik Gateway API and NFS CSI storage. Production-ready in weeks, not months.
                </p>
                <p className={styles.subP}>
                    We also contributed the{" "}
                    <Link to="/blog/contributing-queue-validator-kai-scheduler" className={styles.subLink}>
                        queue validation webhook to KAI Scheduler
                    </Link>
                    {" "}— we know this codebase from the inside.
                </p>

                <h2 className={styles.subH2}>How We Work</h2>
                <div className={styles.processRow}>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>1</div>
                        <p className={styles.processBoxTitle}>Assess</p>
                        <p className={styles.processBoxDesc}>Audit your K8s GPU setup, scheduler config, and utilization.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>2</div>
                        <p className={styles.processBoxTitle}>Design</p>
                        <p className={styles.processBoxDesc}>Right-size the operator stack, scheduling policy, tenancy model.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>3</div>
                        <p className={styles.processBoxTitle}>Implement</p>
                        <p className={styles.processBoxDesc}>Deploy, configure, validate with real workloads.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>4</div>
                        <p className={styles.processBoxTitle}>Transfer</p>
                        <p className={styles.processBoxDesc}>Runbooks, dashboards, and training for your platform team.</p>
                    </div>
                </div>

                <h2 className={styles.subH2}>Technologies</h2>
                <div className={styles.techTagsRow}>
                    {["Kubernetes", "GPU Operator", "KAI Scheduler", "Network Operator", "MIG", "Time-Slicing", "EKS", "GKE", "Kubeflow", "Multus", "SR-IOV", "Helm", "ArgoCD"].map(t => (
                        <span key={t} className={styles.subTag}>{t}</span>
                    ))}
                </div>

                <h2 className={styles.subH2}>Related</h2>
                <ul className={styles.relatedList}>
                    <li><Link to="/blog/contributing-queue-validator-kai-scheduler" className={styles.subLink}>Contributing a Queue Validator to KAI Scheduler →</Link></li>
                    <li><Link to="/case-studies/rdma-kubernetes" className={styles.subLink}>Case Study: RDMA on Bare-Metal Kubernetes →</Link></li>
                    <li><Link to="/services/distributed-training" className={styles.subLink}>Distributed Training Optimization →</Link></li>
                    <li><Link to="/services/gpu-monitoring" className={styles.subLink}>GPU Monitoring & Observability →</Link></li>
                </ul>

                <FAQSection items={faqItems} />

                <div className={styles.subCta}>
                    <h2 className={styles.subCtaTitle}>Need Help Running GPUs on Kubernetes?</h2>
                    <p className={styles.subCtaText}>
                        We've deployed GPU Operator and KAI Scheduler on EKS, GKE, and bare metal. Let's look at your cluster.
                    </p>
                    <a href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer" className={styles.subCtaButton}>
                        Schedule a Call
                    </a>
                </div>
            </main>
        </Layout>
    )
}
