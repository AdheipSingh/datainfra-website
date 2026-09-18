import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import { Navbar } from "@site/src/components/Layout"
import FAQSection from "@site/src/components/FAQSection"
import styles from "./styles.module.css"

// TODO: review answers before publishing - drafted as placeholders grounded in the page content.
const faqItems = [
    {
        question: "What does BaaZ do?",
        answer: "BaaZ is a GPU infrastructure engineering consultancy. Once GPU hardware is installed - on-prem, colo, or dedicated cloud - we make it run AI workloads reliably: provisioning, RDMA networking, Kubernetes or Slurm, GPU scheduling and sharing, observability, and inference serving. We don't build data centres or sell hardware; we work with the resellers, integrators, and colo operators who do.",
    },
    {
        question: "Who do you typically work with?",
        answer: "Our clients are usually AI-first startups scaling from a handful to hundreds of GPUs, SMEs setting up in-house ML training clusters, and colo/GPU-cloud providers building multi-tenant GPU-as-a-service platforms. Engineering-led teams with concrete bottlenecks or timelines get the most out of the engagement.",
    },
    {
        question: "Do you work with on-prem, colo, and cloud GPU clusters?",
        answer: "Yes. We've shipped on bare-metal on-prem, colo, managed Kubernetes (EKS, GKE, AKS) and cloud GPU instances.",
    },
    {
        question: "How are BaaZ engagements typically structured?",
        answer: "Most engagements follow Assess → Diagnose → Implement → Transfer: we audit your existing setup or design, identify real bottlenecks, implement changes hands-on (code, configs, IaC), and document so your team can operate the result. Engagements range from a focused 2-week diagnostic to multi-month software-stack build-and-operate work on new hardware.",
    },
    {
        question: "Can you help with an urgent production issue?",
        answer: "Yes. A large fraction of our work is forensic: NCCL timeouts, distributed training that won't scale, GPU jobs failing at 2am. If you're actively on fire, schedule a call and we'll scope a rapid-response engagement.",
    },
    {
        question: "Do you work through partners?",
        answer: "Yes. Some of our delivery work comes through hardware resellers, system integrators, and GPU cloud providers. See /partners.",
    },
    {
        question: "How do I start working with BaaZ?",
        answer: "Schedule a call at https://cal.com/baazhq. We'll spend the first call understanding what you're trying to do and whether we're the right fit - no sales pitch. If it's a fit, we scope an engagement and start; if it isn't, we'll point you at resources or partners who are.",
    },
]

export default function Services() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "BaaZ GPU Infrastructure Consulting",
        "url": "https://baaz.dev/services",
        "provider": {
            "@type": "Organization",
            "name": "BaaZ",
            "url": "https://baaz.dev"
        },
        "serviceType": "GPU Infrastructure Consulting",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "GPU Infrastructure Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Distributed Training Optimization",
                        "description": "NCCL tuning, RDMA/RoCE configuration, InfiniBand optimization, GPUDirect RDMA setup, and network topology analysis."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "GPU Cluster Architecture",
                        "description": "GPU cluster software design and implementation: network fabric, storage, orchestration, and monitoring."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "GPU Sharing & Multi-tenancy",
                        "description": "MIG partitioning, time-slicing, Kubernetes GPU operators, quota management, and fair scheduling for high GPU utilization."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "GPU Networking & RDMA",
                        "description": "RDMA fabric design: InfiniBand, RoCE, GPUDirect RDMA, switch configuration, Network Operator on Kubernetes, dual-network architectures."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "GPU Observability & Reliability",
                        "description": "DCGM metrics, GPU health monitoring, alerting, dashboards, fault detection, and automated recovery."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "LLM Inference Optimization",
                        "description": "Serving stack selection and tuning for self-hosted inference: vLLM/SGLang/TensorRT-LLM, batching, KV-cache configuration, parallelism, autoscaling, and cost-per-token analysis."
                    }
                },
            ]
        }
    }

    return (
        <Layout
            title="GPU Infrastructure Consulting Services"
            description="GPU infrastructure consulting services: distributed training optimization, RDMA networking, GPU cluster architecture, multi-tenancy, observability, and inference optimization."
        >
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Head>
            <Navbar />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <span className={styles.heroLabel}>GPU Infrastructure Consulting</span>
                        <h1 className={styles.heroTitle}>
                            Make your GPU infrastructure work: build the software stack, optimize it, operate it
                        </h1>
                        <p className={styles.heroSubline}>
                            From the software build on new hardware - provisioning,
                            network fabric, orchestration, scheduling - to training
                            performance, inference platforms, and Day-2 operations.
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

                {/* Services Grid */}
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Our Services</h2>
                        <div className={styles.servicesGrid}>
                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                                        <path d="M8 21h8M12 17v4"/>
                                    </svg>
                                </div>
                                <h3 className={styles.serviceTitle}>GPU Cluster Architecture</h3>
                                <p className={styles.serviceDesc}>
                                    Building a new GPU cluster? We design and implement the software
                                    stack on your hardware - on-prem, colo, or cloud.
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    <li>Fabric design and hardware advisory (we don't sell hardware)</li>
                                    <li>Storage architecture</li>
                                    <li>Orchestration setup (K8s/Slurm)</li>
                                    <li>Multi-tenant GPU-as-a-Service</li>
                                    <li>Billing, metering & isolation</li>
                                </ul>
                                <Link to="/services/ai-factory" className={styles.caseStudyLink}>
                                    Learn more →
                                </Link>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                                    </svg>
                                </div>
                                <h3 className={styles.serviceTitle}>Distributed Training Optimization</h3>
                                <p className={styles.serviceDesc}>
                                    Multi-node training running slow? We diagnose and fix network bottlenecks,
                                    tune NCCL, configure RDMA, and optimize collective communications.
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    <li>NCCL tuning & debugging</li>
                                    <li>RDMA/RoCE configuration</li>
                                    <li>InfiniBand optimization</li>
                                    <li>GPUDirect RDMA setup</li>
                                    <li>Network topology analysis</li>
                                </ul>
                                <Link to="/services/distributed-training" className={styles.caseStudyLink}>
                                    Learn more →
                                </Link>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                                    </svg>
                                </div>
                                <h3 className={styles.serviceTitle}>GPU Networking & RDMA</h3>
                                <p className={styles.serviceDesc}>
                                    Network killing your training throughput? We design and implement RDMA
                                    fabrics - InfiniBand, RoCE, GPUDirect - that run at wire rate.
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    <li>InfiniBand & RoCE fabric design</li>
                                    <li>GPUDirect RDMA setup</li>
                                    <li>Switch configuration & QoS</li>
                                    <li>Network Operator on Kubernetes</li>
                                    <li>Dual-network architectures</li>
                                </ul>
                                <Link to="/services/gpu-networking" className={styles.caseStudyLink}>
                                    Learn more →
                                </Link>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="3"/>
                                        <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
                                    </svg>
                                </div>
                                <h3 className={styles.serviceTitle}>GPU Sharing & Multi-tenancy</h3>
                                <p className={styles.serviceDesc}>
                                    GPUs sitting idle while teams wait? We implement proper sharing with
                                    isolation - MIG, time-slicing, quotas - so idle GPUs get used.
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    <li>MIG partitioning & time-slicing</li>
                                    <li>Kubernetes GPU operators</li>
                                    <li>Quota management & fair scheduling</li>
                                    <li>Self-service portals & templates</li>
                                    <li>Cost allocation & chargeback</li>
                                </ul>
                                <Link to="/services/gpu-kubernetes" className={styles.caseStudyLink}>
                                    Learn more →
                                </Link>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 20V10M18 20V4M6 20v-4"/>
                                    </svg>
                                </div>
                                <h3 className={styles.serviceTitle}>GPU Observability & Reliability</h3>
                                <p className={styles.serviceDesc}>
                                    Jobs failing at 2am with no visibility? We build monitoring that catches
                                    GPU failures before jobs crash and systems that recover automatically.
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    <li>DCGM metrics setup</li>
                                    <li>GPU health monitoring</li>
                                    <li>Alerting & dashboards</li>
                                    <li>Fault detection</li>
                                    <li>Automated recovery</li>
                                </ul>
                                <Link to="/services/gpu-monitoring" className={styles.caseStudyLink}>
                                    Learn more →
                                </Link>
                            </div>

                            <div className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 17l6-6-6-6M12 19h8"/>
                                    </svg>
                                </div>
                                <h3 className={styles.serviceTitle}>LLM Inference Optimization</h3>
                                <p className={styles.serviceDesc}>
                                    For teams self-hosting inference on dedicated GPUs: we profile
                                    the serving path and tune the stack - vLLM/SGLang/TensorRT-LLM
                                    selection, batching and KV-cache configuration, parallelism,
                                    autoscaling - and hand over before/after throughput and cost
                                    numbers.
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    <li>Serving stack selection and benchmarking</li>
                                    <li>Batching, KV-cache, parallelism tuning</li>
                                    <li>Latency SLO engineering</li>
                                    <li>Inference observability</li>
                                    <li>Cost-per-token analysis</li>
                                </ul>
                                {/* TODO(ADHEIP-INPUT): link target for this card (stub acceptable).
                                    No performance claims here or on any linked page until the
                                    inference benchmark is published. */}
                            </div>

                        </div>

                        <h2 className={styles.subH2}>Inference Serving</h2>
                        <div className={styles.techTagsRow}>
                            {["vLLM", "SGLang", "TensorRT-LLM", "Triton"].map((t) => (
                                <span key={t} className={styles.subTag}>{t}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How We Work */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>How We Work</h2>
                        <p className={styles.sectionLead}>
                            We're hands-on engineers, not slide-deck consultants. Here's our process.
                        </p>
                        <div className={styles.processGrid}>
                            <div className={styles.processStep}>
                                <div className={styles.processNumber}>1</div>
                                <h3 className={styles.processTitle}>Assess</h3>
                                <p className={styles.processDesc}>
                                    We look at your actual metrics, configs, and problems. No assumptions.
                                </p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.processNumber}>2</div>
                                <h3 className={styles.processTitle}>Diagnose</h3>
                                <p className={styles.processDesc}>
                                    We find the real bottlenecks - often it's the network, not the GPUs.
                                </p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.processNumber}>3</div>
                                <h3 className={styles.processTitle}>Implement</h3>
                                <p className={styles.processDesc}>
                                    We write code, change configs, tune systems. You see results, not decks.
                                </p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.processNumber}>4</div>
                                <h3 className={styles.processTitle}>Transfer</h3>
                                <p className={styles.processDesc}>
                                    We document everything so your team can operate it independently.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Study Teaser */}
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <div className={styles.caseStudyTeaser}>
                            <div className={styles.caseStudyContent}>
                                <span className={styles.caseStudyLabel}>Case Study</span>
                                <h2 className={styles.caseStudyTitle}>
                                    GPUDirect RDMA over RoCE on a 2-node bare-metal Kubernetes cluster
                                </h2>
                                <p className={styles.caseStudyDesc}>
                                    How we moved a 2-node, 4-GPU training cluster from 1GbE TCP to
                                    100GbE RoCE, and the configuration that made it real.
                                </p>
                                <Link to="/case-studies/rdma-kubernetes" className={styles.caseStudyLink}>
                                    Read the full case study →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.sectionContent}>
                        <FAQSection items={faqItems} />
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Optimize Your GPU Infrastructure?</h2>
                        <p className={styles.ctaText}>
                            Let's discuss your challenges. No sales pitch - just a conversation about 
                            what you're trying to do and whether we can help.
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
