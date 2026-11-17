import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import { Navbar } from "@site/src/components/Layout"
import styles from "./index.module.css"

const Arrow = () => (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)

const DESCRIPTION = "BaaZ designs GPU data centers and builds the software that runs them: networking inside GPU clusters on Kubernetes, and distributed GPU compute at energy sites."

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

// The two doors: each opens its service page. The home page explains nothing itself.
const DOORS = [
    {
        title: "Networking",
        body: "The network inside a GPU cluster on Kubernetes: a separate path for training, inference and developer traffic, from the switches up to the pods.",
        to: "/networking",
    },
    {
        title: "Distributed GPU compute",
        body: "For companies with sites and power: GPU pods at your sites, run as one fleet your team owns.",
        to: "/distributed-gpu-compute",
    },
]

export default function Home() {
    return (
        <Layout title="GPU data centers, designed and run" description={DESCRIPTION}>
            <Head>
                <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
            </Head>
            <Navbar />
            <div className="site">
                <main>
                    <section className={styles.hero}>
                        <div className={`container ${styles.heroInner}`}>
                            <span className={styles.eyebrow}>GPU infrastructure engineering</span>
                            <h1 className={styles.title}>
                                <span>BaaZ designs GPU data centers</span>
                                <span className={styles.accentLine}>and builds the software that runs them.</span>
                            </h1>
                            <p className={styles.lead}>Which hardware, where it sits, how it is powered, cooled and connected, and everything from the operating system up.</p>
                        </div>
                    </section>

                    <section className={styles.doorsSection}>
                        <div className={`container ${styles.doors}`}>
                            {DOORS.map((d) => (
                                <Link key={d.to} to={d.to} className={styles.door}>
                                    <span className={styles.doorHead}>
                                        <h2 className={styles.doorTitle}>{d.title}</h2>
                                        <span className={styles.doorArrow}><Arrow /></span>
                                    </span>
                                    <p className={styles.doorBody}>{d.body}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
