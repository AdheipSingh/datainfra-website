import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import styles from "./index.module.css"

export default function Home() {
    return (
        <Layout
            title="GPU Infrastructure Consulting | AI Factory & Cloud Optimization"
            description="BaaZ helps companies maximize GPU utilization, build AI factories, and ship AI faster. Expert consulting for H100, A100, Kubernetes GPU clusters, and distributed training optimization."
        >
            <Navbar />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Get More From Your GPUs
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Whether you have 8 GPUs or 8,000—on-prem, cloud, or colo—we help you
                            maximize utilization, reduce waste, and ship AI faster.
                        </p>
                        <a
                            href="#featured-resources"
                            className={styles.ctaButton}
                        >
                            Explore Case Studies
                        </a>
                    </div>
                </section>

                {/* Problem Section */}
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>The Problem</h2>
                        <p className={styles.sectionLead}>
                            Most GPU infrastructure is underutilized, overcomplicated, or both.
                        </p>
                        <p className={styles.bodyText}>
                            You bought expensive hardware—H100s, A100s, L40s—but:
                        </p>
                        <ul className={styles.painPoints}>
                            <li>Utilization sits at 30-40% while teams wait for access</li>
                            <li>Training jobs fail at 2am and nobody knows why</li>
                            <li>Your "multi-tenant" setup is really just SSH and hope</li>
                            <li>Networking bottlenecks kill distributed training performance</li>
                            <li>You're not sure if the problem is hardware, software, or config</li>
                        </ul>
                        <p className={styles.bodyText}>
                            Every idle GPU-hour is money burned. Every failed training run is weeks
                            lost. We help you fix that.
                        </p>
                    </div>
                </section>

                {/* Outcomes Section */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>What We Do</h2>
                        <p className={styles.sectionLead}>
                            We help companies get the most out of their GPU infrastructure.
                        </p>
                        <div className={styles.cardGrid}>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Higher Utilization</h3>
                                <p className={styles.cardText}>
                                    Turn 30% utilization into 70%+. Share GPUs safely across teams.
                                    Run inference by day, training by night. Stop leaving money on
                                    the table.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Faster Training</h3>
                                <p className={styles.cardText}>
                                    Eliminate network bottlenecks. Fix PCIe topology issues. Tune
                                    collective communications. Get your training jobs finishing in
                                    days, not weeks.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Reliable Operations</h3>
                                <p className={styles.cardText}>
                                    Know when GPUs are failing before jobs crash. Get visibility into
                                    what's actually happening. Build systems that recover
                                    automatically.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Self-Service Access</h3>
                                <p className={styles.cardText}>
                                    Let your ML teams provision GPU environments themselves—with
                                    guardrails. No more tickets. No more waiting. Ship faster.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Lower Costs</h3>
                                <p className={styles.cardText}>
                                    Delay your next hardware purchase by getting more from what you
                                    have. Or build new infrastructure right the first time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>How We Work</h2>
                        <p className={styles.sectionLead}>
                            We're not a big consultancy that sends you a deck and disappears.
                            We're hands-on engineers who've built this infrastructure
                            ourselves—at startups, in production, under pressure.
                        </p>
                        <div className={styles.processSteps}>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>
                                        Understand Your Situation
                                    </h3>
                                    <p className={styles.stepText}>
                                        We start by understanding what you have, what's working, and
                                        what's not. No assumptions. We look at the actual metrics,
                                        the actual configs, the actual problems.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>Identify the Bottlenecks</h3>
                                    <p className={styles.stepText}>
                                        GPU problems are often not GPU problems. It's the network.
                                        It's the storage. It's the scheduler. It's the config nobody
                                        touched since 2022. We find the real issues.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>Fix What Matters</h3>
                                    <p className={styles.stepText}>
                                        We implement solutions—not recommendations. We write code,
                                        change configs, tune systems. You see results, not slide
                                        decks.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>4</div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>Transfer Knowledge</h3>
                                    <p className={styles.stepText}>
                                        We don't want you dependent on us forever. We document what
                                        we did and why, and make sure your team can operate it going
                                        forward.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems Table Section */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Common Problems We Solve</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.dataTable}>
                                <thead>
                                    <tr>
                                        <th>You Say</th>
                                        <th>We Do</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>"Our GPUs sit idle while teams wait for access"</td>
                                        <td>
                                            GPU sharing with proper isolation (MIG, time-slicing,
                                            quotas)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>"Training is slow on multiple nodes"</td>
                                        <td>
                                            Network fabric tuning, NCCL optimization, topology fixes
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>"We don't know what's happening in our cluster"</td>
                                        <td>
                                            Monitoring, alerting, and visibility into GPU health
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>"Jobs fail randomly and we can't debug them"</td>
                                        <td>Logging, fault tolerance, and automated recovery</td>
                                    </tr>
                                    <tr>
                                        <td>"ML teams wait days for infrastructure tickets"</td>
                                        <td>Self-service platforms with guardrails</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            "We're building a GPU cloud and don't know where to
                                            start"
                                        </td>
                                        <td>End-to-end architecture and implementation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Who We Help Section */}
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Who We Help</h2>
                        <div className={styles.personaGrid}>
                            <div className={styles.personaCard}>
                                <p className={styles.personaQuote}>
                                    "We bought GPUs but they're sitting underutilized"
                                </p>
                                <p className={styles.personaDesc}>
                                    You invested in hardware but only a few people can use it.
                                    Utilization reports look bad. Leadership is asking questions.
                                </p>
                            </div>
                            <div className={styles.personaCard}>
                                <p className={styles.personaQuote}>
                                    "We need to build GPU infrastructure from scratch"
                                </p>
                                <p className={styles.personaDesc}>
                                    You're standing up a new AI cluster—on-prem, colo, or cloud.
                                    You want to get it right the first time without spending months
                                    figuring out what NVIDIA's docs don't tell you.
                                </p>
                            </div>
                            <div className={styles.personaCard}>
                                <p className={styles.personaQuote}>
                                    "Our training jobs are slow and we don't know why"
                                </p>
                                <p className={styles.personaDesc}>
                                    Multi-node training should be faster. Something's wrong with
                                    the network, the topology, the collective comms—but you can't
                                    pinpoint it.
                                </p>
                            </div>
                            <div className={styles.personaCard}>
                                <p className={styles.personaQuote}>
                                    "We're building a GPU cloud for customers"
                                </p>
                                <p className={styles.personaDesc}>
                                    You're a startup or colo provider building GPU-as-a-service.
                                    You need the platform layer—scheduling, isolation, monitoring,
                                    billing integration.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Resources Section */}
                <section id="featured-resources" className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Featured Resources</h2>
                        <p className={styles.sectionLead}>
                            Technical deep-dives from our work in GPU infrastructure.
                        </p>
                        <div className={styles.resourcesGrid}>
                            <Link to="/case-studies" className={styles.resourceCard}>
                                <span className={styles.resourceLabel}>Case Study</span>
                                <h3 className={styles.resourceTitle}>
                                    8.5x Faster Distributed Training: RDMA on Bare Metal Kubernetes
                                </h3>
                                <p className={styles.resourceDesc}>
                                    How we helped a fintech achieve 10x latency improvement with GPUDirect RDMA over RoCE.
                                </p>
                                <span className={styles.resourceLink}>Read case study →</span>
                            </Link>
                            <Link to="/blog/gpu-to-gpu-communication-across-nodes" className={styles.resourceCard}>
                                <span className={styles.resourceLabel}>Blog</span>
                                <h3 className={styles.resourceTitle}>
                                    GPU to GPU Communication Across Nodes
                                </h3>
                                <p className={styles.resourceDesc}>
                                    Understanding how GPUs communicate in distributed training setups.
                                </p>
                                <span className={styles.resourceLink}>Read article →</span>
                            </Link>
                            <Link to="/blog/understanding-rx-tx-network-traffic-direction" className={styles.resourceCard}>
                                <span className={styles.resourceLabel}>Blog</span>
                                <h3 className={styles.resourceTitle}>
                                    Understanding RX/TX Network Traffic Direction
                                </h3>
                                <p className={styles.resourceDesc}>
                                    A practical guide to network traffic flow in GPU clusters.
                                </p>
                                <span className={styles.resourceLink}>Read article →</span>
                            </Link>
                        </div>
                        <div className={styles.viewAllWrapper}>
                            <Link to="/blog" className={styles.viewAllLink}>
                                View all posts →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Let's Talk</h2>
                        <p className={styles.ctaText}>
                            If you're dealing with GPU infrastructure challenges—utilization,
                            performance, reliability, or building something new—we should talk.
                        </p>
                        <p className={styles.ctaSubtext}>
                            No sales pitch. Just a conversation about what you're trying to do
                            and whether we can help.
                        </p>
                        <a
                            href="https://cal.com/baazhq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButtonLarge}
                        >
                            Schedule a Call
                        </a>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
