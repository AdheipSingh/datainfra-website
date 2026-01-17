import React from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerGrid}>
                    <div className={styles.footerBrand}>
                        <div className={styles.brandName}>BaaZ</div>
                        <p className={styles.tagline}>GPU Infrastructure Consulting</p>
                        <p className={styles.description}>
                            We help companies get the most out of their GPU infrastructure.
                        </p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Pages</h4>
                        <div className={styles.footerLinks}>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/blog">Blog</Link>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Connect</h4>
                        <div className={styles.footerLinks}>
                            <a
                                href="https://linkedin.com/company/baazhq"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/baazhq"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://saasinfra.substack.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Newsletter
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerHeading}>Contact</h4>
                        <div className={styles.footerLinks}>
                            <a
                                href="https://cal.com/baazhq"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Schedule a Call
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; 2024 Sadhrao Software Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
