import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import { Navbar } from "@site/src/components/Layout"
import styles from "./index.module.css"

const Arrow = () => (<svg className="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)
const Check = () => (<svg className="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>)

const DESCRIPTION = "BaaZ designs GPU deployments and builds the software that runs them: RDMA fabrics on Kubernetes, and distributed GPU compute at energy sites."

// The only Organization block on the home page (spec 5).
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BaaZ",
    "url": "https://baaz.dev",
    "logo": "https://baaz.dev/img/logo-vector.png",
    "description": DESCRIPTION,
    "founder": {
        "@type": "Person",
        "name": "Adheip Singh",
        "jobTitle": "Founder",
        "sameAs": [
            "https://www.linkedin.com/in/adheipsingh/",
            "https://github.com/AdheipSingh",
        ],
    },
    "sameAs": [
        "https://www.linkedin.com/company/baazhq",
        "https://github.com/baazhq",
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "url": "https://cal.com/baazhq",
    },
    "areaServed": "Worldwide",
}

const DOORS = [
    {
        title: "GPU networking on Kubernetes",
        body: "The network decides what a cluster's GPUs are worth. We design the fabric, bring it up, and run NVIDIA's networking stack on Kubernetes, which we also contribute to.",
        items: [
            "Fabric acceptance",
            "Network Operator deployment and upgrades",
            "Secondary networks for training and storage",
        ],
        note: "Six changes merged into NVIDIA's networking software in 2026.",
        link: { label: "GPU networking", to: "/networking" },
    },
    {
        title: "Distributed GPU compute at energy sites",
        body: "GPU pods at homes, batteries and solar sites, run as one fleet that follows the power. We decide the hardware and what the site must provide, then build the software: the pod, the fleet, and the agent that reads the site's power.",
        items: [
            "Deployment design, fixed fee",
            "Pilot, end to end before hardware is bought",
            "Whitepaper on request",
        ],
        link: { label: "Energy sites", to: "/solutions/distributed-gpu-compute-energy-sites" },
    },
]

export default function Home() {
    return (
        <Layout title="GPU deployments, designed and run" description={DESCRIPTION}>
            <Head>
                <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
            </Head>
            <Navbar />
            <div className="site">
                <main>
                    <section className="hero">
                        <div className="container">
                            <div className="hero-copy">
                                <span className="eyebrow">GPU infrastructure engineering</span>
                                <h1 className={`display ${styles.title}`}>BaaZ designs GPU deployments and builds the software that runs them.</h1>
                                <p className="lead">Which hardware, where it sits, how it is powered and connected, and everything from the operating system up. Two kinds of deployment.</p>
                            </div>
                        </div>
                    </section>

                    <section className="section tight">
                        <div className="container">
                            <div className="doors">
                                {DOORS.map((d) => (
                                    <div className="card door" key={d.title}>
                                        <h2 className="h3">{d.title}</h2>
                                        <p className="body">{d.body}</p>
                                        <ul className="checks">
                                            {d.items.map((i) => (
                                                <li key={i}><Check />{i}</li>
                                            ))}
                                        </ul>
                                        {d.note && <p className={styles.note}>{d.note}</p>}
                                        <div className="btn-row">
                                            <Link className="btn btn-secondary" to={d.link.to}>{d.link.label} <Arrow /></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="section tight">
                        <div className="container">
                            <div className={styles.proof}>
                                <p>Code we contribute to: network-operator, ipoib-cni, doca-driver-build, KAI Scheduler.</p>
                                <Link className="link-arrow" to="/open-source">Open source <Arrow /></Link>
                            </div>
                        </div>
                    </section>

                    <section className="cta-band">
                        <div className="container">
                            <div className="inner">
                                <h2 className="h2">Tell us about the deployment.</h2>
                                <p className="lead">We will tell you what it needs, on one call.</p>
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
