import React from "react"
import styles from "./styles.module.css"

// Each label links to merged upstream work; url: null renders as plain text.
const ITEMS = [
    {
        label: "KAI Scheduler (NVIDIA)",
        url: "https://github.com/kai-scheduler/KAI-Scheduler/pulls?q=is%3Apr+author%3AAdheipSingh+is%3Amerged",
    },
    {
        label: "NVIDIA Network Operator",
        url: "https://github.com/Mellanox/network-operator/pulls?q=is%3Apr+author%3AAdheipSingh+is%3Amerged",
    },
    {
        label: "Mellanox ipoib-cni",
        url: "https://github.com/Mellanox/ipoib-cni/pulls?q=is%3Apr+author%3AAdheipSingh+is%3Amerged",
    },
    {
        label: "NVIDIA Certified Engineers",
        url: "https://www.credly.com/users/adheip-singh-sadhrao.3ab58b44/badges/credly",
    },
    {
        label: "Apache Software Foundation member",
        url: "https://people.apache.org/phonebook.html?uid=adheipsingh",
    },
]

/**
 * ProofBar
 *
 * One horizontal strip listing upstream open-source contributions.
 * Used on the homepage, /about, and /partners.
 *
 * Props:
 *   - leadIn?: string (defaults to the standard lead-in)
 */
export default function ProofBar({
    leadIn = "Upstream contributors to the stack you run:",
}) {
    return (
        <div className={styles.proofBar}>
            <span className={styles.leadIn}>{leadIn}</span>
            <span className={styles.items}>
                {ITEMS.map(({ label, url }, idx) => (
                    <React.Fragment key={label}>
                        {idx > 0 && (
                            <span className={styles.separator} aria-hidden="true">
                                ·
                            </span>
                        )}
                        {url ? (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.item}
                            >
                                {label}
                            </a>
                        ) : (
                            <span className={styles.item}>{label}</span>
                        )}
                    </React.Fragment>
                ))}
            </span>
        </div>
    )
}
