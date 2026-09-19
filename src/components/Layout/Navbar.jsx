import React, { useState, useEffect, useRef } from "react"
import Link from "@docusaurus/Link"
import { useLocation } from "@docusaurus/router"
import styles from "./styles.module.css"

const NAV_LINKS = [
    { label: "Case Studies", to: "/case-studies", key: "case-studies" },
    { label: "Blog", to: "/blog", key: "blog" },
    { label: "About", to: "/about", key: "about" },
    { label: "Partners", to: "/partners", key: "partners" },
]

// Six services + one-line descriptions (from the design frames). LLM Inference
// has no detail page yet, so it points at the services index (which carries it).
const SERVICES = [
    { label: "GPU Cluster Architecture", desc: "Bring-up on installed hardware", to: "/services/ai-factory" },
    { label: "Distributed Training Optimization", desc: "NCCL, RDMA, topology", to: "/services/distributed-training" },
    { label: "GPU Networking & RDMA", desc: "RoCE / InfiniBand at wire rate", to: "/services/gpu-networking" },
    { label: "GPU Sharing & Multi-tenancy", desc: "KAI, MIG, quotas", to: "/services/gpu-kubernetes" },
    { label: "Observability & Reliability", desc: "DCGM, XID, recovery", to: "/services/gpu-monitoring" },
    { label: "LLM Inference Optimization", desc: "Serving stack, SLOs, cost/token", to: "/services" },
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
    const [servicesOpen, setServicesOpen] = useState(false)
    const location = useLocation()
    const servicesRef = useRef(null)

    const isActive = (to) => location.pathname === to || location.pathname.startsWith(to + "/")

    // Close the Services dropdown on Escape or outside click.
    useEffect(() => {
        if (!servicesOpen) return
        const onKey = (e) => e.key === "Escape" && setServicesOpen(false)
        const onClick = (e) => {
            if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false)
        }
        document.addEventListener("keydown", onKey)
        document.addEventListener("mousedown", onClick)
        return () => {
            document.removeEventListener("keydown", onKey)
            document.removeEventListener("mousedown", onClick)
        }
    }, [servicesOpen])

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
                    <div className={styles.dropdownWrap} ref={servicesRef}>
                        <button
                            type="button"
                            className={`${styles.navLink} ${isActive("/services") ? styles.active : ""}`}
                            aria-expanded={servicesOpen}
                            aria-haspopup="true"
                            onClick={() => setServicesOpen((v) => !v)}
                        >
                            Services <ChevronIcon />
                        </button>
                        {servicesOpen && (
                            <div className={styles.dropdown}>
                                {SERVICES.map((s) => (
                                    <Link key={s.label} to={s.to} className={styles.dropdownItem} onClick={() => setServicesOpen(false)}>
                                        <span className={styles.dropdownT}>{s.label}</span>
                                        <span className={styles.dropdownD}>{s.desc}</span>
                                    </Link>
                                ))}
                                <Link to="/services" className={styles.dropdownAll} onClick={() => setServicesOpen(false)}>
                                    All services →
                                </Link>
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
                    <Link to="/audit" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnSm} ${styles.hideMobile}`}>
                        GPU Cluster Audit
                    </Link>
                    <a
                        href="https://cal.com/baazhq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSm} ${styles.hideMobile}`}
                    >
                        Talk to us
                    </a>
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
                    <Link to="/services" className={styles.navLink} onClick={() => setMobileOpen(false)}>Services</Link>
                    {NAV_LINKS.map((l) => (
                        <Link key={l.key} to={l.to} className={styles.navLink} onClick={() => setMobileOpen(false)}>{l.label}</Link>
                    ))}
                    <Link to="/contact" className={styles.navLink} onClick={() => setMobileOpen(false)}>Contact</Link>
                    <div className={styles.mobileActions}>
                        <Link to="/audit" className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => setMobileOpen(false)}>
                            GPU Cluster Audit
                        </Link>
                        <a href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
                            Talk to us
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
