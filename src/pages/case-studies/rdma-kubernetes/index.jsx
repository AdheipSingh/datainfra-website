import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import RdmaWriteUp from "@site/src/components/RdmaWriteUp"

const Chevron = () => (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>)

// The case study the /networking page links to. Same text and diagrams as
// the original write-up, with every figure removed.
export default function RdmaCaseStudy() {
    return (
        <Layout
            title="RDMA on bare-metal Kubernetes"
            description="How we moved a training cluster from TCP to RoCE with GPUDirect RDMA: NIC and switch selection, Multus dual-network pods, NVIDIA Network Operator, and NCCL GID configuration."
        >
            <Navbar />
            <div className="site">
                <main>
                    <section className="page-hero">
                        <div className="container stack-v gap-16">
                            <div className="breadcrumb">
                                <Link to="/">Home</Link> <Chevron /> <Link to="/networking">Networking</Link> <Chevron /> <span>Case study</span>
                            </div>
                            <span className="eyebrow">Case study</span>
                            <h1 className="h1">RDMA on bare-metal Kubernetes</h1>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <RdmaWriteUp />
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
