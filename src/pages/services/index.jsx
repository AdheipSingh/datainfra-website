import React, { useState } from "react"
import Layout from "@theme/Layout"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

const technicalCategories = [
    {
        title: "GPU Sharing & Scheduling",
        content:
            "MIG partitioning, time-slicing, vGPU, KAI Scheduler, SLURM integration, gang scheduling, topology-aware placement, preemption policies",
    },
    {
        title: "Networking",
        content:
            "InfiniBand fabrics, RoCE, RDMA configuration, Clos topology design, Mellanox/NVIDIA switch setup, NCCL tuning, collective communication optimization",
    },
    {
        title: "Bare Metal & Provisioning",
        content:
            "MAAS, LLDP discovery, Cluster API (CAPI), GPU passthrough (VFIO), SR-IOV, PXE boot, firmware management",
    },
    {
        title: "Kubernetes & Operators",
        content:
            "NVIDIA GPU Operator, device plugins, custom operators (10+ built), controller patterns, reconciliation loops, CRD design",
    },
    {
        title: "Monitoring & Observability",
        content:
            "DCGM metrics, Prometheus/Grafana, GPU health monitoring, utilization analytics, capacity planning, chargeback systems",
    },
    {
        title: "Hardware Experience",
        content:
            "A100, H100, L40, RTX A6000 — production clusters, not just benchmarks",
    },
]

function Accordion({ title, content, isOpen, onClick }) {
    return (
        <div className={`${styles.accordion} ${isOpen ? styles.accordionOpen : ""}`}>
            <button className={styles.accordionHeader} onClick={onClick}>
                <span>{title}</span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconOpen : ""}`}
                >
                    <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && <div className={styles.accordionContent}>{content}</div>}
        </div>
    )
}

export default function Services() {
    const [openAccordion, setOpenAccordion] = useState(null)

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index)
    }

    return (
        <Layout
            title="Services"
            description="GPU infrastructure consulting services - assessment, implementation, and ongoing support."
        >
            <Navbar />
            <main className={styles.main}>
                {/* Engagement Models Section */}
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h1 className={styles.pageTitle}>Ways to Work Together</h1>
                        <div className={styles.modelGrid}>
                            <div className={styles.modelCard}>
                                <h3 className={styles.modelTitle}>Assessment</h3>
                                <p className={styles.modelDesc}>
                                    A focused engagement to understand your current state and
                                    identify the highest-impact improvements.
                                </p>
                                <div className={styles.modelResult}>
                                    <span className={styles.resultLabel}>You Get:</span>
                                    <p className={styles.resultText}>
                                        Clear diagnosis, prioritized recommendations, and a roadmap
                                        you can execute yourself or with our help.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.modelCard}>
                                <h3 className={styles.modelTitle}>Implementation</h3>
                                <p className={styles.modelDesc}>
                                    Hands-on work to build or fix your GPU infrastructure. We
                                    embed with your team and ship working systems.
                                </p>
                                <div className={styles.modelResult}>
                                    <span className={styles.resultLabel}>You Get:</span>
                                    <p className={styles.resultText}>
                                        Production-ready infrastructure, not just architecture
                                        diagrams.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.modelCard}>
                                <h3 className={styles.modelTitle}>Ongoing Support</h3>
                                <p className={styles.modelDesc}>
                                    Retained advisory and engineering support for teams scaling
                                    their GPU infrastructure over time.
                                </p>
                                <div className={styles.modelResult}>
                                    <span className={styles.resultLabel}>You Get:</span>
                                    <p className={styles.resultText}>
                                        A trusted partner on call when you need expert help.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Depth Section */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Technical Expertise</h2>
                        <p className={styles.sectionSubtitle}>
                            Deep knowledge across the GPU infrastructure stack
                        </p>
                        <div className={styles.accordionList}>
                            {technicalCategories.map((category, index) => (
                                <Accordion
                                    key={index}
                                    title={category.title}
                                    content={category.content}
                                    isOpen={openAccordion === index}
                                    onClick={() => toggleAccordion(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Let's Talk</h2>
                        <p className={styles.ctaText}>
                            Ready to discuss how we can help with your GPU infrastructure?
                        </p>
                        <a
                            href="https://cal.com/baazhq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            Schedule a Call
                        </a>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
