import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

const caseStudies = [
    {
        slug: "rdma-kubernetes",
        title: "8.5x Faster Distributed Training: RDMA on Bare Metal Kubernetes",
        description: "How we helped a computer vision company achieve 10x latency improvement with GPUDirect RDMA over RoCE on Kubernetes.",
        metrics: [
            { value: "8.5x", label: "Training Speedup" },
            { value: "10x", label: "Latency Reduction" },
            { value: "78%", label: "GPU Utilization" },
        ],
        tags: ["RDMA", "Kubernetes", "Distributed Training", "RoCE"],
    },
]

const structuredData = {
    collectionPage: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "GPU Infrastructure Case Studies | BaaZ",
        "description": "Technical case studies on GPU infrastructure optimization, distributed training, RDMA networking, and Kubernetes GPU clusters.",
        "url": "https://www.baaz.dev/case-studies",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": caseStudies.map((study, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://www.baaz.dev/case-studies/${study.slug}`
            }))
        }
    },
    breadcrumb: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.baaz.dev"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Case Studies",
                "item": "https://www.baaz.dev/case-studies"
            }
        ]
    }
}

export default function CaseStudiesIndex() {
    return (
        <Layout
            title="Case Studies | GPU Infrastructure & Distributed Training"
            description="Technical case studies on GPU infrastructure optimization, distributed training performance, RDMA networking, and Kubernetes GPU clusters from BaaZ."
        >
            <Head>
                <meta property="og:title" content="GPU Infrastructure Case Studies | BaaZ" />
                <meta property="og:description" content="Technical case studies on GPU infrastructure optimization, distributed training, and Kubernetes GPU clusters." />
                <meta property="og:url" content="https://www.baaz.dev/case-studies" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="GPU Infrastructure Case Studies | BaaZ" />
                <meta name="twitter:description" content="Technical case studies on GPU infrastructure optimization, distributed training, and Kubernetes GPU clusters." />
                <link rel="canonical" href="https://www.baaz.dev/case-studies" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData.collectionPage)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(structuredData.breadcrumb)}
                </script>
            </Head>
            <Navbar />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.listingHero}>
                    <div className={styles.listingHeroContent}>
                        <h1 className={styles.listingTitle}>Case Studies</h1>
                        <p className={styles.listingSubtitle}>
                            Real-world examples of how we help companies get more from their GPU infrastructure.
                        </p>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section className={styles.listingSection}>
                    <div className={styles.listingContent}>
                        <div className={styles.caseStudyGrid}>
                            {caseStudies.map((study) => (
                                <Link
                                    key={study.slug}
                                    to={`/case-studies/${study.slug}`}
                                    className={styles.caseStudyCard}
                                >
                                    <div className={styles.cardTags}>
                                        {study.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className={styles.cardTag}>{tag}</span>
                                        ))}
                                    </div>
                                    <h2 className={styles.cardTitle}>{study.title}</h2>
                                    <p className={styles.cardDescription}>{study.description}</p>
                                    <div className={styles.cardMetrics}>
                                        {study.metrics.map((metric) => (
                                            <div key={metric.label} className={styles.metric}>
                                                <span className={styles.metricValue}>{metric.value}</span>
                                                <span className={styles.metricLabel}>{metric.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <span className={styles.cardLink}>Read case study →</span>
                                </Link>
                            ))}
                        </div>

                    </div>
                </section>
            </main>
        </Layout>
    )
}
