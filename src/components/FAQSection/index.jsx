import React from "react"
import Head from "@docusaurus/Head"
import styles from "./styles.module.css"

/**
 * FAQSection
 *
 * Renders a list of FAQ entries as a semantic HTML section and
 * simultaneously injects FAQPage JSON-LD into <head> so Google can
 * surface the Q&As as a rich result / featured snippet.
 *
 * Props:
 *   - title?: string      (optional heading, defaults to "Frequently Asked Questions")
 *   - items:  Array<{ question: string, answer: string }>
 */
export default function FAQSection({ title = "Frequently Asked Questions", items = [] }) {
    if (!items || items.length === 0) return null

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(({ question, answer }) => ({
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": answer,
            },
        })),
    }

    return (
        <section className={styles.faq} aria-labelledby="faq-heading">
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Head>
            <h2 id="faq-heading" className={styles.title}>
                {title}
            </h2>
            <div className={styles.items}>
                {items.map((item, idx) => (
                    <details key={idx} className={styles.item}>
                        <summary className={styles.question}>
                            <h3 className={styles.questionText}>{item.question}</h3>
                            <span className={styles.chevron} aria-hidden="true">+</span>
                        </summary>
                        <div className={styles.answer}>
                            <p>{item.answer}</p>
                        </div>
                    </details>
                ))}
            </div>
        </section>
    )
}
