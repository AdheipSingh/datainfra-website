import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import { PageMetadata } from "@docusaurus/theme-common"
import { Navbar } from "@site/src/components/Layout"
import { BOOKING_URL } from "@site/src/components/Layout/Navbar"
import LandingDiagram from "@site/src/components/LandingDiagram"
import { NETWORKING_DESKTOP, NETWORKING_MOBILE } from "@site/src/components/LandingDiagram/diagrams"
import l from "@site/src/components/Landing/styles.module.css"
import styles from "./styles.module.css"

const Arrow = () => (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)
const Check = () => (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l4 4L19 6" /></svg>)

const CTA = "Book a GPU Cluster Audit"

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GPU Cluster Audit",
    "url": "https://baaz.dev/networking",
    "provider": { "@type": "Organization", "name": "BaaZ", "url": "https://baaz.dev" },
    "areaServed": "Worldwide",
}

const TRAFFIC = [
    { n: 1, dir: "East-west", title: "Training", carries: "Gradients between GPUs on different servers, at every step of a job.", needs: "RDMA on a lossless path, at the full speed of the link." },
    { n: 2, dir: "North-south", title: "Inference", carries: "Requests from users and applications, and the responses streamed back.", needs: "Low, steady latency, and one stable address in front of every replica." },
    { n: 3, dir: "North-south", title: "Developer work", carries: "Notebooks, terminals and dashboards: many small sessions through the day.", needs: "Access for each person, and a boundary between teams." },
]

const LAYERS = [
    {
        label: "Underlay",
        title: "Switches and links",
        items: [
            "Leaf and spine layout, link speeds and oversubscription",
            "A lossless class for RDMA, with PFC and ECN set the same way on switches and NICs",
            "MTU and DSCP matched end to end, ECMP across the spines",
            "On InfiniBand: subnet manager, partition keys and adaptive routing",
        ],
    },
    {
        label: "Overlay",
        title: "Tenant and pod networks",
        items: [
            "VXLAN segments and VRFs on the switches, where tenants share a fabric",
            "The pod network, with encapsulation that fits inside the underlay's MTU",
            "A load balancer and a gateway for traffic from outside",
            "A namespace and a network policy for each team",
        ],
    },
    {
        label: "Secondary networks",
        title: "The second interface in a pod",
        items: [
            "Host-device when one pod owns the whole NIC",
            "SR-IOV when several pods share a NIC, each isolated in hardware",
            "IPoIB on InfiniBand fabrics",
            "Macvlan for development and single-NIC servers",
        ],
    },
]

const WRITE_UPS = [
    { title: "Secondary networks for GPU workloads in Kubernetes", to: "/blog/secondary-networks-gpu-kubernetes" },
    { title: "Dual-network Kubernetes pods with RDMA", to: "/blog/dual-network-rdma-kubernetes-gh200" },
    { title: "ECMP hash collisions in a fat-tree", to: "/blog/ecmp-hash-collisions-fat-tree-ai-clusters" },
    { title: "RDMA on bare-metal Kubernetes", to: "/case-studies/rdma-kubernetes", tag: "Case study" },
]

// Each change links to its merged pull request.
const pr = (repo, n) => `https://github.com/Mellanox/${repo}/pull/${n}`
const UPSTREAM = [
    {
        repo: "network-operator",
        changes: [
            { text: "One global configuration for the NIC cluster policy.", href: pr("network-operator", 2070) },
            { text: "MTU for IPoIB networks.", href: pr("network-operator", 3147) },
            { text: "Access mode for NIC firmware storage.", href: pr("network-operator", 3266) },
            { text: "Pod restarts on RDMA, SR-IOV and Multus changes.", href: pr("network-operator", 2035) },
        ],
    },
    { repo: "ipoib-cni", changes: [{ text: "MTU support.", href: pr("ipoib-cni", 132) }] },
    { repo: "doca-driver-build", changes: [{ text: "NFS tools on the host, for NFS over RDMA.", href: pr("doca-driver-build", 299) }] },
]

function BookButton({ className = l.button }) {
    return (
        <a className={className} href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <span>{CTA}</span><Arrow />
        </a>
    )
}

export default function Networking() {
    return (
        <Layout
            title="GPU Cluster Networking on Kubernetes"
            description="Network design for GPU clusters on Kubernetes: a switch underlay for RDMA training, a pod overlay for inference and developer traffic, and a two-week audit."
        >
            <PageMetadata image="/img/og-networking.png" />
            <Head>
                <meta property="og:title" content="One GPU cluster, three kinds of traffic" />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            </Head>
            <Navbar />
            <div className={`site ${l.page}`}>
                <main>
                    <section className={l.hero}>
                        <div className={`${l.container} ${l.heroInner}`}>
                            <div className={l.heroCopy}>
                                <span className={l.eyebrow}>GPU cluster networking on Kubernetes</span>
                                <h1 className={l.h1}>
                                    <span>One GPU cluster,</span>
                                    <span className={l.accentLine}>three kinds of traffic</span>
                                </h1>
                                <p className={l.lead}>
                                    Training, inference and developer work each need something different from the network. We design and configure it so each one gets its own path, from the switches up to the pods.
                                </p>
                            </div>
                            <BookButton />
                        </div>
                    </section>

                    <section id="traffic" className={l.sectionAlt}>
                        <div className={`${l.container} ${l.stack}`}>
                            <div className={l.head}>
                                <h2 className={l.h2}>Each kind of traffic, and the path it takes</h2>
                                <p className={l.sub}>Training traffic runs straight on the switch fabric and never enters the pod network. Inference and developer traffic stay on the pod network.</p>
                            </div>
                            <LandingDiagram desktop={NETWORKING_DESKTOP} mobile={NETWORKING_MOBILE} />
                            <div className={styles.trafficWrap}>
                                <div className={`${l.card} ${styles.traffic}`}>
                                    <div className={styles.trafficHead} aria-hidden="true">
                                        <span>Traffic</span><span>What it carries</span><span>What it needs</span>
                                    </div>
                                    {TRAFFIC.map((t) => (
                                        <div className={styles.trafficRow} key={t.title}>
                                            <div className={styles.trafficName}>
                                                <div className={styles.trafficTag}><span className={styles.num}>{t.n}</span><span>{t.dir}</span></div>
                                                <h3>{t.title}</h3>
                                            </div>
                                            <div className={styles.trafficCell}>
                                                <span className={styles.cellLabel}>What it carries</span>
                                                <p>{t.carries}</p>
                                            </div>
                                            <div className={styles.trafficCell}>
                                                <span className={styles.cellLabel}>What it needs</span>
                                                <p className={styles.needs}>{t.needs}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className={styles.note}>Storage and out-of-band management run on networks of their own.</p>
                            </div>
                        </div>
                    </section>

                    <section id="layers" className={l.section}>
                        <div className={`${l.container} ${l.stack}`}>
                            <div className={l.head}>
                                <h2 className={l.h2}>What we configure, from the switch to the pod</h2>
                            </div>
                            <div className={styles.layers}>
                                {LAYERS.map((c) => (
                                    <div className={`${l.card} ${styles.layer}`} key={c.title}>
                                        <div className={styles.layerHead}>
                                            <span className={l.label}>{c.label}</span>
                                            <h3>{c.title}</h3>
                                        </div>
                                        <ul className={styles.dots}>
                                            {c.items.map((i) => (<li key={i}>{i}</li>))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="audit" className={styles.offerSection}>
                        <div className={l.container}>
                            <div className={styles.offer}>
                                <div className={styles.offerCopy}>
                                    <span className={l.label}>The offer</span>
                                    <h2 className={styles.offerTitle}>The GPU Cluster Audit</h2>
                                    <p>Two weeks on a cluster you already run. We test each path under load, fix what is safe to fix, and hand you the rest as a plan.</p>
                                </div>
                                <div className={`${l.card} ${styles.offerCard}`}>
                                    <h3 className={styles.youGet}>You get</h3>
                                    <ul className={styles.checks}>
                                        <li><Check /><span>Test results from before and after</span></li>
                                        <li><Check /><span>What is wrong, in order of priority</span></li>
                                        <li><Check /><span>A fix plan, handed over to your team</span></li>
                                    </ul>
                                    <BookButton className={`${l.button} ${styles.offerButton}`} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="open-source" className={l.sectionAlt}>
                        <div className={`${l.container} ${l.stack}`}>
                            <div className={l.head}>
                                <h2 className={l.h2}>Write-ups and open source</h2>
                            </div>
                            <div className={styles.reading}>
                                <div>
                                    <span className={styles.listLabel}>From our blog</span>
                                    <ul className={styles.rows}>
                                        {WRITE_UPS.map((w) => (
                                            <li key={w.to}>
                                                <Link to={w.to} className={styles.rowLink}>
                                                    <span className={styles.rowTitle}>
                                                        <span>{w.title}</span>
                                                        {w.tag && <span className={styles.tag}>{w.tag}</span>}
                                                    </span>
                                                    <Arrow />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <span className={styles.listLabel}>Merged upstream</span>
                                    <ul className={styles.rows}>
                                        {UPSTREAM.map((u) => (
                                            <li key={u.repo} className={styles.repoRow}>
                                                <span className={styles.repo}>{u.repo}</span>
                                                <span className={styles.changes}>
                                                    {u.changes.map((c, i) => (
                                                        <React.Fragment key={c.href}>
                                                            {i > 0 && " "}
                                                            <a href={c.href} target="_blank" rel="noopener noreferrer">{c.text}</a>
                                                        </React.Fragment>
                                                    ))}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className={styles.fullList}>
                                        <span>Changes we contributed to NVIDIA's open-source networking software.</span>
                                        <Link to="/open-source" className={styles.fullListLink}>See the full list <Arrow /></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={l.closing} aria-label={CTA}>
                        <div className={`${l.container} ${l.closingInner}`}>
                            <BookButton className={`${l.closingButton} ${styles.closingBig}`} />
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
