import React, { useState } from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>
                BaaZ
            </Link>

            <div className={styles.navLinks}>
                <Link to="/about" className={styles.navLink}>
                    About
                </Link>
                <Link to="/blog" className={styles.navLink}>
                    Blog
                </Link>
                <Link to="/contact" className={styles.navLink}>
                    Contact
                </Link>
                <a
                    href="https://cal.com/baazhq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                >
                    Let's Talk
                </a>
            </div>

            <button
                className={styles.mobileMenuBtn}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    {isOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {isOpen && (
                <div className={styles.mobileMenu}>
                    <Link
                        to="/about"
                        className={styles.mobileNavLink}
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/blog"
                        className={styles.mobileNavLink}
                        onClick={() => setIsOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        to="/contact"
                        className={styles.mobileNavLink}
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <a
                        href="https://cal.com/baazhq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                        onClick={() => setIsOpen(false)}
                    >
                        Let's Talk
                    </a>
                </div>
            )}
        </nav>
    )
}
