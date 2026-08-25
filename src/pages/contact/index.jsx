import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import EmailCapture from "@site/src/components/EmailCapture"
import styles from "./styles.module.css"

export default function Contact() {
    return (
        <Layout
            title="Contact Us"
            description="Get in touch with BaaZ for GPU infrastructure consulting. Schedule a free call to discuss your GPU cluster, distributed training, or AI infrastructure challenges."
        >
            <Navbar />
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <div className={styles.contactHeader}>
                            <h1 className={styles.pageTitle}>Let's Talk</h1>
                            <p className={styles.leadText}>
                                If you're dealing with GPU infrastructure challenges - utilization,
                                performance, reliability, or building something new - we should
                                talk.
                            </p>
                            <p className={styles.subText}>
                                No sales pitch. Just a conversation about what you're trying to
                                do and whether we can help.
                            </p>
                        </div>

                        {/* Not-ready-for-a-call alternatives.
                            TODO: once the email provider is configured in
                            EmailCapture, reword to "Start with the pre-flight
                            checklist or a fixed-scope GPU Cluster Audit." */}
                        <div className={styles.preCallBlock}>
                            <p className={styles.preCallText}>
                                Not ready for a call? Start with a fixed-scope{" "}
                                <Link to="/audit">GPU Cluster Audit</Link>.
                            </p>
                            <EmailCapture />
                        </div>

                        {/* Cal.com Embed */}
                        <div className={styles.calEmbed}>
                            <iframe
                                src="https://cal.com/baazhq?embed=true&theme=light"
                                width="100%"
                                height="700"
                                frameBorder="0"
                                title="Schedule a call with BaaZ"
                                style={{
                                    border: "none",
                                    borderRadius: "8px",
                                }}
                            />
                        </div>

                        {/* Alternative Contact */}
                        <div className={styles.altContact}>
                            <h3 className={styles.altTitle}>Other Ways to Reach Us</h3>
                            <div className={styles.contactLinks}>
                                <a
                                    href="https://linkedin.com/company/baazhq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.contactLink}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
