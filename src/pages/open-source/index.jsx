import React from "react"
import Layout from "@theme/Layout"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

// Newest first. The month is the month of the merge. Status as on GitHub,
// November 2026. A new pull request is added as Open and changes to Merged
// when it lands; one closed without a merge is not listed.
const PULLS = [
    { project: "Mellanox/network-operator", n: 3266, title: "Configurable access mode for NIC firmware storage", status: "Merged", month: "Oct 2026" },
    { project: "Mellanox/network-operator", n: 3147, title: "MTU setting for IPoIB networks", status: "Merged", month: "Oct 2026" },
    { project: "Mellanox/doca-driver-build", n: 299, title: "NFS tools installed on the host for NFS over RDMA", status: "Merged", month: "Sep 2026" },
    { project: "Mellanox/ipoib-cni", n: 132, title: "MTU support", status: "Merged", month: "Jun 2026" },
    { project: "kai-scheduler/KAI-Scheduler", n: 1382, title: "Security contexts for the pods that reserve GPUs", status: "Merged", month: "Apr 2026" },
    { project: "kai-scheduler/KAI-Scheduler", n: 857, title: "Queue validator", status: "Merged", month: "Mar 2026" },
    { project: "Mellanox/network-operator", n: 2070, title: "One global configuration for the NIC cluster policy", status: "Merged", month: "Mar 2026" },
    { project: "Mellanox/network-operator", n: 2035, title: "Pods restart on RDMA, SR-IOV and Multus changes", status: "Merged", month: "Jan 2026" },
]

export default function OpenSource() {
    return (
        <Layout
            title="Open Source"
            description="The open-source projects BaaZ contributes to, with the status of each pull request: NVIDIA's networking software for Kubernetes and the KAI Scheduler."
        >
            <Navbar />
            <div className="site">
                <main>
                    <section className={styles.opening}>
                        <div className="container">
                            <h1 className={styles.title}>Open source</h1>
                            <p className={styles.lead}>Changes we contributed to NVIDIA's open-source networking software and to the KAI Scheduler. Each row links to the pull request.</p>
                        </div>
                    </section>

                    <section className={styles.tableSection}>
                        <div className="container">
                            <div className={styles.table} role="table" aria-label="Pull requests">
                                <div className={styles.head} role="row">
                                    <span role="columnheader">Project</span>
                                    <span role="columnheader">Pull request</span>
                                    <span role="columnheader">Status</span>
                                </div>
                                {PULLS.map((p) => (
                                    <a
                                        key={`${p.project}#${p.n}`}
                                        className={styles.row}
                                        role="row"
                                        href={`https://github.com/${p.project}/pull/${p.n}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span role="cell" className={styles.project}>{p.project}</span>
                                        <span role="cell" className={styles.pr}>
                                            <span className={styles.num}>#{p.n}</span>
                                            <span className={styles.prTitle}>{p.title}</span>
                                        </span>
                                        <span role="cell" className={styles.status}>
                                            <span className={styles.pill}><span aria-hidden="true" className={styles.dot} />{p.status}</span>
                                            <span className={styles.month}>{p.month}</span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                            <p className={styles.footnote}>Status as on GitHub, November 2026.</p>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
