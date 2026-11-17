import React, { useState, useEffect } from "react"
import Link from "@docusaurus/Link"
import { useLocation } from "@docusaurus/router"
import styles from "./styles.module.css"

export const BOOKING_URL = "https://cal.com/baazhq"

// Both services by name, then the company pages. The word Solutions is not used.
const NAV_LINKS = [
    { label: "Networking", to: "/networking" },
    { label: "Distributed GPU compute", to: "/distributed-gpu-compute" },
    { label: "Open source", to: "/open-source" },
    { label: "Blog", to: "/blog" },
    { label: "About", to: "/about" },
]

// The one menu button. The energy page passes its own ("Talk to us").
export const DEFAULT_CTA = { label: "Book a GPU Cluster Audit", href: BOOKING_URL }

function MenuIcon({ open }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
    )
}

function CtaLink({ cta, className, onClick }) {
    const external = /^https?:\/\//.test(cta.href)
    return external ? (
        <a href={cta.href} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>{cta.label}</a>
    ) : (
        <Link to={cta.href} className={className} onClick={onClick}>{cta.label}</Link>
    )
}

/**
 * Navbar
 *
 * Props:
 *   - cta?: { label, href }  the menu button; defaults to Book a GPU Cluster Audit.
 *     On a phone a short label stays in the top bar; a long one becomes the
 *     first item of the open menu.
 */
export default function Navbar({ cta = DEFAULT_CTA }) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()
    const ctaFitsBar = cta.label.length <= 14

    const isActive = (to) => location.pathname === to || location.pathname.startsWith(to + "/")

    // Lock body scroll while the mobile sheet is open.
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [mobileOpen])

    return (
        <header className={styles.nav}>
            <div className={styles.navInner}>
                <Link to="/" className={styles.brand} aria-label="BaaZ home">
                    <img src="/img/logo-vector.png" alt="" width="46" height="22" />
                    <span>BaaZ</span>
                </Link>

                <nav className={styles.navLinks} aria-label="Primary">
                    {NAV_LINKS.map((l) => (
                        <Link key={l.to} to={l.to} className={`${styles.navLink} ${isActive(l.to) ? styles.active : ""}`}>
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.navActions}>
                    <CtaLink
                        cta={cta}
                        className={`${styles.btn} ${styles.btnPrimary} ${styles.navCta} ${ctaFitsBar ? "" : styles.hideMobile}`}
                    />
                    <button
                        type="button"
                        className={`${styles.iconBtn} ${styles.burger}`}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <MenuIcon open={mobileOpen} />
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className={styles.mobileSheet}>
                    {!ctaFitsBar && (
                        <div className={styles.mobileActions}>
                            <CtaLink cta={cta} className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => setMobileOpen(false)} />
                        </div>
                    )}
                    {NAV_LINKS.map((l) => (
                        <Link key={l.to} to={l.to} className={styles.navLink} onClick={() => setMobileOpen(false)}>{l.label}</Link>
                    ))}
                </div>
            )}
        </header>
    )
}
