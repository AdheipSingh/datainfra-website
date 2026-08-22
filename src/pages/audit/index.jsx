import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import { Navbar } from "@site/src/components/Layout"
import FAQSection from "@site/src/components/FAQSection"
import styles from "./styles.module.css"

// TODO: review the first two answers before publishing - drafted as
// placeholders pending owner input (spec §6: [ADHEIP-INPUT]).
const faqItems = [
    {
        question: "What access do you need?",
        answer: "Read access is enough to start: SSH or kubectl with permission to run diagnostics and benchmarks, plus access to your monitoring. Any fix that changes configuration is agreed with your team before it ships.",
    },
    {
        question: "Remote or on-site?",
        answer: "Remote by default. On-site can be arranged when the work needs hands on the hardware.",
    },
    {
        question: "What cluster sizes?",
        answer: "From a few nodes to a few racks.",
    },
]

const deliverables = [
    "Benchmark results (NCCL tests, before/after where fixes were applied)",
    "Configuration findings",
    "Prioritized fix plan",
    "Knowledge-transfer session",
]

export default function Audit() {
    return (
        <Layout
            title="GPU Cluster Audit"
            description="A fixed-scope, two-week engagement: we find your cluster's real bottlenecks and ship the safe fixes during the audit - the rest arrives as a prioritized plan, not a slide deck."
        >
            <Head>
                <link rel="canonical" href="https://baaz.dev/audit" />
                <meta property="og:url" content="https://baaz.dev/audit" />
                <meta property="og:type" content="website" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h1 className={styles.pageTitle}>GPU Cluster Audit</h1>
                        <p className={styles.subline}>
                            A fixed-scope, two-week engagement: we find your cluster's
                            real bottlenecks and ship the safe fixes during the audit - the rest arrives as a prioritized plan, not a slide deck.
                        </p>
                        <p className={styles.bodyText}>
                            We audit the actual system: the fabric configuration and
                            RDMA data path (is GPUDirect really in the path, or is NCCL
                            silently on TCP?), the scheduler and sharing setup, GPU
                            health and observability, the storage data path, and node
                            build consistency.
                        </p>

                        <h2 className={styles.sectionTitle}>What you get</h2>
                        <ul className={styles.deliverables}>
                            {deliverables.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        {/* TODO(ADHEIP-INPUT): fixed price or band */}
                        <p className={styles.priceLine}>
                            Fixed price, scoped on a 20-minute call.
                        </p>

                        <a
                            href="https://cal.com/baazhq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            Book the audit
                        </a>
                    </div>
                </section>

                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.sectionContent}>
                        <FAQSection items={faqItems} />
                    </div>
                </section>
            </main>
        </Layout>
    )
}
