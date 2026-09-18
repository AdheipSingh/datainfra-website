import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import { Navbar } from "@site/src/components/Layout"

// ---- inline icons (design uses [[icon:x]] placeholders) ----
const Arrow = () => (<svg className="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)
const Check = () => (<svg className="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>)
const Ext = () => (<svg className="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>)
const IServer = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><line x1="7" y1="7.5" x2="7.01" y2="7.5" /><line x1="7" y1="16.5" x2="7.01" y2="16.5" /></svg>)
const IGauge = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14l4-4M4 20a8 8 0 1 1 16 0" /></svg>)
const INetwork = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /><path d="M12 8v4M12 12H5v4M12 12h7v4" /></svg>)
const ILayers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" /></svg>)
const IActivity = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>)
const IBolt = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>)

const SERVICES = [
    { icon: <IServer />, title: "GPU Cluster Architecture", to: "/services/ai-factory", body: "Building a new GPU cluster? Full bring-up on installed hardware — provisioning, fabric, storage integration, orchestration, monitoring." },
    { icon: <IGauge />, title: "Distributed Training Optimization", to: "/services/distributed-training", body: "Multi-node training running slow? We diagnose and fix network bottlenecks, tune NCCL, configure RDMA, and optimize collective communication." },
    { icon: <INetwork />, title: "GPU Networking & RDMA", to: "/services/gpu-networking", body: "Network killing your training throughput? RDMA fabrics — InfiniBand, RoCE, GPUDirect — configured and verified at wire rate." },
    { icon: <ILayers />, title: "GPU Sharing & Multi-tenancy", to: "/services/gpu-kubernetes", body: "GPUs sitting idle while teams wait? Proper sharing with isolation — MIG, time-slicing, quotas, KAI Scheduler — so installed GPUs get used." },
    { icon: <IActivity />, title: "GPU Observability & Reliability", to: "/services/gpu-monitoring", body: "Jobs failing at 2am with no visibility? Monitoring that catches GPU failures before jobs crash, and systems that recover automatically." },
    { icon: <IBolt />, title: "LLM Inference Optimization", to: "/services", body: "Serving stack selection, batching and KV-cache tuning, latency SLO engineering, cost-per-token analysis — on your own GPUs." },
]

const LAYER_CELLS = [
    { n: "01", t: "Bring-up & OS", d: "BMC discovery, provisioning, drivers, firmware baselines" },
    { n: "02", t: "Network fabric", d: "RoCE / InfiniBand, GPUDirect RDMA, switch config" },
    { n: "03", t: "Orchestration", d: "Kubernetes with GPU Operator, or Slurm" },
    { n: "04", t: "Scheduling & sharing", d: "KAI Scheduler, MIG, quotas, multi-tenancy" },
    { n: "05", t: "Observability", d: "DCGM, XID detection, dashboards, alerting" },
    { n: "06", t: "Day-2 operations", d: "Upgrades, fault recovery, capacity, runbooks" },
]

const COMMITS = [
    { repo: "KAI Scheduler", org: "NVIDIA", n: "#857", msg: "feat(queue-controller): add queue validator", status: "merged", when: "Mar 2026", url: "https://github.com/kai-scheduler/KAI-Scheduler/pull/857" },
    { repo: "KAI Scheduler", org: "NVIDIA", n: "#1382", msg: "feat: reservation security context", status: "merged", when: "Apr 2026", url: "https://github.com/kai-scheduler/KAI-Scheduler/pull/1382" },
    { repo: "Network Operator", org: "NVIDIA", n: "#2035", msg: "feat: RDMA, SR-IOV, Multus auto-restart pods on config changes", status: "merged", when: "Jan 2026", url: "https://github.com/Mellanox/network-operator/pull/2035" },
    { repo: "Network Operator", org: "NVIDIA", n: "#2070", msg: "feat: add global config support for NicClusterPolicy", status: "merged", when: "Mar 2026", url: "https://github.com/Mellanox/network-operator/pull/2070" },
    { repo: "Network Operator", org: "NVIDIA", n: "#3147", msg: "feat: add MTU support to IPoIBNetwork CRD", status: "open", when: "—", url: "https://github.com/Mellanox/network-operator/pull/3147" },
    { repo: "DOCA Driver Build", org: "NVIDIA", n: "#299", msg: "feat: install NFS userspace tools on host when ENABLE_NFSRDMA is enabled", status: "merged", when: "Sep 2026", url: "https://github.com/Mellanox/doca-driver-build/pull/299" },
    { repo: "ipoib-cni", org: "NVIDIA / Mellanox", n: "#132", msg: "feat: add MTU support", status: "merged", when: "Jun 2026", url: "https://github.com/Mellanox/ipoib-cni/pull/132" },
]

const CREDS = [
    { badge: "NV", t: "NVIDIA-Certified Associate", d: "AI Infrastructure and Operations · Gurjot Kaur", url: "https://www.credly.com/go/ldtOTwWSKUCz73PViG0wyQ" },
    { badge: "NV", t: "NVIDIA-Certified Associate", d: "AI Infrastructure and Operations · Adheip Singh", url: "https://www.credly.com/users/adheip-singh-sadhrao.3ab58b44/badges/credly" },
    { badge: "AMD", t: "AMD ROCm Certified Associate", d: "ROCm software platform for GPU compute · Adheip Singh", url: "https://www.credly.com/badges/19a43ca9-958a-4cab-9c71-e0680d71d39a/public_url" },
    { badge: "ASF", t: "Apache Software Foundation", d: "Foundation member", url: "https://people.apache.org/phonebook.html?uid=adheipsingh" },
]

const PROBLEMS = [
    ["01", "Our GPUs sit idle while teams wait for access", "GPU sharing with proper isolation — MIG, time-slicing, quotas, queue-based scheduling"],
    ["02", "Training is slow on multiple nodes", "Network fabric tuning, NCCL optimization, topology and RDMA path fixes"],
    ["03", "We don't know what's happening in our cluster", "Monitoring, alerting, and visibility into GPU health with DCGM, Prometheus and Grafana"],
    ["04", "Jobs fail randomly and we can't debug them", "Logging, XID error detection, fault tolerance, and automated recovery"],
    ["05", "ML teams wait days for infrastructure tickets", "Self-service platforms with guardrails — namespaces, quotas, JupyterLab, golden images"],
    ["06", "We're building a GPU cloud and don't know where to start", "Platform-layer architecture and implementation — scheduling, isolation, monitoring, metering"],
]

const STEPS = [
    ["01", "Assess", "We look at your actual metrics, configs, and problems. No assumptions."],
    ["02", "Diagnose", "We find the real bottlenecks — often it's the network, not the GPUs."],
    ["03", "Implement", "We write code, change configs, tune systems. You see results, not slide decks."],
    ["04", "Transfer", "We document everything so your team can operate it independently."],
]

const PERSONAS = [
    { eyebrow: "Teams that own GPUs", q: "We bought the hardware. Now it has to earn its keep.", body: "Startups, enterprises and GCCs with GPU servers on-prem, in a colo, or in a dedicated cloud — building something new or getting more from what's installed.", link: "/services", label: "Services" },
    { eyebrow: "Channel partners", q: "Our customer needs the software stack on the boxes we sold.", body: "Hardware resellers, system integrators, GPU cloud and colo providers who need delivery capacity for the layer between the metal and the workloads.", link: "/partners", label: "Working with partners" },
    { eyebrow: "In-house inference teams", q: "We serve models on our own GPUs and the numbers don't add up.", body: "Teams running LLM inference on their own hardware who need the right serving stack, batching, latency SLOs and a sane cost per token.", link: "/services", label: "Inference optimization" },
]

const POSTS = [
    { tag: "AI networking", title: "ECMP Hash Collisions in a Fat-Tree: Too Few Flows, Not Too Many", date: "Sep 16, 2026", read: "10 min", url: "/blog/ecmp-hash-collisions-fat-tree-ai-clusters" },
    { tag: "Kubernetes", title: "Understanding Secondary Networks for GPU Workloads in Kubernetes", date: "Apr 13, 2026", read: "14 min", url: "/blog/secondary-networks-gpu-kubernetes" },
    { tag: "GPU infrastructure", title: "How to Calculate if Your Network is Bottlenecking Distributed Training", date: "Guide", read: "10 min", url: "/blog/network-bottleneck-distributed-training" },
]

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "How do you fix idle GPUs while teams wait for access?", "acceptedAnswer": { "@type": "Answer", "text": "We implement MIG partitioning, time-slicing, Kubernetes GPU operators, and quota management to enable safe GPU sharing across teams and significantly increase GPU utilization." } },
        { "@type": "Question", "name": "How do you speed up slow distributed training across multiple nodes?", "acceptedAnswer": { "@type": "Answer", "text": "We diagnose and fix network bottlenecks through NCCL optimization, RDMA configuration, and InfiniBand/RoCE tuning to substantially speed up distributed training." } },
        { "@type": "Question", "name": "How do you improve GPU cluster observability?", "acceptedAnswer": { "@type": "Answer", "text": "We set up comprehensive monitoring, alerting, and visibility into GPU health using DCGM metrics, Prometheus, and Grafana dashboards so you know exactly what is happening in your cluster." } },
        { "@type": "Question", "name": "How do you handle randomly failing GPU jobs?", "acceptedAnswer": { "@type": "Answer", "text": "We implement proper logging, fault tolerance, and automated recovery systems that catch GPU failures before jobs crash and automatically recover from common failure modes." } },
        { "@type": "Question", "name": "How do you reduce ML team wait times for infrastructure?", "acceptedAnswer": { "@type": "Answer", "text": "We build self-service platforms with guardrails that let ML teams provision GPU environments themselves, eliminating infrastructure ticket bottlenecks." } },
        { "@type": "Question", "name": "Can you help us build a GPU cloud from scratch?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide platform-layer architecture and implementation for GPU cloud platforms, including multi-tenant scheduling, isolation, monitoring, billing integration, and usage metering." } }
    ]
}

export default function Home() {
    return (
        <Layout
            title="GPU Infrastructure Consulting for AI"
            description="BaaZ makes installed GPU hardware work as an AI platform: provisioning, RDMA/RoCE networking, Kubernetes and Slurm, GPU scheduling, inference. The software layer, not the data centre. On-prem, colo, or dedicated cloud."
        >
            <Head>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Head>
            <Navbar />
            <div className="site">
                <main>
                    {/* HERO */}
                    <section className="hero">
                        <div className="container">
                            <div className="split">
                                <div className="hero-copy">
                                    <span className="eyebrow">GPU infrastructure · software layer</span>
                                    <h1 className="display">The software layer between your GPUs and your AI workloads.</h1>
                                    <p className="lead">You have the hardware — in your own data centre, a colo, or a dedicated cloud. We bring it up, configure the network fabric, put Kubernetes or Slurm on it, and keep it running. Hands-on engineers, upstream contributors to the NVIDIA stack.</p>
                                    <div className="btn-row">
                                        <a className="btn btn-primary btn-lg" href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer">Talk to us <Arrow /></a>
                                        <Link className="btn btn-secondary btn-lg" to="/audit">Book a GPU Cluster Audit</Link>
                                    </div>
                                    <div className="proof-line">
                                        <span className="faint">Merged upstream:</span>
                                        <span><Check /> NVIDIA KAI Scheduler</span>
                                        <span><Check /> NVIDIA Network Operator</span>
                                        <span><Check /> Mellanox ipoib-cni</span>
                                    </div>
                                </div>
                                <div className="terminal" aria-label="Illustrative terminal: verifying that NCCL is using RDMA">
                                    <div className="terminal-bar"><div className="dots"><i /><i /><i /></div><span className="title">node-01 — rdma-path-check</span></div>
                                    <pre className="terminal-body"><span className="cmd">ibdev2netdev</span>{"\n"}mlx5_0 port 1 ==&gt; ens1f0np0 <span className="ok">(Up)</span>{"\n"}mlx5_1 port 1 ==&gt; ens1f1np1 <span className="ok">(Up)</span>{"\n\n"}<span className="cmd">NCCL_DEBUG=INFO ./all_reduce_perf -b 8 -e 4G -f 2 -g 8</span>{"\n"}<span className="k">NCCL INFO</span> NET/IB : Using [0]mlx5_0:1/RoCE [1]mlx5_1:1/RoCE{"\n"}<span className="k">NCCL INFO</span> GPU Direct RDMA Enabled for HCA 0 'mlx5_0'{"\n"}<span className="k">NCCL INFO</span> Channel 00 : 0[0] -&gt; 1[1] via NET/IB/0/GDRDMA{"\n"}<span className="k">NCCL INFO</span> Channel 01 : 0[0] -&gt; 1[1] via NET/IB/1/GDRDMA{"\n"}<span className="dimline">…</span>{"\n"}<span className="c"># rdma path verified — no NET/Socket fallback</span>{"\n"}<span className="ok">ok</span>  <span className="c">GPUDirect RDMA in the data path on both HCAs</span></pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* WHERE WE WORK */}
                    <section className="section alt">
                        <div className="container">
                            <div className="section-head">
                                <span className="eyebrow">Where we work</span>
                                <h2 className="h2">Everything between installed hardware and a running job.</h2>
                                <p className="lead">We start where the hardware is installed. We take what's there and make it run — and keep it running.</p>
                            </div>
                            <div className="stack" role="img" aria-label="Three layers: your AI workloads on top, the BaaZ software layer in the middle, your installed hardware at the bottom">
                                <div className="layer">
                                    <div className="who">Your workloads</div>
                                    <div className="what">Training runs, inference services, notebooks and internal platforms — owned by your ML and product teams.</div>
                                </div>
                                <div className="layer baaz">
                                    <div className="who">BaaZ works here</div>
                                    <div className="layer-cells">
                                        {LAYER_CELLS.map((c) => (
                                            <div className="cell" key={c.n}><span className="n">{c.n}</span><span className="t">{c.t}</span><span className="d">{c.d}</span></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="layer">
                                    <div className="who">Your hardware</div>
                                    <div className="what">GPU servers, switches, storage, power and cooling — supplied and installed by you, your OEM, or your data-centre partner.</div>
                                </div>
                            </div>
                            <div className="stack-caption">
                                <span>On-prem, colo, or dedicated cloud. NVIDIA and AMD GPUs.</span>
                                <Link className="link-arrow" to="/services">See all services <Arrow /></Link>
                            </div>
                        </div>
                    </section>

                    {/* TWO DOORS */}
                    <section className="section">
                        <div className="container">
                            <div className="doors">
                                <div className="card door">
                                    <span className="eyebrow">New cluster</span>
                                    <h3 className="h3">New GPU hardware arriving?</h3>
                                    <p className="body">From racked servers to first training job: BMC discovery, automated OS provisioning, RoCE/RDMA fabric, Kubernetes or Slurm, verified GPUDirect. Done once, done right, handed over with runbooks.</p>
                                    <div className="btn-row">
                                        <Link className="btn btn-secondary" to="/services/ai-factory">How we bring a cluster to life <Arrow /></Link>
                                    </div>
                                </div>
                                <div className="card door">
                                    <span className="eyebrow">Existing cluster</span>
                                    <h3 className="h3">GPUs underperforming?</h3>
                                    <p className="body">Low utilization, slow multi-node training, jobs failing overnight — usually the network, the scheduler, or a config nobody checked. A fixed-scope, two-week audit finds the real bottlenecks and ships the safe fixes.</p>
                                    <div className="btn-row">
                                        <Link className="btn btn-primary" to="/audit">Book a GPU Cluster Audit <Arrow /></Link>
                                    </div>
                                    <Link className="link-arrow" to="/audit" style={{ fontSize: "14px" }}>Or get the free NCCL fallback test + pre-flight checklist <Arrow /></Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SERVICES */}
                    <section className="section alt">
                        <div className="container">
                            <div className="section-head">
                                <span className="eyebrow">Services</span>
                                <h2 className="h2">Build, optimize, and operate GPU infrastructure for AI.</h2>
                                <p className="lead">Six ways we engage. Every one is delivered by the engineers you talk to on the first call.</p>
                            </div>
                            <div className="grid grid-3">
                                {SERVICES.map((s) => (
                                    <Link className="card" to={s.to} key={s.title}>
                                        <span className="icon">{s.icon}</span>
                                        <h3 className="h4">{s.title}</h3>
                                        <p className="body">{s.body}</p>
                                        <span className="link-arrow">Learn more <Arrow /></span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* PROOF */}
                    <section className="section">
                        <div className="container">
                            <div className="section-head">
                                <span className="eyebrow">Open source &amp; credentials</span>
                                <h2 className="h2">We build the stack we run.</h2>
                                <p className="lead">Our engineers contribute upstream to NVIDIA's GPU and networking projects. Every line below links to the real pull request.</p>
                            </div>
                            <div className="proof-grid">
                                <div className="commit-log">
                                    <div className="head"><span>Project</span><span>Pull request</span><span>Status</span><span>Date</span></div>
                                    {COMMITS.map((c) => (
                                        <a className="commit" href={c.url} target="_blank" rel="noopener noreferrer" key={c.n + c.repo}>
                                            <span className="repo">{c.repo}<small>{c.org}</small></span>
                                            <span className="msg"><b>{c.n}</b>{c.msg}</span>
                                            <span className={`pill ${c.status === "merged" ? "ok" : "open"}`}><i />{c.status}</span>
                                            <span className="when">{c.when}</span>
                                        </a>
                                    ))}
                                </div>
                                <div className="cred-list">
                                    {CREDS.map((c) => (
                                        <a className="cred" href={c.url} target="_blank" rel="noopener noreferrer" key={c.t + c.d}>
                                            <span className="badge">{c.badge}</span>
                                            <span><div className="t">{c.t}</div><div className="d">{c.d}</div></span>
                                            <span className="ext"><Ext /></span>
                                        </a>
                                    ))}
                                    <a className="link-arrow" href="https://github.com/baazhq" target="_blank" rel="noopener noreferrer">All contributions on GitHub <Arrow /></a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* YOU SAY / WE DO */}
                    <section className="section alt">
                        <div className="container">
                            <div className="section-head">
                                <span className="eyebrow">Common problems</span>
                                <h2 className="h2">Most GPU infrastructure is underutilized, overcomplicated, or both.</h2>
                                <p className="lead">GPU problems are often not GPU problems. It's the network, the storage, the scheduler, or the config nobody touched since the cluster went live.</p>
                            </div>
                            <table className="table">
                                <thead><tr><th></th><th>You say</th><th>We do</th></tr></thead>
                                <tbody>
                                    {PROBLEMS.map(([idx, say, doit]) => (
                                        <tr key={idx}><td className="idx">{idx}</td><td className="say">{say}</td><td className="do">{doit}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* PROCESS */}
                    <section className="section">
                        <div className="container">
                            <div className="section-head">
                                <span className="eyebrow">How we work</span>
                                <h2 className="h2">Hands-on engineers. Results, not decks.</h2>
                                <p className="lead">We're not a big consultancy that sends you a deck and disappears. We've built this infrastructure ourselves — at startups, in production, under pressure.</p>
                            </div>
                            <div className="steps">
                                {STEPS.map(([num, title, body]) => (
                                    <div className="step" key={num}><span className="num">{num}</span><h3 className="h4">{title}</h3><p className="body">{body}</p></div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* WHO WE HELP */}
                    <section className="section alt">
                        <div className="container">
                            <div className="section-head">
                                <span className="eyebrow">Who we help</span>
                                <h2 className="h2">Three kinds of teams call us.</h2>
                            </div>
                            <div className="grid grid-3">
                                {PERSONAS.map((p) => (
                                    <div className="card persona" key={p.eyebrow}>
                                        <span className="eyebrow plain">{p.eyebrow}</span>
                                        <p className="q">{p.q}</p>
                                        <p className="body">{p.body}</p>
                                        <Link className="link-arrow" to={p.link}>{p.label} <Arrow /></Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* RESOURCES */}
                    <section className="section">
                        <div className="container">
                            <div className="section-head">
                                <span className="eyebrow">Field notes</span>
                                <h2 className="h2">Engineering write-ups, not marketing.</h2>
                            </div>
                            <div className="resources">
                                <Link className="card feature" to="/case-studies/rdma-kubernetes">
                                    <span className="tag">Case study · RDMA · Kubernetes</span>
                                    <h3 className="h3">GPUDirect RDMA over RoCE on bare-metal Kubernetes</h3>
                                    <p className="body">A computer-vision team's multi-node training was bottlenecked on the TCP/IP data path. We added a dedicated RoCE fabric with PFC/ECN, exposed the RDMA NICs to pods with Multus, configured NCCL for GPUDirect RDMA — and verified the path across the fabric. No vanity numbers; the engineering.</p>
                                    <span className="link-arrow">Read the write-up <Arrow /></span>
                                </Link>
                                <div className="post-list">
                                    {POSTS.map((p) => (
                                        <Link className="post-row" to={p.url} key={p.url}>
                                            <span><span className="tag">{p.tag}</span><div className="h4">{p.title}</div><div className="meta"><span>{p.date}</span><span>{p.read}</span></div></span>
                                            <Arrow />
                                        </Link>
                                    ))}
                                    <Link className="link-arrow mt-24" to="/blog">All posts <Arrow /></Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="cta-band">
                        <div className="container">
                            <div className="inner">
                                <span className="eyebrow plain">Let's talk</span>
                                <h2 className="h2">Tell us about your cluster.</h2>
                                <p className="lead">No sales pitch. A conversation about what you're trying to do and whether we can help — with the engineer who would do the work.</p>
                                <div className="btn-row">
                                    <a className="btn btn-primary btn-lg" href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer">Schedule a call <Arrow /></a>
                                    <Link className="btn btn-secondary btn-lg" to="/audit">Start with an audit</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
