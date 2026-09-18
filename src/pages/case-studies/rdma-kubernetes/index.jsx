import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import { Navbar } from "@site/src/components/Layout"
import ArticleEndBlock from "@site/src/components/ArticleEndBlock"
import styles from "./styles.module.css"

const componentStack = [
    { component: "Calico", purpose: "Primary CNI for pod networking" },
    { component: "Multus CNI", purpose: "Meta-CNI for multiple network interfaces" },
    { component: "NVIDIA Network Operator", purpose: "RDMA drivers, device plugin, secondary networks" },
    { component: "whereabouts", purpose: "IPAM for secondary network" },
    { component: "NVIDIA GPU Operator", purpose: "GPU drivers, device plugin" },
    { component: "KAI Scheduler", purpose: "Gang scheduling for distributed jobs" },
]

// Structured data for SEO
const structuredData = {
    techArticle: {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "GPUDirect RDMA over RoCE on a 2-node bare-metal Kubernetes cluster — BaaZ engineering write-up",
        "alternativeHeadline": "Building RDMA-Enabled Kubernetes for Distributed GPU Training",
        "description": "How we moved a 2-node, 4-GPU training cluster from 1GbE TCP to 100GbE RoCE with GPUDirect RDMA: NIC and switch selection, Multus dual-network pods, NVIDIA Network Operator, and NCCL GID configuration.",
        "image": "https://baaz.dev/img/diagram-01-tcp-vs-rdma-datapath.svg",
        "author": {
            "@type": "Organization",
            "name": "BaaZ",
            "url": "https://baaz.dev"
        },
        "publisher": {
            "@type": "Organization",
            "name": "BaaZ",
            "logo": {
                "@type": "ImageObject",
                "url": "https://baaz.dev/img/logo-vector.png"
            }
        },
        "datePublished": "2025-01-25",
        "dateModified": "2025-01-25",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://baaz.dev/case-studies/rdma-kubernetes"
        },
        "keywords": [
            "RDMA",
            "GPUDirect",
            "Kubernetes",
            "distributed training",
            "RoCE",
            "NCCL",
            "GPU infrastructure",
            "bare metal",
            "ConnectX-6",
            "Multus CNI",
            "NVIDIA Network Operator"
        ],
        "about": [
            {
                "@type": "Thing",
                "name": "RDMA (Remote Direct Memory Access)"
            },
            {
                "@type": "Thing",
                "name": "Kubernetes"
            },
            {
                "@type": "Thing",
                "name": "Distributed GPU Training"
            }
        ],
        "proficiencyLevel": "Expert",
        "dependencies": "NVIDIA ConnectX-6 Dx, NVIDIA Network Operator, Multus CNI, Kubeflow Training Operator"
    },
    breadcrumb: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://baaz.dev"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Case Studies",
                "item": "https://baaz.dev/case-studies"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "RDMA on Bare Metal Kubernetes",
                "item": "https://baaz.dev/case-studies/rdma-kubernetes"
            }
        ]
    },
    faqPage: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "When should I use RDMA for distributed GPU training?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "RDMA is appropriate when you're running multi-node distributed training (DDP, FSDP, DeepSpeed), gradient payloads exceed 100MB, GPU utilization during training is under 60%, and you control the hardware (on-prem, colo, bare metal cloud)."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between RoCE and InfiniBand for GPU training?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "InfiniBand offers 200-400 Gb/s bandwidth with ~0.5-1μs latency but costs $15-40K for switches and requires specialized expertise. RoCE v2 provides 100 Gb/s with ~1-2μs latency at 30% of the cost, using familiar Ethernet infrastructure. For small deployments (2-4 nodes), RoCE offers 95% of InfiniBand's performance."
                }
            },
            {
                "@type": "Question",
                "name": "How does GPUDirect RDMA improve distributed training performance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GPUDirect RDMA enables zero-copy transfers directly between GPU memory and the network, bypassing the CPU and system RAM entirely. It moves gradient-sync traffic off the CPU onto the RDMA path so the GPUs stop waiting on the network during AllReduce."
                }
            }
        ]
    }
}

export default function CaseStudies() {
    return (
        <Layout
            title="GPUDirect RDMA over RoCE on a 2-node bare-metal Kubernetes cluster — BaaZ engineering write-up"
            description="How we moved a 2-node, 4-GPU training cluster from 1GbE TCP to 100GbE RoCE with GPUDirect RDMA: NIC and switch selection, Multus dual-network pods, NVIDIA Network Operator, and NCCL GID configuration."
        >
            <Head>
                {/* Enhanced meta tags for this specific page */}
                <meta property="og:title" content="GPUDirect RDMA over RoCE on a 2-node bare-metal Kubernetes cluster — BaaZ engineering write-up" />
                <meta property="og:description" content="How we moved a 2-node, 4-GPU training cluster from 1GbE TCP to 100GbE RoCE with GPUDirect RDMA: NIC and switch selection, Multus dual-network pods, NVIDIA Network Operator, and NCCL GID configuration." />
                <meta property="og:url" content="https://baaz.dev/case-studies/rdma-kubernetes" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://baaz.dev/img/diagram-01-tcp-vs-rdma-datapath.svg" />
                <meta property="article:published_time" content="2025-01-25" />
                <meta property="article:author" content="BaaZ" />
                <meta property="article:section" content="Case Studies" />
                <meta property="article:tag" content="RDMA" />
                <meta property="article:tag" content="Kubernetes" />
                <meta property="article:tag" content="GPU Infrastructure" />
                <meta property="article:tag" content="Distributed Training" />

                {/* Twitter Card meta tags */}
                <meta name="twitter:title" content="GPUDirect RDMA over RoCE on a 2-node bare-metal Kubernetes cluster — BaaZ engineering write-up" />
                <meta name="twitter:description" content="How we moved a 2-node, 4-GPU training cluster from 1GbE TCP to 100GbE RoCE with GPUDirect RDMA: NIC and switch selection, Multus dual-network pods, NVIDIA Network Operator, and NCCL GID configuration." />
                <meta name="twitter:image" content="https://baaz.dev/img/diagram-01-tcp-vs-rdma-datapath.svg" />

                {/* Additional SEO meta tags */}
                <meta name="keywords" content="RDMA case study, GPUDirect RDMA, RoCE Kubernetes, distributed GPU training, NCCL optimization, ConnectX-6, Multus CNI, bare metal Kubernetes, GPU infrastructure consulting, AllReduce optimization" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData.techArticle)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(structuredData.breadcrumb)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(structuredData.faqPage)}
                </script>
            </Head>
            <Navbar />
            <main className={styles.main}>
                <article itemScope itemType="https://schema.org/TechArticle">
                    {/* Hidden metadata for schema */}
                    <meta itemProp="author" content="BaaZ" />
                    <meta itemProp="datePublished" content="2025-01-25" />

                    {/* Breadcrumb navigation */}
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <ol className={styles.breadcrumbList}>
                            <li className={styles.breadcrumbItem}>
                                <a href="/">Home</a>
                            </li>
                            <li className={styles.breadcrumbItem}>
                                <a href="/case-studies">Case Studies</a>
                            </li>
                            <li className={styles.breadcrumbItem}>
                                <span aria-current="page">RDMA on Kubernetes</span>
                            </li>
                        </ol>
                    </nav>

                    {/* Hero Section */}
                    <header className={styles.heroSection}>
                        <div className={styles.heroContent}>
                            <span className={styles.heroLabel}>Engineering write-up</span>
                            <h1 className={styles.heroTitle} itemProp="headline">
                                GPUDirect RDMA over RoCE on a 2-node bare-metal Kubernetes cluster
                            </h1>
                            <p className={styles.heroSubtitle} itemProp="alternativeHeadline">
                                What we changed, and why it mattered
                            </p>
                            <p className={styles.heroDesc} itemProp="description">
                                A computer-vision team's 2-node training cluster was running gradient sync over 1GbE TCP. We specified RDMA-capable NICs and a DCB switch, then did the Kubernetes and NCCL configuration that makes RDMA actually get used.
                            </p>
                        </div>
                    </header>

                    {/* Environment */}
                    <section className={styles.section} aria-label="Environment">
                        <div className={styles.sectionContent}>
                            <p className={styles.environmentLine}>
                                Environment: 2-node bare-metal Kubernetes, 4 GPUs (RTX
                                A5000/A5500), 100GbE RoCE.
                            </p>
                        </div>
                    </section>

                    {/* Executive Summary */}
                    <section className={styles.section} aria-labelledby="executive-summary">
                        <div className={styles.sectionContent}>
                            <h2 id="executive-summary" className={styles.sectionTitle}>Executive Summary</h2>
                            <div className={styles.summaryContent} itemProp="articleBody">
                                <p>
                                    A computer-vision team trains object-detection and segmentation models on-prem for data-residency reasons. Their cluster: two workstations, four GPUs, Kubernetes on bare metal. Multi-node training was running gradient synchronization over the workstations' integrated 1GbE NICs — TCP, CPU in the data path, no RDMA capability at all.
                                </p>
                                <p>
                                    The work had two halves. The hardware half: specify RDMA-capable 100GbE NICs and a DCB switch on a dedicated network (procurement and physical installation were the customer's). The software half — the part that usually goes wrong — make Kubernetes and NCCL actually use it: a second pod network via Multus, drivers and device plugin via NVIDIA Network Operator, PFC/ECN on the switch, and the NCCL GID index set so traffic doesn't silently fall back to TCP.
                                </p>
                                <p>
                                    In clusters that already own RDMA hardware, that silent fallback is the failure we find most often in audits.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* The Challenge */}
                    <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="the-challenge">
                        <div className={styles.sectionContent}>
                            <h2 id="the-challenge" className={styles.sectionTitle}>The Challenge</h2>

                            <h3 className={styles.subsectionTitle}>Client Context</h3>
                            <p className={styles.paragraph}>
                                The client, a computer-vision team, had built an on-premises ML platform to train object detection and image segmentation models. Privacy requirements and data residency regulations made cloud training impractical for their most sensitive workloads.
                            </p>

                            <div className={styles.infoBox}>
                                <h4 className={styles.infoBoxTitle}>Their Infrastructure</h4>
                                <ul className={styles.infoList}>
                                    <li>2 Dell Precision workstations: one with RTX A5000 (2 GPUs), one with RTX A5500 (2 GPUs)</li>
                                    <li>Bare metal Kubernetes cluster (Ubuntu 24.04, K8s 1.29)</li>
                                    <li>NVIDIA GPU Operator for device management</li>
                                    <li>Calico CNI for pod networking</li>
                                    <li>NFS for shared storage, local NVMe for scratch space</li>
                                </ul>
                            </div>

                            <h3 className={styles.subsectionTitle}>The Problem</h3>
                            <p className={styles.paragraph}>
                                Training jobs that used all 4 GPUs across both nodes were painfully slow. The GPUs spent much of each iteration idle, waiting on the network while gradients synchronized, with the CPU stuck in the data path for every byte transferred.
                            </p>

                            <h3 className={styles.subsectionTitle}>Root Cause Analysis</h3>
                            <p className={styles.paragraph}>We identified three compounding issues:</p>

                            <div className={styles.issuesList}>
                                <div className={styles.issueItem}>
                                    <span className={styles.issueNumber}>1</span>
                                    <div>
                                        <strong>No RDMA capability.</strong> The integrated NICs didn't support RDMA. Every gradient sync required: GPU memory → PCIe → System RAM → CPU (TCP/IP stack) → NIC → Wire → NIC → CPU → System RAM → PCIe → GPU memory. The CPU was in the critical path for every byte transferred.
                                    </div>
                                </div>
                                <div className={styles.issueItem}>
                                    <span className={styles.issueNumber}>2</span>
                                    <div>
                                        <strong>No GPUDirect.</strong> Without GPUDirect RDMA, NCCL fell back to the Socket transport. Each AllReduce operation involved multiple memory copies and CPU intervention, adding latency per operation.
                                    </div>
                                </div>
                                <div className={styles.issueItem}>
                                    <span className={styles.issueNumber}>3</span>
                                    <div>
                                        <strong>Inadequate bandwidth.</strong> Even ignoring latency, a 1GbE link cannot move gradient payloads of hundreds of megabytes fast enough for multi-node training to make sense.
                                    </div>
                                </div>
                            </div>

                            <figure className={styles.diagramContainer}>
                                <img
                                    src="/img/diagram-01-tcp-vs-rdma-datapath.svg"
                                    alt="Comparison diagram showing TCP/IP data path with multiple memory copies through CPU versus RDMA direct path bypassing CPU"
                                    className={styles.diagram}
                                    loading="lazy"
                                    width="1000"
                                    height="500"
                                />
                                <figcaption className={styles.diagramCaption}>TCP/IP Data Path vs RDMA Data Path</figcaption>
                            </figure>

                            <p className={styles.highlight}>
                                Two nodes with no RDMA path is a network problem, not a GPU problem. That meant RDMA.
                            </p>
                        </div>
                    </section>

                    {/* Solution Architecture */}
                    <section className={styles.section} aria-labelledby="solution-architecture">
                        <div className={styles.sectionContent}>
                            <h2 id="solution-architecture" className={styles.sectionTitle}>Solution Architecture</h2>

                            <h3 className={styles.subsectionTitle}>Technology Selection: RoCE vs InfiniBand</h3>
                            <p className={styles.paragraph}>For RDMA, there are two main options: InfiniBand and RoCE (RDMA over Converged Ethernet). We evaluated both:</p>

                            <div className={styles.tableWrapper}>
                                <table className={styles.dataTable}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Factor</th>
                                            <th scope="col">InfiniBand (HDR/NDR)</th>
                                            <th scope="col">RoCE v2 (100GbE)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Bandwidth</td>
                                            <td>200-400 Gb/s</td>
                                            <td>100 Gb/s</td>
                                        </tr>
                                        <tr>
                                            <td>Latency</td>
                                            <td>~0.5-1 μs</td>
                                            <td>~1-2 μs</td>
                                        </tr>
                                        <tr>
                                            <td>Switch cost</td>
                                            <td>$15-40K (IB switch)</td>
                                            <td>$3-8K (DCB Ethernet)</td>
                                        </tr>
                                        <tr>
                                            <td>NIC cost</td>
                                            <td>~$1,500-3,000</td>
                                            <td>~$500-1,000</td>
                                        </tr>
                                        <tr>
                                            <td>Expertise required</td>
                                            <td>Specialized</td>
                                            <td>Familiar to network teams</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className={styles.decisionBox}>
                                <h4>Decision: RoCE v2</h4>
                                <p>
                                    For a 2-4 node deployment, RoCE offers 95% of InfiniBand's performance at 30% of the cost. The slight latency penalty (1-2μs vs 0.5-1μs) is negligible for gradient payloads measured in hundreds of megabytes.
                                </p>
                            </div>

                            <h3 className={styles.subsectionTitle}>Hardware Specification</h3>
                            <div className={styles.tableWrapper}>
                                <table className={styles.dataTable}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Component</th>
                                            <th scope="col">Specification</th>
                                            <th scope="col">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>NIC</td>
                                            <td>NVIDIA ConnectX-6 Dx 100GbE (dual-port)</td>
                                            <td>RDMA-capable network interface</td>
                                        </tr>
                                        <tr>
                                            <td>Switch</td>
                                            <td>NVIDIA SN2201 or Dell S5248F-ON</td>
                                            <td>DCB-capable Ethernet with PFC/ECN</td>
                                        </tr>
                                        <tr>
                                            <td>Cabling</td>
                                            <td>DAC (Direct Attach Copper) or 100GbE QSFP28</td>
                                            <td>Node interconnect</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className={styles.subsectionTitle}>Network Topology Design</h3>
                            <p className={styles.paragraph}>
                                We designed a physically separated network architecture with two distinct planes:
                            </p>

                            <figure className={styles.diagramContainer}>
                                <img
                                    src="/img/diagram-02-physical-topology.svg"
                                    alt="Physical network topology showing separate management and RDMA networks connecting GPU servers"
                                    className={styles.diagram}
                                    loading="lazy"
                                    width="1000"
                                    height="600"
                                />
                                <figcaption className={styles.diagramCaption}>Physical Network Topology</figcaption>
                            </figure>

                            <div className={styles.twoColumnGrid}>
                                <div className={styles.networkCard}>
                                    <h4>Management Network (existing)</h4>
                                    <p>Integrated NICs connected to the existing management switch. Handles Kubernetes control plane, SSH access, monitoring, and NFS traffic. No changes required.</p>
                                </div>
                                <div className={styles.networkCard}>
                                    <h4>RDMA Network (new)</h4>
                                    <p>ConnectX-6 Dx NICs connected to a dedicated DCB switch. Handles only GPU-to-GPU NCCL traffic. Flat L2 network with PFC/ECN enabled.</p>
                                </div>
                            </div>

                            <div className={styles.infoBox}>
                                <h4 className={styles.infoBoxTitle}>Why Flat L2 (No VLANs, No VXLAN)</h4>
                                <ul className={styles.infoList}>
                                    <li><strong>No VLANs needed:</strong> With only 2 nodes on a dedicated switch, there's nothing to segment.</li>
                                    <li><strong>No VXLAN:</strong> Encapsulation overhead kills RDMA performance. VXLAN adds headers and processing that defeat the purpose of zero-copy transfers.</li>
                                    <li><strong>Simple PFC configuration:</strong> Priority Flow Control is easier to configure and debug on a flat network.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Kubernetes Integration */}
                    <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="kubernetes-integration">
                        <div className={styles.sectionContent}>
                            <h2 id="kubernetes-integration" className={styles.sectionTitle}>Kubernetes Integration</h2>

                            <h3 className={styles.subsectionTitle}>The Multi-Network Challenge</h3>
                            <p className={styles.paragraph}>
                                Kubernetes assumes a single network per pod. Our design requires pods to have two networks: the primary Calico network for Kubernetes services and a secondary RDMA network for NCCL traffic. This is where Multus CNI comes in.
                            </p>

                            <figure className={styles.diagramContainer}>
                                <img
                                    src="/img/diagram-03-pod-networking.svg"
                                    alt="Pod network architecture diagram showing eth0 for Calico and net1 for RDMA via Multus CNI"
                                    className={styles.diagram}
                                    loading="lazy"
                                    width="1000"
                                    height="500"
                                />
                                <figcaption className={styles.diagramCaption}>Pod Network Architecture with Multus CNI</figcaption>
                            </figure>

                            <div className={styles.twoColumnGrid}>
                                <div className={styles.interfaceCard}>
                                    <code>eth0</code>
                                    <p>Primary interface (Calico) for Kubernetes services, DNS, API server communication</p>
                                </div>
                                <div className={styles.interfaceCard}>
                                    <code>net1</code>
                                    <p>Secondary interface (RDMA) for NCCL collective operations</p>
                                </div>
                            </div>

                            <h3 className={styles.subsectionTitle}>Component Stack</h3>
                            <p className={styles.paragraph}>The complete Kubernetes stack for RDMA-enabled GPU training:</p>

                            <div className={styles.tableWrapper}>
                                <table className={styles.dataTable}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Component</th>
                                            <th scope="col">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {componentStack.map((item, index) => (
                                            <tr key={index}>
                                                <td><strong>{item.component}</strong></td>
                                                <td>{item.purpose}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h3 className={styles.subsectionTitle}>SR-IOV vs Host-Device: A Critical Decision</h3>
                            <div className={styles.tableWrapper}>
                                <table className={styles.dataTable}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Approach</th>
                                            <th scope="col">How It Works</th>
                                            <th scope="col">Pros</th>
                                            <th scope="col">Cons</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Host-Device</strong></td>
                                            <td>Entire NIC moved into pod namespace</td>
                                            <td>Simple, full performance</td>
                                            <td>Exclusive access - one job per NIC</td>
                                        </tr>
                                        <tr>
                                            <td><strong>SR-IOV</strong></td>
                                            <td>Virtual Functions (VFs) carved from physical NIC</td>
                                            <td>Multiple jobs share NIC</td>
                                            <td>More complex setup, ~5% overhead</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className={styles.decisionBox}>
                                <h4>Decision: Host-Device with Dual Ports</h4>
                                <p>
                                    For this 2-node deployment running one distributed training job at a time, host-device provides the simplest path. The dual-port ConnectX-6 Dx gives us two RDMA resources per node, allowing two concurrent RDMA-enabled jobs if needed.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Distributed Training Setup */}
                    <section className={styles.section} aria-labelledby="distributed-training">
                        <div className={styles.sectionContent}>
                            <h2 id="distributed-training" className={styles.sectionTitle}>Distributed Training Setup</h2>

                            <h3 className={styles.subsectionTitle}>Framework: Kubeflow Training Operator</h3>
                            <p className={styles.paragraph}>
                                For running distributed PyTorch jobs on Kubernetes, we deployed the Kubeflow Training Operator. It provides PyTorchJob CRD for distributed PyTorch training, automatic worker discovery, rendezvous coordination, and integration with KAI Scheduler for gang scheduling support.
                            </p>

                            <figure className={styles.diagramContainer}>
                                <img
                                    src="/img/diagram-04-training-stack.svg"
                                    alt="Distributed training stack diagram showing Kubeflow Training Operator, PyTorchJob, and KAI Scheduler integration"
                                    className={styles.diagram}
                                    loading="lazy"
                                    width="1000"
                                    height="600"
                                />
                                <figcaption className={styles.diagramCaption}>Distributed Training Stack</figcaption>
                            </figure>

                            <h3 className={styles.subsectionTitle}>NCCL Configuration for RoCE</h3>
                            <p className={styles.paragraph}>
                                NCCL (NVIDIA Collective Communication Library) must be explicitly configured to use the RDMA interface. Key environment variables include enabling the InfiniBand/RoCE path, specifying the ConnectX-6 device name, and setting the correct RoCEv2 GID index.
                            </p>

                            <div className={styles.warningBox} role="alert">
                                <h4>Critical: NCCL_IB_GID_INDEX</h4>
                                <p>
                                    The GID index must match your RoCEv2 configuration. Index 3 is typical for RoCEv2 with IPv4. Run <code>show_gids</code> on the host to verify the correct index for your setup. <strong>Wrong GID index = silent fallback to TCP.</strong>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Results */}
                    <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="results">
                        <div className={styles.sectionContent}>
                            <h2 id="results" className={styles.sectionTitle}>What changed</h2>
                            <p className={styles.paragraph}>
                                Gradient synchronization moved off the CPU and onto the RDMA path; AllReduce stopped being the step the GPUs waited on. Multi-node jobs that had been network-bound became GPU-bound, which is the state you want. The team's multi-day fine-tuning runs became same-day runs, and multi-node training went from something they avoided to the default.
                            </p>
                            <p className={styles.paragraph}>
                                The configuration detail that mattered most was the smallest one: the NCCL GID index. Get it wrong and everything runs — over TCP, silently, at a fraction of the speed.
                            </p>
                        </div>
                    </section>

                    {/* When to Use */}
                    <section className={styles.section} aria-labelledby="when-to-use">
                        <div className={styles.sectionContent}>
                            <h2 id="when-to-use" className={styles.sectionTitle}>When to Use This Architecture</h2>

                            <div className={styles.twoColumnGrid}>
                                <div className={styles.useCase}>
                                    <h4 className={styles.useCaseGood}>This solution is appropriate when:</h4>
                                    <ul>
                                        <li>You're running multi-node distributed training (DDP, FSDP, DeepSpeed)</li>
                                        <li>Gradient payloads exceed 100MB (most modern models)</li>
                                        <li>GPU utilization during training is under 60%</li>
                                        <li>You control the hardware (on-prem, colo, bare metal cloud)</li>
                                    </ul>
                                </div>
                                <div className={styles.useCase}>
                                    <h4 className={styles.useCaseBad}>This solution is overkill when:</h4>
                                    <ul>
                                        <li>Training fits on a single node</li>
                                        <li>You're doing inference only</li>
                                        <li>You're on shared cloud infrastructure without RDMA support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>

                {/* Article end block (shared soft/medium CTA + related reading) */}
                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <ArticleEndBlock
                            tags={["gpu", "rdma", "kubernetes", "networking", "distributed-training", "nccl"]}
                            currentUrl="/case-studies/rdma-kubernetes"
                        />
                    </div>
                </section>
            </main>
        </Layout>
    )
}
