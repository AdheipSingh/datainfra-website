import React from "react"
import styles from "./styles.module.css"

// TODO(ADHEIP-INPUT): add merged-PR or contributor-page URL per project.
// Items with url: null ship unlinked (per spec - never omit an item for a missing URL).
const ITEMS = [
    { label: "NVIDIA KAI Scheduler", url: null },
    { label: "NVIDIA Network Operator", url: null },
    { label: "Mellanox ipoib-cni", url: null },
    {
        label: "NVIDIA Certified Engineers",
        url: "https://www.credly.com/users/adheip-singh-sadhrao.3ab58b44/badges/credly",
    },
    { label: "Apache Software Foundation member", url: null },
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
