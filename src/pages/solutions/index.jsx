import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

const Arrow = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)

const INCLUDES = [
    "A deployment design: the hardware, what the site must provide, the fleet layout and the measures, as a document your own engineers and suppliers can act on. Fixed fee.",
    "A pilot that runs end to end before any hardware is bought.",
    "The few services nobody sells, written and documented.",
    "The measures that decide whether it pays, agreed up front and reported from the platform's own readings.",
]

export default function Solutions() {
    return (
        <Layout
            title="Solutions"
            description="GPU deployments for places that are not a data center: designed, piloted and run, starting with distributed GPU compute at energy sites."
        >
            <Navbar />
            <div className="site">
                <main>
                    <section className="page-hero">
                        <div className="container stack-v gap-16">
                            <span className="eyebrow">Solutions</span>
                            <h1 className={`h1 ${styles.title}`}>GPU infrastructure for places that are not a data center</h1>
                            <p className="lead">
                                Compute is moving to where the power, the customers or the hardware already are. Each such place needs the same software layer a data center gets, built for a site with no staff, no network you control and no way in from outside. We design that layer, build the first version in the open, and hand it over with the code.
                            </p>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="section-head">
                                <h2 className="h2">What a solution includes</h2>
                            </div>
                            <ul className={styles.list}>
                                {INCLUDES.map((i) => (<li key={i}>{i}</li>))}
                            </ul>
                        </div>
                    </section>

                    <section className="section alt">
                        <div className="container">
                            <div className="card door">
                                <h2 className="h3">Distributed GPU compute at energy sites</h2>
                                <p className="body">GPU pods at homes, batteries and solar sites, run as one fleet that follows the power.</p>
                                <div className="btn-row">
                                    <Link className="btn btn-secondary" to="/solutions/distributed-gpu-compute-energy-sites">Read the solution <Arrow /></Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cta-band">
                        <div className="container">
                            <div className="inner">
                                <h2 className="h2">Planning something that does not fit a data center?</h2>
                                <p className="lead">Tell us about the sites, the hardware and what you need to sell, and we will tell you what the software has to do.</p>
                                <div className="btn-row">
                                    <Link className="btn btn-primary btn-lg" to="/contact">Talk to us <Arrow /></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
