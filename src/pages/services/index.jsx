import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import { Navbar } from "@site/src/components/Layout"

const Arrow = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)
const Check = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>)
const IServer = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><line x1="7" y1="7.5" x2="7.01" y2="7.5" /><line x1="7" y1="16.5" x2="7.01" y2="16.5" /></svg>)
const IGauge = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14l4-4M4 20a8 8 0 1 1 16 0" /></svg>)
const INetwork = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /><path d="M12 8v4M12 12H5v4M12 12h7v4" /></svg>)
const ILayers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" /></svg>)
const IActivity = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>)
const IBolt = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>)

const CARDS = [
    {
        icon: <IServer />, title: "GPU Cluster Architecture", to: "/services/ai-factory", cta: "How we deliver a cluster",
        body: "Building a new GPU cluster? We bring up the full software stack on installed hardware, on-prem, colo, or dedicated cloud, so the first training job runs on a cluster that is already production-grade.",
        checks: [
            "BMC discovery, automated OS provisioning, driver and firmware baselines",
            "RoCE or InfiniBand fabric configuration with verified GPUDirect RDMA",
            "Kubernetes with GPU Operator and KAI Scheduler, or Slurm",
            "Storage integration, monitoring, runbooks and handover",
        ],
    },
    {
        icon: <IGauge />, title: "Distributed Training Optimization", to: "/services/distributed-training", cta: "Learn more",
        body: "Multi-node training running slow? We diagnose and fix network bottlenecks, tune NCCL, configure RDMA, and optimize collective communication, measured with nccl-tests before and after.",
        checks: [
            "NCCL tuning, RDMA/RoCE configuration, InfiniBand optimization",
            "Topology-aware placement: NVLink, PCIe, NIC-to-GPU affinity",
            "PyTorch DDP / FSDP, DeepSpeed, Megatron communication patterns",
            "Checkpoint and data-loading path review",
        ],
    },
    {
        icon: <INetwork />, title: "GPU Networking & RDMA", to: "/services/gpu-networking", cta: "Learn more",
        body: "Network killing your training throughput? We configure and verify RDMA fabrics (InfiniBand, RoCE, GPUDirect) so they run at wire rate, with the switch-side settings to match.",
        checks: [
            "PFC/ECN, DCB, MTU and GID index configuration for RoCE",
            "Secondary networks in Kubernetes: Multus, SR-IOV, host-device, IPoIB",
            "NVIDIA Network Operator, DOCA/MOFED drivers",
            "Fabric validation with ib_write_bw, nccl-tests and NCCL debug traces",
        ],
    },
    {
        icon: <ILayers />, title: "GPU Sharing & Multi-tenancy", to: "/services/gpu-kubernetes", cta: "Learn more",
        body: "GPUs sitting idle while teams wait? We implement proper sharing with isolation (MIG, time-slicing, quotas, queue-based scheduling) so installed GPUs get used and teams stop queueing behind each other.",
        checks: [
            "KAI Scheduler queues, quotas, gang scheduling and preemption",
            "MIG profiles, time-slicing and fractional GPU requests",
            "Namespaces, guardrails and self-service JupyterLab environments",
            "Usage metering for chargeback or showback",
        ],
    },
    {
        icon: <IActivity />, title: "GPU Observability & Reliability", to: "/services/gpu-monitoring", cta: "Learn more",
        body: "Jobs failing at 2am with no visibility? We build monitoring that catches GPU failures before jobs crash, and systems that recover automatically, plus the runbooks your team needs to operate it.",
        checks: [
            "DCGM exporter, Prometheus and Grafana dashboards for GPU health",
            "XID error detection, node cordoning and automated recovery",
            "Alerting tied to job impact, not just node metrics",
            "Capacity planning and Day-2 runbooks",
        ],
    },
    {
        icon: <IBolt />, title: "LLM Inference Optimization", id: "inference", href: "https://cal.com/baazhq", cta: "Talk to us about inference",
        body: "Serving models on your own GPUs? We select and tune the serving stack for your latency and cost targets, and make the platform underneath it boring.",
        checks: [
            "Serving stack selection: vLLM, TensorRT-LLM, SGLang, llm-d, Triton",
            "Batching, KV-cache and quantization tuning against latency SLOs",
            "Multi-model routing, autoscaling and GPU packing on Kubernetes",
            "Cost-per-token analysis and capacity sizing",
        ],
    },
]

const FORMATS = [
    { eyebrow: "01 · Audit", title: "GPU Cluster Audit", to: "/audit", cta: "About the audit", body: "A fixed-scope, two-week engagement on an existing cluster. We find the real bottlenecks, ship the safe fixes during the audit, and hand over a prioritized plan." },
    { eyebrow: "02 · Project", title: "Build or fix", href: "https://cal.com/baazhq", cta: "Scope a project", body: "Hands-on delivery with a defined outcome: a new cluster brought up, a fabric made to run at wire rate, a scheduler and sharing model put in place. Documented and handed over." },
    { eyebrow: "03 · Day-2", title: "Ongoing operations", href: "https://cal.com/baazhq", cta: "Discuss Day-2 support", body: "Retained engineering for teams that want the cluster kept healthy: upgrades, fault recovery, capacity planning, without hiring a full platform team." },
]

const STEPS = [
    ["01", "Assess", "We look at your actual metrics, configs, and problems. No assumptions."],
    ["02", "Diagnose", "We find the real bottlenecks. Often it's the network, not the GPUs."],
    ["03", "Implement", "We write code, change configs, tune systems. You see results, not decks."],
    ["04", "Transfer", "We document everything so your team can operate it independently."],
]

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BaaZ GPU Infrastructure Consulting",
    "url": "https://baaz.dev/services",
    "provider": { "@type": "Organization", "name": "BaaZ", "url": "https://baaz.dev" },
    "serviceType": "GPU Infrastructure Consulting",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GPU Infrastructure Services",
        "itemListElement": CARDS.map((c) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": c.title, "description": c.body },
        })),
    },
}

function Card({ c }) {
    const inner = (
        <>
            <span className="icon">{c.icon}</span>
            <h2 className="h3">{c.title}</h2>
            <p className="body">{c.body}</p>
            <ul className="checks">
                {c.checks.map((ck) => (<li key={ck}><Check /> {ck}</li>))}
            </ul>
            {c.to ? (
                <span className="link-arrow">{c.cta} <Arrow /></span>
            ) : (
                <a className="link-arrow" href={c.href} target="_blank" rel="noopener noreferrer">{c.cta} <Arrow /></a>
            )}
        </>
    )
    return c.to ? (
        <Link className="card feature" to={c.to}>{inner}</Link>
    ) : (
        <div className="card feature" id={c.id}>{inner}</div>
    )
}

export default function Services() {
    return (
        <Layout
            title="GPU Infrastructure Consulting Services"
            description="GPU infrastructure consulting services: distributed training optimization, RDMA networking, GPU cluster architecture, multi-tenancy, observability, and inference optimization."
        >
            <Head>
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            </Head>
            <Navbar />
            <div className="site">
                <main>
                    <section className="page-hero">
                        <div className="container stack-v gap-16">
                            <span className="eyebrow">Services</span>
                            <h1 className="h1">Build, optimize, and operate GPU infrastructure for AI.</h1>
                            <p className="lead">From full cluster bring-up (provisioning, network fabric, orchestration, scheduling) to training performance, inference platforms, and Day-2 operations. All of it on hardware you already own or rent.</p>
                            <div className="btn-row mt-8">
                                <a className="btn btn-primary" href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer">Schedule a call <Arrow /></a>
                                <Link className="btn btn-secondary" to="/audit">Start with a GPU Cluster Audit</Link>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="grid grid-2">
                                {CARDS.map((c) => (<Card c={c} key={c.title} />))}
                            </div>
                        </div>
                    </section>

                    <section className="section alt">
                        <div className="container">
                            <div className="section-head">
                                <span className="eyebrow">How engagements are structured</span>
                                <h2 className="h2">Start small. Scale the engagement to the problem.</h2>
                                <p className="lead">Every engagement is fixed-scope and delivered by senior engineers. Most start with an audit or a single deal and grow from there.</p>
                            </div>
                            <div className="grid grid-3">
                                {FORMATS.map((f) => (
                                    <div className="card" key={f.title}>
                                        <span className="eyebrow plain">{f.eyebrow}</span>
                                        <h3 className="h4">{f.title}</h3>
                                        <p className="body">{f.body}</p>
                                        {f.to ? (
                                            <Link className="link-arrow" to={f.to}>{f.cta} <Arrow /></Link>
                                        ) : (
                                            <a className="link-arrow" href={f.href} target="_blank" rel="noopener noreferrer">{f.cta} <Arrow /></a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="section-head">
                                <span className="eyebrow">How we work</span>
                                <h2 className="h2">Assess, diagnose, implement, transfer.</h2>
                            </div>
                            <div className="steps">
                                {STEPS.map(([n, t, b]) => (
                                    <div className="step" key={n}><span className="num">{n}</span><h3 className="h4">{t}</h3><p className="body">{b}</p></div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="section alt tight">
                        <div className="container">
                            <div className="split">
                                <div className="stack-v gap-12">
                                    <span className="tag">Case study · RDMA · Kubernetes</span>
                                    <h2 className="h3">GPUDirect RDMA over RoCE on bare-metal Kubernetes</h2>
                                    <p className="body">What we found in a multi-node training setup running over TCP/IP, what we changed in the fabric, the CNI and NCCL, and how we verified the RDMA path across the fabric.</p>
                                </div>
                                <div className="row" style={{ justifyContent: "flex-end" }}>
                                    <Link className="btn btn-secondary" to="/case-studies/rdma-kubernetes">Read the write-up <Arrow /></Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cta-band">
                        <div className="container">
                            <div className="inner">
                                <span className="eyebrow plain">Let's talk</span>
                                <h2 className="h2">Not sure which service fits?</h2>
                                <p className="lead">Describe the cluster and the problem. We'll tell you on the call whether it's an audit, a project, or not us.</p>
                                <div className="btn-row">
                                    <a className="btn btn-primary btn-lg" href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer">Schedule a call <Arrow /></a>
                                    <Link className="btn btn-secondary btn-lg" to="/audit">GPU Cluster Audit</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
