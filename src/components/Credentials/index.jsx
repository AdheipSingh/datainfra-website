import React, { useState } from "react"
import styles from "./styles.module.css"

// Upstream contributions, grouped by project. Every PR links to the real
// pull request on GitHub. Keep titles verbatim from upstream; status is
// "merged" or "open" so nothing is misrepresented.
const PROJECTS = [
    {
        name: "KAI Scheduler",
        org: "NVIDIA",
        repo: "kai-scheduler/KAI-Scheduler",
        url: "https://github.com/kai-scheduler/KAI-Scheduler",
        blurb: "GPU-aware batch scheduler for Kubernetes.",
        prs: [
            {
                n: 857,
                title: "feat(queue-controller): add queue validator",
                status: "merged",
                date: "Mar 2026",
                url: "https://github.com/kai-scheduler/KAI-Scheduler/pull/857",
            },
            {
                n: 1382,
                title: "feat: reservation security context",
                status: "merged",
                date: "Apr 2026",
                url: "https://github.com/kai-scheduler/KAI-Scheduler/pull/1382",
            },
        ],
    },
    {
        name: "Network Operator",
        org: "NVIDIA",
        repo: "Mellanox/network-operator",
        url: "https://github.com/Mellanox/network-operator",
        blurb: "Manages RDMA, SR-IOV and Multus networking on Kubernetes.",
        prs: [
            {
                n: 2035,
                title: "feat: RDMA, SR-IOV, Multus auto-restart pods on config changes",
                status: "merged",
                date: "Jan 2026",
                url: "https://github.com/Mellanox/network-operator/pull/2035",
            },
            {
                n: 2070,
                title: "feat: add global config support for NicClusterPolicy",
                status: "merged",
                date: "Mar 2026",
                url: "https://github.com/Mellanox/network-operator/pull/2070",
            },
            {
                n: 3147,
                title: "feat: add MTU support to IPoIBNetwork CRD",
                status: "open",
                url: "https://github.com/Mellanox/network-operator/pull/3147",
            },
        ],
    },
    {
        name: "DOCA Driver Build",
        org: "NVIDIA",
        repo: "Mellanox/doca-driver-build",
        url: "https://github.com/Mellanox/doca-driver-build",
        blurb: "Builds NVIDIA DOCA / MOFED driver containers for Kubernetes.",
        prs: [
            {
                n: 299,
                title: "feat: install NFS userspace tools on host when ENABLE_NFSRDMA is enabled",
                status: "merged",
                date: "Sep 2026",
                url: "https://github.com/Mellanox/doca-driver-build/pull/299",
            },
        ],
    },
    {
        name: "ipoib-cni",
        org: "NVIDIA / Mellanox",
        repo: "Mellanox/ipoib-cni",
        url: "https://github.com/Mellanox/ipoib-cni",
        blurb: "IP-over-InfiniBand CNI plugin for Kubernetes pods.",
        prs: [
            {
                n: 132,
                title: "feat: add MTU support",
                status: "merged",
                date: "Jun 2026",
                url: "https://github.com/Mellanox/ipoib-cni/pull/132",
            },
        ],
    },
]

// Professional credentials and memberships. `holder` attributes a personal
// badge to the team member who earned it; omit it for org-level memberships.
// Add more rows here as the team earns more badges.
const CERTS = [
    {
        holder: "Gurjot Kaur",
        title: "NVIDIA-Certified Associate",
        subtitle: "AI Infrastructure and Operations",
        issuer: "NVIDIA",
        url: "https://www.credly.com/go/ldtOTwWSKUCz73PViG0wyQ",
        cta: "View badge",
    },
    {
        holder: "Adheip Singh",
        title: "NVIDIA-Certified Associate",
        subtitle: "AI Infrastructure and Operations",
        issuer: "NVIDIA",
        url: "https://www.credly.com/users/adheip-singh-sadhrao.3ab58b44/badges/credly",
        cta: "View badge",
    },
    {
        title: "Apache Software Foundation",
        subtitle: "Foundation member",
        issuer: "The Apache Software Foundation",
        url: "https://people.apache.org/phonebook.html?uid=adheipsingh",
        cta: "View membership",
    },
]

const allPRs = PROJECTS.flatMap((p) => p.prs)
const totalPRs = allPRs.length
const mergedPRs = allPRs.filter((pr) => pr.status === "merged").length

function ExternalIcon() {
    return (
        <svg
            className={styles.extIcon}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    )
}

function Contributions() {
    return (
        <div>
            <p className={styles.panelLead}>
                {totalPRs} pull requests ({mergedPRs} merged) across{" "}
                {PROJECTS.length} upstream projects in the NVIDIA GPU and
                networking stack.
            </p>
            <div className={styles.projectGrid}>
                {PROJECTS.map((p) => (
                    <div key={p.repo} className={styles.projectCard}>
                        <div className={styles.projectHeader}>
                            <div>
                                <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.projectName}
                                >
                                    {p.name}
                                    <ExternalIcon />
                                </a>
                                <span className={styles.orgBadge}>{p.org}</span>
                            </div>
                            <span className={styles.prCount}>
                                {p.prs.length} {p.prs.length === 1 ? "PR" : "PRs"}
                            </span>
                        </div>
                        <p className={styles.projectBlurb}>{p.blurb}</p>
                        <ul className={styles.prList}>
                            {p.prs.map((pr) => (
                                <li key={pr.n} className={styles.prItem}>
                                    <a
                                        href={pr.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.prLink}
                                    >
                                        <span className={styles.prNum}>#{pr.n}</span>
                                        <span className={styles.prTitle}>{pr.title}</span>
                                    </a>
                                    <span className={styles.prMeta}>
                                        <span
                                            className={`${styles.statusPill} ${
                                                pr.status === "merged"
                                                    ? styles.statusMerged
                                                    : styles.statusOpen
                                            }`}
                                        >
                                            {pr.status === "merged" ? "Merged" : "Open"}
                                        </span>
                                        {pr.date && (
                                            <span className={styles.prDate}>{pr.date}</span>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

function Certifications() {
    return (
        <div>
            <p className={styles.panelLead}>
                Vendor-verified certifications and open-source foundation
                memberships held across the team.
            </p>
            <div className={styles.certBox}>
                {CERTS.map((c) => (
                    <a
                        key={c.title + c.subtitle}
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.certRow}
                    >
                        <div className={styles.certRowBadge} aria-hidden="true">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="12" cy="8" r="6" />
                                <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11" />
                            </svg>
                        </div>
                        <div className={styles.certRowBody}>
                            <div className={styles.certRowHead}>
                                <span className={styles.certRowTitle}>{c.title}</span>
                                <span className={styles.certRowIssuer}>{c.issuer}</span>
                            </div>
                            <span className={styles.certRowSub}>
                                {c.subtitle}
                                {c.holder && (
                                    <span className={styles.certRowHolder}>
                                        {c.holder}
                                    </span>
                                )}
                            </span>
                        </div>
                        <span className={styles.certRowCta}>
                            {c.cta}
                            <ExternalIcon />
                        </span>
                    </a>
                ))}
            </div>
        </div>
    )
}

/**
 * Credentials
 *
 * Tabbed panel showcasing upstream open-source contributions (real merged PRs)
 * and professional certifications. Designed for the /about page.
 */
export default function Credentials() {
    const [tab, setTab] = useState("contributions")

    return (
        <div className={styles.wrapper}>
            <div className={styles.tabs} role="tablist" aria-label="Credentials">
                <button
                    role="tab"
                    aria-selected={tab === "contributions"}
                    className={`${styles.tab} ${tab === "contributions" ? styles.tabActive : ""}`}
                    onClick={() => setTab("contributions")}
                >
                    Open-Source Contributions
                    <span className={styles.tabCount}>{totalPRs}</span>
                </button>
                <button
                    role="tab"
                    aria-selected={tab === "certifications"}
                    className={`${styles.tab} ${tab === "certifications" ? styles.tabActive : ""}`}
                    onClick={() => setTab("certifications")}
                >
                    Certifications
                    <span className={styles.tabCount}>{CERTS.length}</span>
                </button>
            </div>
            {/* Both panels stay in the DOM (crawlable, no-JS friendly); the
                inactive one is hidden with CSS. */}
            <div
                className={styles.panel}
                role="tabpanel"
                hidden={tab !== "contributions"}
            >
                <Contributions />
            </div>
            <div
                className={styles.panel}
                role="tabpanel"
                hidden={tab !== "certifications"}
            >
                <Certifications />
            </div>
        </div>
    )
}
