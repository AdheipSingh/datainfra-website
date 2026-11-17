import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import { PageMetadata } from "@docusaurus/theme-common"
import { Navbar } from "@site/src/components/Layout"
import { BOOKING_URL } from "@site/src/components/Layout/Navbar"
import LandingDiagram from "@site/src/components/LandingDiagram"
import { ENERGY_DESKTOP, ENERGY_MOBILE } from "@site/src/components/LandingDiagram/diagrams"
import l from "@site/src/components/Landing/styles.module.css"
import styles from "./styles.module.css"

const Arrow = () => (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)

const ICON = {
    pod: (<><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="9" cy="12" r="2.4" /><circle cx="15" cy="12" r="2.4" /></>),
    site: (<><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
    power: (<path d="M13 2L4 14h7l-1 8 9-12h-7z" />),
    fleet: (<><circle cx="5" cy="12" r="2.5" /><circle cx="19" cy="6" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="M7.3 10.9l9.4-3.8M7.3 13.1l9.4 3.8" /></>),
    security: (<><path d="M12 3l7 3v5c0 4.6-3 8.3-7 10-4-1.7-7-5.4-7-10V6z" /><path d="M9 12l2 2 4-4" /></>),
    revenue: (<path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />),
}

const H1 = "Turn your energy sites into GPU compute you can sell"
const TALK = { label: "Talk to us", href: BOOKING_URL }

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Distributed GPU compute at energy sites",
    "url": "https://baaz.dev/distributed-gpu-compute",
    "provider": { "@type": "Organization", "name": "BaaZ", "url": "https://baaz.dev" },
    "areaServed": "Worldwide",
}

const PARTS = [
    { icon: "pod", title: "The pod", body: "The right GPU hardware for your sites, ready for your suppliers to deliver." },
    { icon: "site", title: "The site", body: "What each site must provide, and an install your own crews can do." },
    { icon: "power", title: "Power", body: "Your energy system stays in charge. The fleet works within the limits it sets." },
    { icon: "fleet", title: "The fleet", body: "Every pod run from one place by your team, without routine site visits." },
    { icon: "security", title: "Security", body: "Hardware and customer workloads protected at sites nobody staffs." },
    { icon: "revenue", title: "Revenue", body: "Compute your customers can buy, and the numbers behind every site." },
]

const STEPS = [
    { n: 1, title: "A deployment design", body: "What to buy, what each site needs, and how you will know it pays." },
    { n: 2, title: "A working pilot", body: "The whole system running end to end before you commit to a fleet." },
    { n: 3, title: "Your platform", body: "The software, the code and the runbooks, handed over to your team." },
]

function TalkButton({ className = l.button }) {
    return (
        <a className={className} href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <span>Talk to us</span><Arrow />
        </a>
    )
}

export default function DistributedGpuCompute() {
    return (
        <Layout
            title="Distributed GPU Compute at Energy Sites"
            description="BaaZ designs and builds distributed GPU compute for companies with sites and power: GPU pods at your sites, run as one fleet your team owns."
        >
            <PageMetadata image="/img/og-energy-sites.png" />
            <Head>
                <meta property="og:title" content={H1} />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            </Head>
            <Navbar cta={TALK} />
            <div className={`site ${l.page}`}>
                <main>
                    <section className={`${l.hero} ${styles.hero}`}>
                        <div className={`${l.container} ${l.heroInner} ${styles.heroInner}`}>
                            <div className={`${l.heroCopy} ${styles.heroCopy}`}>
                                <span className={l.eyebrow}>Distributed GPU compute at energy sites</span>
                                <h1 className={l.h1}>
                                    <span>Turn your energy sites</span>
                                    <span className={l.accentLine}>into GPU compute you can sell</span>
                                </h1>
                                <p className={`${l.lead} ${styles.lead}`}>
                                    BaaZ designs and builds distributed GPU compute for companies with sites and power: GPU pods at your sites, run as one fleet your team owns.
                                </p>
                                <div className={styles.heroButton}><TalkButton /></div>
                            </div>
                            <LandingDiagram id="how" className={styles.diagram} desktop={ENERGY_DESKTOP} mobile={ENERGY_MOBILE} />
                        </div>
                    </section>

                    <section id="build" className={l.sectionAlt}>
                        <div className={`${l.container} ${l.stack} ${styles.stackWide}`}>
                            <div className={`${l.head} ${styles.headWide}`}>
                                <h2 className={l.h2}>What we design and build</h2>
                                <p className={l.sub}>Everything between the power at your sites and the compute your customers buy. We configure existing software and write only what is missing.</p>
                            </div>
                            <div className={styles.parts}>
                                {PARTS.map((p) => (
                                    <div className={`${l.card} ${styles.part}`} key={p.title}>
                                        <span className={styles.icon}>
                                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICON[p.icon]}</svg>
                                        </span>
                                        <h3>{p.title}</h3>
                                        <p>{p.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="offer" className={l.section}>
                        <div className={`${l.container} ${l.stack} ${styles.stackWide}`}>
                            <h2 className={l.h2}>What you get</h2>
                            <div className={styles.steps}>
                                {STEPS.map((s) => (
                                    <div className={styles.step} key={s.n}>
                                        <span className={styles.stepNum}>{s.n}</span>
                                        <h3>{s.title}</h3>
                                        <p>{s.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="proof" className={l.sectionAlt}>
                        <div className={`${l.container} ${styles.proof}`}>
                            <div className={styles.proofHead}>
                                <span className={l.label}>Why BaaZ</span>
                                <h2 className={`${l.h2} ${styles.proofTitle}`}>GPU infrastructure is all we do</h2>
                            </div>
                            <div className={styles.proofList}>
                                <div className={styles.proofItem}>
                                    <h3>We contribute to NVIDIA's open-source software</h3>
                                    <p>Merged changes in the infrastructure software GPU clusters run on. <Link to="/open-source" className={styles.proofLink}>See the contributions</Link></p>
                                </div>
                                <div className={styles.proofItem}>
                                    <h3>We work from the rack up</h3>
                                    <p>We have built and run GPU clusters end to end, from hardware to workload.</p>
                                </div>
                                <div className={styles.proofItem}>
                                    <h3>Founder-led</h3>
                                    <p>The engineer on your first call is the engineer who does the work.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={`${l.closing} ${styles.closing}`}>
                        <div className={`${l.container} ${l.closingInner}`}>
                            <h2 className={l.closingTitle}>Planning GPU compute at your energy sites?</h2>
                            <div className={styles.closingAction}>
                                <TalkButton className={l.closingButton} />
                                <span className={l.closingNote}>Tell us about the sites. In one call we will tell you what it would take.</span>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
