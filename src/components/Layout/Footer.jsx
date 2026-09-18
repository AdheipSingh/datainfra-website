import React from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

const COLS = [
    {
        heading: "Services",
        links: [
            { label: "GPU Cluster Architecture", to: "/services/ai-factory" },
            { label: "Distributed Training Optimization", to: "/services/distributed-training" },
            { label: "GPU Networking & RDMA", to: "/services/gpu-networking" },
            { label: "GPU Sharing & Multi-tenancy", to: "/services/gpu-kubernetes" },
            { label: "Observability & Reliability", to: "/services/gpu-monitoring" },
            { label: "All services", to: "/services" },
        ],
    },
    {
        heading: "Company",
        links: [
            { label: "About", to: "/about" },
            { label: "Partners", to: "/partners" },
            { label: "Contact", to: "/contact" },
            { label: "Open source", href: "https://github.com/baazhq", external: true },
        ],
    },
    {
        heading: "Resources",
        links: [
            { label: "Blog", to: "/blog" },
            { label: "Case studies", to: "/case-studies" },
            { label: "Newsletter", href: "https://saasinfra.substack.com", external: true },
            { label: "RSS feed", href: "/blog/rss.xml" },
        ],
    },
    {
        heading: "Get started",
        links: [
            { label: "GPU Cluster Audit", to: "/audit" },
            { label: "Schedule a call", href: "https://cal.com/baazhq", external: true },
            { label: "Contact", to: "/contact" },
        ],
    },
]

function ExternalIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    )
}

function Social() {
    return (
        <div className={styles.social}>
            <a href="https://linkedin.com/company/baazhq" target="_blank" rel="noopener noreferrer" aria-label="BaaZ on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://github.com/baazhq" target="_blank" rel="noopener noreferrer" aria-label="BaaZ on GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="https://saasinfra.substack.com" target="_blank" rel="noopener noreferrer" aria-label="BaaZ newsletter on Substack">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg>
            </a>
            <a href="/blog/rss.xml" aria-label="Blog RSS feed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1.5" fill="currentColor" /></svg>
            </a>
        </div>
    )
}

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <Link to="/" className={styles.brand} aria-label="BaaZ home">
                            <img src="/img/logo-vector.png" alt="" width="46" height="22" />
                            <span>BaaZ</span>
                        </Link>
                        <p>
                            The software layer on top of your GPU hardware: bring-up,
                            network fabric, Kubernetes or Slurm, scheduling, observability
                            and Day-2 operations.
                        </p>
                        <Social />
                    </div>
                    <div className={styles.newsletter}>
                        <div className={styles.newsletterTitle}>Field notes on GPU infrastructure</div>
                        <p>Occasional posts on RDMA, schedulers, Kubernetes and the things NVIDIA&apos;s docs don&apos;t tell you. No marketing.</p>
                        <form action="https://saasinfra.substack.com/subscribe" method="get" target="_blank" rel="noopener noreferrer">
                            <label htmlFor="footer-email">Email address</label>
                            <input id="footer-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" />
                            <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className={styles.footerCols}>
                    {COLS.map((col) => (
                        <div key={col.heading} className={styles.footerCol}>
                            <div className={styles.footerColHeading}>{col.heading}</div>
                            {col.links.map((l) =>
                                l.to ? (
                                    <Link key={l.label} to={l.to}>{l.label}</Link>
                                ) : (
                                    <a key={l.label} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                                        {l.label}{l.external && <ExternalIcon />}
                                    </a>
                                )
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.footerBottom}>
                    <div>© {year} BaaZ. All rights reserved.</div>
                    <div className={styles.status}><i />Remote by default · on-site when the work needs it</div>
                </div>
            </div>
            <div className={styles.footerMark} aria-hidden="true">BaaZ</div>
        </footer>
    )
}
