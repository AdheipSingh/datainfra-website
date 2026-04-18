import React from "react"
import styles from "./styles.module.css"

/**
 * ServiceCTA
 *
 * Dark-themed call-to-action banner for in-article / in-page placement.
 *
 * Props:
 *   - service?:  string  (short name of the relevant service, shown as eyebrow label)
 *   - title?:    string  (main CTA headline)
 *   - text?:     string  (supporting copy)
 *   - link?:     string  (destination URL, defaults to https://cal.com/baazhq)
 *   - buttonLabel?: string (button label, defaults to "Schedule a Call")
 */
export default function ServiceCTA({
    service,
    title = "Need help with your GPU infrastructure?",
    text = "We partner with AI teams to diagnose bottlenecks, tune distributed training, and build reliable GPU clusters on-prem or in the cloud.",
    link = "https://cal.com/baazhq",
    buttonLabel = "Schedule a Call",
}) {
    const isExternal = /^https?:\/\//.test(link)

    return (
        <aside className={styles.cta} role="complementary">
            {service && <span className={styles.eyebrow}>{service}</span>}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            <a
                href={link}
                className={styles.button}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                {buttonLabel}
                <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
        </aside>
    )
}
