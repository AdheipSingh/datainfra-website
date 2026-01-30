import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

export default function About() {
    return (
        <Layout
            title="About BaaZ | GPU Infrastructure Engineers"
            description="BaaZ is a team of GPU infrastructure engineers who've built production AI systems at scale. Apache Software Foundation contributors with deep expertise in distributed training, RDMA networking, and Kubernetes GPU orchestration."
        >
            <Navbar />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>About BaaZ</h1>
                        <p className={styles.heroSubtitle}>
                            We're a team of GPU infrastructure engineers who've built production AI systems at scale.
                            We're not a traditional consultancy—we write code, configure systems, and solve problems alongside your team.
                        </p>
                    </div>
                </section>

                {/* Credentials Section */}
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Technical Credentials</h2>
                        <div className={styles.credentialsGrid}>
                            <div className={styles.credentialCard}>
                                <div className={styles.credentialIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                                <h3 className={styles.credentialTitle}>Apache Software Foundation</h3>
                                <p className={styles.credentialText}>
                                    Contributors to Apache open-source projects. Our careers are built on open-source infrastructure.
                                </p>
                            </div>
                            <div className={styles.credentialCard}>
                                <div className={styles.credentialIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M12 6v6l4 2"/>
                                    </svg>
                                </div>
                                <h3 className={styles.credentialTitle}>Production Experience</h3>
                                <p className={styles.credentialText}>
                                    Built and operated GPU infrastructure at startups and scale-ups—under pressure, in production.
                                </p>
                            </div>
                            <div className={styles.credentialCard}>
                                <div className={styles.credentialIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                                    </svg>
                                </div>
                                <h3 className={styles.credentialTitle}>Hands-On Engineers</h3>
                                <p className={styles.credentialText}>
                                    We implement solutions, not recommendations. You work directly with the engineers who do the work.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expertise Section */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
                        <div className={styles.expertiseGrid}>
                            <div className={styles.expertiseCategory}>
                                <h3 className={styles.expertiseCategoryTitle}>Distributed Training Systems</h3>
                                <ul className={styles.expertiseList}>
                                    <li>PyTorch DDP & FSDP</li>
                                    <li>DeepSpeed & Megatron</li>
                                    <li>Multi-node training optimization</li>
                                    <li>Gradient synchronization tuning</li>
                                </ul>
                            </div>
                            <div className={styles.expertiseCategory}>
                                <h3 className={styles.expertiseCategoryTitle}>High-Performance Networking</h3>
                                <ul className={styles.expertiseList}>
                                    <li>InfiniBand & RoCE</li>
                                    <li>RDMA configuration</li>
                                    <li>GPUDirect RDMA</li>
                                    <li>NCCL tuning</li>
                                </ul>
                            </div>
                            <div className={styles.expertiseCategory}>
                                <h3 className={styles.expertiseCategoryTitle}>GPU Orchestration</h3>
                                <ul className={styles.expertiseList}>
                                    <li>Kubernetes GPU operators</li>
                                    <li>Slurm integration</li>
                                    <li>Multi-tenancy & quotas</li>
                                    <li>Job scheduling</li>
                                </ul>
                            </div>
                            <div className={styles.expertiseCategory}>
                                <h3 className={styles.expertiseCategoryTitle}>GPU Sharing & Isolation</h3>
                                <ul className={styles.expertiseList}>
                                    <li>MIG (Multi-Instance GPU)</li>
                                    <li>Time-slicing</li>
                                    <li>Fractional GPUs</li>
                                    <li>vGPU</li>
                                </ul>
                            </div>
                            <div className={styles.expertiseCategory}>
                                <h3 className={styles.expertiseCategoryTitle}>Observability & Reliability</h3>
                                <ul className={styles.expertiseList}>
                                    <li>DCGM metrics</li>
                                    <li>GPU health monitoring</li>
                                    <li>Fault detection & recovery</li>
                                    <li>Performance profiling</li>
                                </ul>
                            </div>
                            <div className={styles.expertiseCategory}>
                                <h3 className={styles.expertiseCategoryTitle}>Infrastructure Platforms</h3>
                                <ul className={styles.expertiseList}>
                                    <li>H100, A100, L40S, A6000</li>
                                    <li>NVLink & NVSwitch</li>
                                    <li>PCIe topology optimization</li>
                                    <li>Bare metal & cloud</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Not Big Consultancy Section */}
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Why Choose a Boutique Firm?</h2>
                        <p className={styles.sectionLead}>
                            Big consultancies send junior consultants who learn on your infrastructure. We're different.
                        </p>
                        <div className={styles.comparisonGrid}>
                            <div className={styles.comparisonCard}>
                                <h3 className={styles.comparisonTitle}>Work Directly With Experts</h3>
                                <p className={styles.comparisonText}>
                                    You work directly with the engineers who do the work—no junior consultants learning on your infrastructure.
                                </p>
                            </div>
                            <div className={styles.comparisonCard}>
                                <h3 className={styles.comparisonTitle}>Production Experience</h3>
                                <p className={styles.comparisonText}>
                                    We've operated these systems in production, not just advised on them. We know what breaks at 3am.
                                </p>
                            </div>
                            <div className={styles.comparisonCard}>
                                <h3 className={styles.comparisonTitle}>Knowledge Transfer</h3>
                                <p className={styles.comparisonText}>
                                    We implement and transfer knowledge; you don't need us forever. Your team can operate it going forward.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Proven Results</h2>
                        <div className={styles.resultsGrid}>
                            <div className={styles.resultCard}>
                                <span className={styles.resultMetric}>8.5x</span>
                                <span className={styles.resultLabel}>Faster Distributed Training</span>
                                <p className={styles.resultDesc}>RDMA optimization for a computer vision company</p>
                            </div>
                            <div className={styles.resultCard}>
                                <span className={styles.resultMetric}>70%+</span>
                                <span className={styles.resultLabel}>GPU Utilization</span>
                                <p className={styles.resultDesc}>Up from 30% through proper sharing architecture</p>
                            </div>
                            <div className={styles.resultCard}>
                                <span className={styles.resultMetric}>10x</span>
                                <span className={styles.resultLabel}>Latency Reduction</span>
                                <p className={styles.resultDesc}>GPU-to-GPU communication optimization</p>
                            </div>
                        </div>
                        <div className={styles.caseStudyLink}>
                            <Link to="/case-studies/rdma-kubernetes" className={styles.linkButton}>
                                Read our RDMA case study →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Let's Talk</h2>
                        <p className={styles.ctaText}>
                            If you're dealing with GPU infrastructure challenges—utilization, performance, reliability, or building something new—we should talk.
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
