import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

const Arrow = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)

// Merged changes only, each linked to github.com/Mellanox/<repo>/pull/<number>.
const CHANGES = [
    { repo: "network-operator", pr: 3266, text: "make NIC firmware storage access mode configurable. September 2026." },
    { repo: "network-operator", pr: 3147, text: "MTU support on the IPoIBNetwork resource. September 2026." },
    { repo: "ipoib-cni", pr: 132, text: "MTU support. May 2026." },
    { repo: "doca-driver-build", pr: 299, text: "install the NFS userspace tools on the host when NFS over RDMA is enabled. April 2026." },
    { repo: "network-operator", pr: 2070, text: "global configuration for the NicClusterPolicy. January 2026." },
    { repo: "network-operator", pr: 2035, text: "restart RDMA, SR-IOV and Multus pods automatically on configuration changes. January 2026." },
]

export default function OpenSource() {
    return (
        <Layout
            title="Open Source"
            description="The open-source software BaaZ contributes to and runs for customers: NVIDIA's networking stack on Kubernetes, the KAI Scheduler, and our own work."
        >
            <Navbar />
            <div className="site">
                <main>
                    <section className="page-hero">
                        <div className="container stack-v gap-16">
                            <h1 className="h1">Open source</h1>
                            <p className="lead">We run this software for customers, and we contribute to it. Everything below links to the merged change or the repository.</p>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="section-head">
                                <h2 className="h2">NVIDIA networking on Kubernetes</h2>
                                <p className="lead">Maintained in the Mellanox organization on GitHub. Changes contributed in 2026:</p>
                            </div>
                            <ul className={styles.changes}>
                                {CHANGES.map((c) => (
                                    <li key={c.pr}>
                                        <a href={`https://github.com/Mellanox/${c.repo}/pull/${c.pr}`} target="_blank" rel="noopener noreferrer">
                                            <span className={styles.ref}>{c.repo} #{c.pr}:</span> {c.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="section alt">
                        <div className="container">
                            <div className="section-head">
                                <h2 className="h2">KAI Scheduler</h2>
                                <p className="lead">A queue validator for the KAI Scheduler, the GPU scheduler we run for multi-team clusters.</p>
                            </div>
                            <Link className="link-arrow" to="/blog/contributing-queue-validator-kai-scheduler">The blog post <Arrow /></Link>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
