import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

const Arrow = () => (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)

export default function About() {
    return (
        <Layout
            title="About"
            description="BaaZ is a founder-led GPU infrastructure boutique. The engineer you talk to on the first call is the engineer doing the work."
        >
            <Navbar />
            <div className="site">
                <main className={styles.main}>
                    <div className="container">
                        <div className={styles.row}>
                            <h1 className={styles.title}>About BaaZ</h1>
                            <p className={styles.intro}>BaaZ is a founder-led GPU infrastructure boutique. The engineer you talk to on the first call is the engineer doing the work. We have run these systems in production and we contribute to the software we run.</p>
                        </div>
                        <div id="partners" className={`${styles.row} ${styles.partners}`}>
                            <h2 className={styles.subtitle}>Working with partners</h2>
                            <p className={styles.body}>Integrators, resellers and GPU cloud providers bring us in for the layer between the hardware and the workloads, under their name or ours.</p>
                        </div>
                        <div className={`${styles.row} ${styles.action}`}>
                            <span />
                            <Link to="/contact" className={styles.talk}>Talk to us <Arrow /></Link>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}
