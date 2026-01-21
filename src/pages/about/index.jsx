import React from "react"
import Layout from "@theme/Layout"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

export default function About() {
    return (
        <Layout
            title="About Us | GPU Infrastructure Engineers & Kubernetes Experts"
            description="BaaZ is founded by Apache Software Foundation members and NVIDIA KAI Scheduler contributors. We've built GPU platforms end-to-end with 300+ open source commits."
        >
            <Navbar />
            <main className={styles.main}>
                {/* Why Us Section */}
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h1 className={styles.pageTitle}>Why Us</h1>
                        <p className={styles.sectionLead}>
                            We've done this before. In production. Under pressure.
                        </p>
                        <p className={styles.bodyText}>
                            We've been the day-one infrastructure engineer at multiple startups
                            building GPU platforms. We've debugged PCIe topology issues at 3am.
                            We've written the Kubernetes operators that run in production today.
                        </p>

                        <div className={styles.credentials}>
                            <h3 className={styles.credentialsTitle}>Our Credentials</h3>
                            <ul className={styles.credentialsList}>
                                <li>
                                    <strong>Apache Software Foundation member</strong> — We maintain
                                    the Druid Kubernetes Operator used in production worldwide
                                </li>
                                <li>
                                    <strong>Active contributor to NVIDIA KAI Scheduler</strong> —
                                    The actual GPU scheduler, not just users of it
                                </li>
                                <li>
                                    <strong>Contributor to NVIDIA Network Operator</strong> —
                                    Enabling GPUDirect RDMA and high-performance networking for AI workloads
                                </li>
                                <li>
                                    <strong>Built GPU platforms end-to-end</strong> — From bare
                                    metal provisioning to self-service ML workbenches
                                </li>
                                <li>
                                    <strong>300+ commits to open source infrastructure projects</strong>{" "}
                                    — We build tools, not just use them
                                </li>
                            </ul>
                        </div>

                        <p className={styles.bodyText}>
                            We're a small team. We don't scale by hiring juniors. When you work
                            with us, you get engineers who've actually built this stuff.
                        </p>
                    </div>
                </section>

                {/* Open Source Section */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Open Source Contributions</h2>

                        <div className={styles.osSection}>
                            <h3 className={styles.osHeading}>Projects We Contribute To</h3>
                            <div className={styles.contributionList}>
                                <a href="https://github.com/NVIDIA/KAI-Scheduler/pulls?q=is%3Apr+author%3AAdheipSingh" target="_blank" rel="noopener noreferrer" className={styles.contribution}>
                                    <span className={styles.contribName}>NVIDIA KAI Scheduler</span>
                                </a>
                                <a href="https://github.com/Mellanox/network-operator/pulls?q=is%3Apr+author%3AAdheipSingh" target="_blank" rel="noopener noreferrer" className={styles.contribution}>
                                    <span className={styles.contribName}>NVIDIA Network Operator</span>
                                </a>
                                <a href="https://github.com/datainfrahq/druid-operator/commits?author=AdheipSingh" target="_blank" rel="noopener noreferrer" className={styles.contribution}>
                                    <span className={styles.contribName}>Apache Druid Kubernetes Operator</span>
                                </a>
                                <a href="https://github.com/apache/druid/commits?author=AdheipSingh" target="_blank" rel="noopener noreferrer" className={styles.contribution}>
                                    <span className={styles.contribName}>Apache Druid</span>
                                </a>
                                <a href="https://github.com/grafana/grafana-operator/commits?author=AdheipSingh" target="_blank" rel="noopener noreferrer" className={styles.contribution}>
                                    <span className={styles.contribName}>Grafana Operator</span>
                                </a>
                                <a href="https://github.com/parseablehq/parseable/commits?author=AdheipSingh" target="_blank" rel="noopener noreferrer" className={styles.contribution}>
                                    <span className={styles.contribName}>Parseable</span>
                                </a>
                                <a href="https://github.com/Altinity/clickhouse-operator/commits?author=AdheipSingh" target="_blank" rel="noopener noreferrer" className={styles.contribution}>
                                    <span className={styles.contribName}>ClickHouse Operator</span>
                                </a>
                                <a href="https://github.com/minio/operator/commits?author=AdheipSingh" target="_blank" rel="noopener noreferrer" className={styles.contribution}>
                                    <span className={styles.contribName}>MinIO Operator</span>
                                </a>
                                <a href="https://github.com/fluent/fluent-bit/pulls?q=is%3Apr+author%3AAdheipSingh" target="_blank" rel="noopener noreferrer" className={styles.contribution}>
                                    <span className={styles.contribName}>Fluent Bit</span>
                                </a>
                                <a href="https://github.com/apache/superset/commits?author=AdheipSingh" target="_blank" rel="noopener noreferrer" className={styles.contribution}>
                                    <span className={styles.contribName}>Apache Superset</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Let's Talk</h2>
                        <p className={styles.ctaText}>
                            Ready to work with engineers who've actually built GPU infrastructure?
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
