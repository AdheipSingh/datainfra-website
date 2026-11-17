import React from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

// Brand and social links, then the two services, then the company pages.
const COLS = [
    {
        heading: "Services",
        links: [
            { label: "Networking", to: "/networking" },
            { label: "Distributed GPU compute", to: "/distributed-gpu-compute" },
        ],
    },
    {
        heading: "Company",
        links: [
            { label: "About", to: "/about" },
            { label: "Open source", to: "/open-source" },
            { label: "Blog", to: "/blog" },
            { label: "Contact", to: "/contact" },
        ],
    },
]

function Social() {
    return (
        <div className={styles.social}>
            <a href="https://linkedin.com/company/baazhq" target="_blank" rel="noopener noreferrer" aria-label="BaaZ on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9.5h4v11H3zM10 9.5h3.8v1.6c.6-1 1.9-1.9 3.7-1.9 3.9 0 4.5 2.5 4.5 5.7v5.6h-4v-5c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6v5.1H10z" /></svg>
            </a>
            <a href="https://github.com/baazhq" target="_blank" rel="noopener noreferrer" aria-label="BaaZ on GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.8 2.8 5.8 3.1 5.8 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
            </a>
            <a href="mailto:adheip@baaz.dev" aria-label="Email BaaZ">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
            </a>
        </div>
    )
}

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerCols}>
                    <div className={styles.footerBrand}>
                        <Link to="/" className={styles.brand} aria-label="BaaZ home">
                            <img src="/img/logo-vector.png" alt="" width="46" height="22" />
                            <span>BaaZ</span>
                        </Link>
                        <Social />
                    </div>
                    {COLS.map((col) => (
                        <div key={col.heading} className={styles.footerCol}>
                            <div className={styles.footerColHeading}>{col.heading}</div>
                            {col.links.map((l) => (
                                <Link key={l.label} to={l.to}>{l.label}</Link>
                            ))}
                        </div>
                    ))}
                </div>

                <div className={styles.footerBottom}>
                    <div>© {year} BaaZ</div>
                </div>
            </div>
            <div className={styles.footerMark} aria-hidden="true">BaaZ</div>
        </footer>
    )
}
