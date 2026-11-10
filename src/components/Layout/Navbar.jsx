import React, { useState, useEffect, useRef } from "react"
import Link from "@docusaurus/Link"
import { useLocation } from "@docusaurus/router"
import styles from "./styles.module.css"

// Spec section 2, left to right: Networking, Solutions (dropdown),
// Open source, Blog, About, then the Talk to us button.
const SOLUTIONS = [
    { label: "Distributed GPU compute at energy sites", to: "/solutions/distributed-gpu-compute-energy-sites" },
]

const NAV_LINKS = [
    { label: "Open source", to: "/open-source", key: "open-source" },
    { label: "Blog", to: "/blog", key: "blog" },
    { label: "About", to: "/about", key: "about" },
]

function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
    )
}
function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
    )
}
function ChevronIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
        </svg>
    )
}
function MenuIcon({ open }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
    )
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [solutionsOpen, setSolutionsOpen] = useState(false)
    const location = useLocation()
    const solutionsRef = useRef(null)

    const isActive = (to) => location.pathname === to || location.pathname.startsWith(to + "/")

    // Close the Solutions dropdown on Escape or outside click.
    useEffect(() => {
        if (!solutionsOpen) return
        const onKey = (e) => e.key === "Escape" && setSolutionsOpen(false)
        const onClick = (e) => {
            if (solutionsRef.current && !solutionsRef.current.contains(e.target)) setSolutionsOpen(false)
        }
        document.addEventListener("keydown", onKey)
        document.addEventListener("mousedown", onClick)
        return () => {
            document.removeEventListener("keydown", onKey)
            document.removeEventListener("mousedown", onClick)
        }
    }, [solutionsOpen])

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
                    <Link to="/networking" className={`${styles.navLink} ${isActive("/networking") ? styles.active : ""}`}>
                        Networking
                    </Link>
                    <div className={styles.dropdownWrap} ref={solutionsRef}>
                        <span className={styles.splitLink}>
                            <Link to="/solutions" className={`${styles.navLink} ${styles.splitMain} ${isActive("/solutions") ? styles.active : ""}`}>
                                Solutions
                            </Link>
                            <button
                                type="button"
                                className={`${styles.navLink} ${styles.splitToggle}`}
                                aria-label="Show solutions"
                                aria-expanded={solutionsOpen}
                                aria-haspopup="true"
                                onClick={() => setSolutionsOpen((v) => !v)}
                            >
                                <ChevronIcon />
                            </button>
                        </span>
                        {solutionsOpen && (
                            <div className={`${styles.dropdown} ${styles.dropdownSingle}`}>
                                {SOLUTIONS.map((s) => (
                                    <Link key={s.label} to={s.to} className={styles.dropdownItem} onClick={() => setSolutionsOpen(false)}>
                                        <span className={styles.dropdownT}>{s.label}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    {NAV_LINKS.map((l) => (
                        <Link key={l.key} to={l.to} className={`${styles.navLink} ${isActive(l.to) ? styles.active : ""}`}>
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.navActions}>
                    <Link to="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSm} ${styles.hideMobile}`}>
                        Talk to us
                    </Link>
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
                    <Link to="/networking" className={styles.navLink} onClick={() => setMobileOpen(false)}>Networking</Link>
                    <Link to="/solutions" className={styles.navLink} onClick={() => setMobileOpen(false)}>Solutions</Link>
                    {SOLUTIONS.map((s) => (
                        <Link key={s.label} to={s.to} className={`${styles.navLink} ${styles.navSub}`} onClick={() => setMobileOpen(false)}>{s.label}</Link>
                    ))}
                    {NAV_LINKS.map((l) => (
                        <Link key={l.key} to={l.to} className={styles.navLink} onClick={() => setMobileOpen(false)}>{l.label}</Link>
                    ))}
                    <div className={styles.mobileActions}>
                        <Link to="/contact" className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => setMobileOpen(false)}>
                            Talk to us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
