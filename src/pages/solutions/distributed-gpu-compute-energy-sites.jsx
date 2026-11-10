import React from "react"
import Link from "@docusaurus/Link"
import SolutionDetail from "@site/src/components/SolutionDetail"
import WhitepaperRequest from "@site/src/components/WhitepaperRequest"
import styles from "./styles.module.css"

const Arrow = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)

const PROBLEMS = [
    {
        title: "The empty disk",
        body: "A server at a home cannot be installed over the network, and its management controller cannot be reached from outside. A blank machine at a site is a dead end, and every method that works in a data center assumes a network you control.",
    },
    {
        title: "The dropped link",
        body: "Home internet drops constantly. A fleet built as one big cluster loses nodes all day, and one bad setting reaches every home at once. Many homes have no public address at all, so nothing outside can reach in to fix it.",
    },
    {
        title: "The ignored limit",
        body: "The battery is carrying the house, or the grid has set a limit. A pod that only listens to the cloud ignores that the moment the cloud is unreachable, and the house, the battery and the grid pay for it.",
    },
    {
        title: "The silent fleet",
        body: "Nothing in a garage announces that it has been idle for a week, throttled every evening, or waiting for a technician. Without the right readings the margin leaks, and nobody sees it until the quarter ends.",
    },
]

const DECIDE = [
    ["The pod.", "GPU class and edition, the host around it, storage, enclosure and cooling, and the power it draws at full load and at its floor."],
    ["What the site must provide.", "Its own circuit for the pod, a meter if the host is paid per kilowatt-hour, the router and the connection, and where the pod gets its power readings: from the inverter on the local network, or from the energy platform."],
    ["The fleet layout.", "Regions, gateways, spares, and how a pod is replaced."],
    ["The measures.", "The five below, with the targets written down before the first pod ships."],
]

const PRINCIPLES = [
    ["Nothing is installed at the site.", "Pods are imaged, tested and enrolled at a depot or the factory, and ship ready to plug in. The installer connects power and network; the pod does the rest."],
    ["Every pod runs on its own.", "Each is its own small cluster. A central manager publishes settings; the pod pulls them when it can and keeps working when it cannot. Changes roll out in stages and roll back by themselves."],
    ["The pod opens every connection; nothing connects in.", "One tunnel for management, one path for customer traffic, so a customer surge cannot lock you out and a management outage cannot stop customers."],
    ["The pod follows the site's power.", "Its agent reads the battery, the solar output and the house load on the local network and sets the GPU's power limit itself: full, reduced, paused, off. If the readings stop, it drops to a safe level on its own. It never commands the battery or the inverter."],
    ["Open source, configured, plus the services we write.", "The code is yours, with documentation and handover."],
]

const WHERE = [
    ["Central.", "Control plane, no GPUs: fleet manager, enrollment and identity, placement and inventory, monitoring. It publishes; pods pull."],
    ["Regional.", "A gateway per region: public address, tunnel hub, routing to pods with power to spare, model cache, metering."],
    ["Site.", "The pod: immutable operating system, Kubernetes, GPU runtime, model server, pod agent. Outbound connections only."],
    ["Depot.", "Staging depot or factory: image, firmware settings, keys, burn-in. Ships ready to plug in."],
]

const WRITE = [
    ["Pod agent.", "Reads the site's power, sets the GPU's power limit, reports health and draw, drops to a safe level when the readings stop. Self-test on first boot."],
    ["Placement and inventory.", "Every pod's state from staged to enrolled, serving, draining and retired, with its site, region and capacity."],
    ["Energy-aware routing.", "The regional gateway sends each request to a healthy pod with power to spare, and meters usage per customer."],
    ["Energy platform integration.", "Where an operator's platform can set a budget per site, the agent takes it as an input alongside the local readings."],
]

const MEASURES = [
    ["Fleet availability.", "Pod-hours serving over pod-hours installed."],
    ["Remote recovery rate.", "Incidents closed without a site visit."],
    ["Site visits per 100 pods.", "Per month; the operations budget line."],
    ["Onboarding time.", "Plug-in to first customer request served."],
    ["Time to safe cap.", "Power-limit event to GPU cap applied."],
]

const WHITEPAPER_CONTENTS = [
    "What the public designs describe, and what they leave out",
    "The operating model: five principles, from the empty disk to the power limit",
    "How it is built: four phases and six proofs in a quarter",
    "The measures that decide the margin, and which build decision moves each one",
    "Risks and what the design does about them",
]

function TermList({ items }) {
    return (
        <ul className={styles.list}>
            {items.map(([term, text]) => (
                <li key={term}><strong>{term}</strong> {text}</li>
            ))}
        </ul>
    )
}

export default function EnergySites() {
    return (
        <SolutionDetail
            seoTitle="Distributed GPU Compute at Energy Sites"
            seoDescription="Software to run GPU pods at homes, batteries and solar sites: hardware and site design, zero-touch enrollment, fleet operations, a pod that follows the site's power. Whitepaper on request."
            ogImage="/img/og-energy-sites.png"
            path="/solutions/distributed-gpu-compute-energy-sites"
            breadcrumb={[
                { label: "Home", to: "/" },
                { label: "Solutions", to: "/solutions" },
                { label: "Distributed GPU compute at energy sites" },
            ]}
            h1="Distributed GPU compute at energy sites"
            lead="GPU pods at homes, batteries and solar farms only work if the software treats each site as what it is: a small data center with no staff, no network you control, no way in from outside, and a power supply that changes hour by hour. We decide the hardware and what the site must provide, and we build that software: the pod's operating system and enrollment, the fleet management, the agent that follows the site's power, and the monitoring that shows whether the fleet is earning its keep."
            actions={[
                { label: "Request the whitepaper", href: "#whitepaper", primary: true },
                { label: "Talk to us about your fleet", to: "/contact" },
            ]}
        >
            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <h2 className="h2">The problem</h2>
                        <p className="lead">
                            Operators with sites and power are putting GPUs where the electricity already is: solar and battery retailers, virtual power plant operators, modular data center and edge compute companies, charging networks. The hardware and the energy side are well understood. Four things go wrong when the software is an afterthought.
                        </p>
                    </div>
                    <div className={`grid grid-2 ${styles.problems}`}>
                        {PROBLEMS.map((p) => (
                            <div className="card" key={p.title}>
                                <h3 className="h4">{p.title}</h3>
                                <p className="body">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section alt">
                <div className="container">
                    <div className={styles.prose}>
                        <h2 className="h2">What we decide before any hardware is bought</h2>
                        <p>The design comes first, as a document the energy side and the hardware supplier can act on. It settles:</p>
                        <TermList items={DECIDE} />
                        <p>Fixed fee, scoped on the first call. It stands on its own if you build with someone else.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.prose}>
                        <h2 className="h2">How we solve it</h2>
                        <p>Five principles, applied in four places. Everything above the hardware is open-source software, configured rather than written, except the few small services that do not exist anywhere else.</p>
                        <TermList items={PRINCIPLES} />
                        <h3 className={`h3 ${styles.subhead}`}>Where the software runs</h3>
                        <TermList items={WHERE} />
                        <h3 className={`h3 ${styles.subhead}`}>What we write ourselves</h3>
                        <TermList items={WRITE} />
                        <p>Configured, not written: an immutable operating system with automatic rollback, single-node Kubernetes on each pod, open model serving, outbound-only encrypted tunnels, boot attestation and workload identity, metrics and alerting.</p>
                    </div>
                </div>
            </section>

            <section className="section alt">
                <div className="container">
                    <div className={styles.prose}>
                        <h2 className="h2">What we measure</h2>
                        <p>A pod's margin depends on five things, and four of them are set by how the software is built: sellable hours, utilization, operations cost and site visits. Price is the fifth. These are the measures agreed during design and reported monthly, from the platform's own readings.</p>
                        <TermList items={MEASURES} />
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={`${styles.prose} ${styles.whitepaper}`}>
                        <h2 className="h2" id="whitepaper">Whitepaper: Compute Where the Power Is</h2>
                        <p>How to build and run distributed GPU compute at homes, batteries and solar sites, and how the way it is built decides whether it pays.</p>
                        <ul className={styles.list}>
                            {WHITEPAPER_CONTENTS.map((c) => (<li key={c}>{c}</li>))}
                        </ul>
                        <WhitepaperRequest
                            subject="Whitepaper request: Compute Where the Power Is"
                            buttonLabel="Email me the whitepaper"
                            note="We email the PDF within one business day. BaaZ may follow up once about it; nothing else."
                        />
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="container">
                    <div className="inner">
                        <h2 className="h2">Planning a fleet?</h2>
                        <p className="lead">Tell us about your sites, your hardware and what your energy platform can signal, and we will tell you what the pod software would need to do.</p>
                        <div className="btn-row">
                            <Link className="btn btn-primary btn-lg" to="/contact">Talk to us <Arrow /></Link>
                            <a className="btn btn-secondary btn-lg" href="#whitepaper">Request the whitepaper</a>
                        </div>
                    </div>
                </div>
            </section>
        </SolutionDetail>
    )
}
