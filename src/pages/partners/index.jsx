import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import { Navbar } from "@site/src/components/Layout"
import ProofBar from "@site/src/components/ProofBar"
import styles from "./styles.module.css"

export default function Partners() {
    return (
        <Layout
            title="Partners"
            description="Some of our work comes through partners: hardware resellers, system integrators, and GPU cloud or colo providers. We deliver the layer between the metal and the workloads."
        >
            <Head>
                <link rel="canonical" href="https://baaz.dev/partners" />
                <meta property="og:url" content="https://baaz.dev/partners" />
                <meta property="og:type" content="website" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <h1 className={styles.pageTitle}>Working with partners</h1>
                        <p className={styles.bodyText}>
                            Some of our work comes through partners: hardware resellers,
                            system integrators, and GPU cloud or colo providers whose
                            customers need the software stack brought up on the hardware
                            they've sold. On those deals we deliver the layer between
                            the metal and the workloads - provisioning, network fabric,
                            Kubernetes or Slurm, scheduling, monitoring, and handover to
                            the customer's team.
                        </p>
                        <p className={styles.bodyText}>
                            We're flexible on how engagements are structured and
                            branded, and the usual starting point is a single deal
                            rather than a formal agreement.
                        </p>
                        <p className={styles.bodyText}>
                            If you have a customer or a deal where this fits, get in
                            touch.
                        </p>
                    </div>
                </section>

                <ProofBar leadIn="Our engineers contribute upstream to the NVIDIA stack - the work is public." />

                <section className={styles.ctaSection}>
                    <a
                        href="https://cal.com/baazhq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        Schedule a call
                    </a>
                </section>
            </main>
        </Layout>
    )
}
