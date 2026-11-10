import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

const Arrow = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)

export default function About() {
    return (
        <Layout
            title="About"
            description="BaaZ is a founder-led GPU infrastructure boutique. The engineer you talk to on the first call is the engineer doing the work."
        >
            <Navbar />
            <div className="site">
                <main>
                    <section className="page-hero">
                        <div className="container stack-v gap-16">
                            <h1 className="h1">About BaaZ</h1>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className={styles.prose}>
                                <p>BaaZ is a founder-led GPU infrastructure boutique. The engineer you talk to on the first call is the engineer doing the work. We have run these systems in production and we contribute to the software we run.</p>
                                <p>We do not build data centers, assemble racks or sell hardware. We decide what goes where and make it run, and we hand it over: your team operates it afterwards, with runbooks and the code.</p>

                                <h2 className="h2" id="partners">Working with partners</h2>
                                <p>Integrators, resellers and GPU cloud providers bring us in for the layer between the hardware and the workloads, under their name or ours. Same engineers, same handover.</p>

                                <p className={styles.footnote}>The founder is a member of the Apache Software Foundation.</p>

                                <div className="btn-row">
                                    <Link className="btn btn-primary btn-lg" to="/contact">Schedule a call <Arrow /></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
