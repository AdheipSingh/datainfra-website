import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

const keyOutcomes = [
    { metric: "10x", label: "AllReduce Latency Improvement", detail: "From ~100ms to ~10ms" },
    { metric: "8.5x", label: "Training Throughput Increase", detail: "For BERT-sized models" },
    { metric: "78%", label: "GPU Utilization", detail: "Up from 35%" },
    { metric: "4 days → 11 hrs", label: "Time-to-Train Reduction", detail: "For production models" },
]

const benchmarkResults = [
    { metric: "AllReduce latency (100MB)", before: "~95 ms", after: "~9 ms", improvement: "10.5x" },
    { metric: "AllReduce bandwidth", before: "~800 Mbps", after: "~89 Gbps", improvement: "111x" },
    { metric: "GPU utilization (training)", before: "35%", after: "78%", improvement: "2.2x" },
    { metric: "BERT-base fine-tuning time", before: "52 hours", after: "6.1 hours", improvement: "8.5x" },
    { metric: "Checkpoint save (2GB)", before: "12 seconds", after: "1.8 seconds", improvement: "6.7x" },
]

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
        "headline": "8.5x Faster Distributed Training: RDMA on Bare Metal Kubernetes",
        "alternativeHeadline": "Building RDMA-Enabled Kubernetes for Distributed GPU Training",
        "description": "Technical case study on implementing GPUDirect RDMA over RoCE for a computer vision company, achieving 10x latency improvement and 8.5x training throughput increase on bare metal Kubernetes.",
        "image": "https://www.baaz.dev/img/diagram-01-tcp-vs-rdma-datapath.svg",
        "author": {
            "@type": "Organization",
            "name": "BaaZ",
            "url": "https://www.baaz.dev"
        },
        "publisher": {
            "@type": "Organization",
            "name": "BaaZ",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.baaz.dev/img/logo-vector.png"
            }
        },
        "datePublished": "2025-01-25",
        "dateModified": "2025-01-25",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.baaz.dev/case-studies"
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
                "item": "https://www.baaz.dev"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Case Studies",
                "item": "https://www.baaz.dev/case-studies"
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
                    "text": "GPUDirect RDMA enables zero-copy transfers directly between GPU memory and the network, bypassing the CPU and system RAM entirely. This reduces AllReduce latency from ~100ms to ~10ms (10x improvement) and can increase training throughput by 8.5x or more."
                }
            }
        ]
    }
}

export default function CaseStudies() {
    return (
        <Layout
            title="8.5x Faster Distributed Training: RDMA on Bare Metal Kubernetes"
            description="Technical case study: How we implemented GPUDirect RDMA over RoCE on Kubernetes, achieving 10x latency reduction and 8.5x training throughput for distributed GPU workloads."
        >
            <Head>
                {/* Enhanced meta tags for this specific page */}
                <meta property="og:title" content="8.5x Faster Distributed Training: RDMA on Bare Metal Kubernetes | BaaZ Case Study" />
                <meta property="og:description" content="Technical case study on implementing GPUDirect RDMA over RoCE, achieving 10x latency improvement and 8.5x training throughput on bare metal Kubernetes." />
                <meta property="og:url" content="https://www.baaz.dev/case-studies" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.baaz.dev/img/diagram-01-tcp-vs-rdma-datapath.svg" />
                <meta property="article:published_time" content="2025-01-25" />
                <meta property="article:author" content="BaaZ" />
                <meta property="article:section" content="Case Studies" />
                <meta property="article:tag" content="RDMA" />
                <meta property="article:tag" content="Kubernetes" />
                <meta property="article:tag" content="GPU Infrastructure" />
                <meta property="article:tag" content="Distributed Training" />

                {/* Twitter Card meta tags */}
                <meta name="twitter:title" content="8.5x Faster Distributed Training: RDMA on Bare Metal Kubernetes" />
                <meta name="twitter:description" content="How we helped a computer vision company achieve 10x latency improvement with GPUDirect RDMA over RoCE on Kubernetes." />
                <meta name="twitter:image" content="https://www.baaz.dev/img/diagram-01-tcp-vs-rdma-datapath.svg" />

                {/* Additional SEO meta tags */}
                <meta name="keywords" content="RDMA case study, GPUDirect RDMA, RoCE Kubernetes, distributed GPU training, NCCL optimization, ConnectX-6, Multus CNI, bare metal Kubernetes, GPU infrastructure consulting, AllReduce optimization" />
                <link rel="canonical" href="https://www.baaz.dev/case-studies" />

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
                                <span aria-current="page">Case Studies</span>
                            </li>
                        </ol>
                    </nav>

                    {/* Hero Section */}
                    <header className={styles.heroSection}>
                        <div className={styles.heroContent}>
                            <span className={styles.heroLabel}>Technical Case Study</span>
                            <h1 className={styles.heroTitle} itemProp="headline">
                                8.5x Faster Distributed Training
                            </h1>
                            <p className={styles.heroSubtitle} itemProp="alternativeHeadline">
                                RDMA on Bare Metal Kubernetes
                            </p>
                            <p className={styles.heroDesc} itemProp="description">
                                How we helped a mid-sized fintech deploy bare metal Kubernetes with GPUDirect RDMA over RoCE for high-performance ML workloads
                            </p>
                        </div>
                    </header>

                    {/* Key Outcomes */}
                    <section className={styles.outcomesSection} aria-label="Key Results">
                        <div className={styles.sectionContent}>
                            <div className={styles.outcomesGrid}>
                                {keyOutcomes.map((outcome, index) => (
                                    <div key={index} className={styles.outcomeCard}>
                                        <span className={styles.outcomeMetric}>{outcome.metric}</span>
                                        <span className={styles.outcomeLabel}>{outcome.label}</span>
                                        <span className={styles.outcomeDetail}>{outcome.detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Executive Summary */}
                    <section className={styles.section} aria-labelledby="executive-summary">
                        <div className={styles.sectionContent}>
                            <h2 id="executive-summary" className={styles.sectionTitle}>Executive Summary</h2>
                            <div className={styles.summaryContent} itemProp="articleBody">
                                <p>
                                    A mid-sized computer vision company had invested in GPU infrastructure for their ML platform but hit a wall: distributed training jobs that should complete in hours were taking days. Their data science team was frustrated, GPU utilization was under 40%, and leadership was questioning the ROI of their hardware investment.
                                </p>
                                <p>
                                    <strong>The root cause: network bottlenecks.</strong> Without RDMA, gradient synchronization between GPUs was crawling over TCP/IP, burning expensive GPU cycles waiting on the network. Their RTX A5000 and A5500 cards sat idle during AllReduce operations while the CPU copied data between system memory and network buffers.
                                </p>
                                <p>
                                    We implemented a complete network redesign using GPUDirect RDMA over RoCE (RDMA over Converged Ethernet), integrated with their existing Kubernetes infrastructure through the NVIDIA Network Operator and Multus CNI.
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
                                The client, a mid-sized computer vision company, had built an on-premises ML platform to train object detection and image segmentation models. Privacy requirements and data residency regulations made cloud training impractical for their most sensitive workloads.
                            </p>

                            <div className={styles.infoBox}>
                                <h4 className={styles.infoBoxTitle}>Their Infrastructure</h4>
                                <ul className={styles.infoList}>
                                    <li>2 Dell Precision workstations: one with RTX A5000 (2 GPUs), one with RTX A5500 (2 GPUs)</li>
                                    <li>Bare metal Kubernetes cluster (Ubuntu 24.04, K8s 1.29)</li>
                                    <li>NVIDIA GPU Operator for device management</li>
                                    <li>Calico CNI for pod networking</li>
                                    <li>NFS for shared storage, local NVMe for scratch space</li>
                                    <li>KAI Scheduler for GPU-aware job scheduling</li>
                                </ul>
                            </div>

                            <h3 className={styles.subsectionTitle}>The Problem</h3>
                            <p className={styles.paragraph}>
                                Training jobs that used all 4 GPUs across both nodes were painfully slow. A BERT-base fine-tuning job that benchmarked at 6 hours on a single 8-GPU cloud instance was taking over 50 hours on their 4-GPU cluster.
                            </p>

                            <div className={styles.tableWrapper}>
                                <table className={styles.dataTable}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Symptom</th>
                                            <th scope="col">Observed</th>
                                            <th scope="col">Expected</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>GPU utilization during training</td>
                                            <td className={styles.badValue}>30-40%</td>
                                            <td className={styles.goodValue}>&gt;80%</td>
                                        </tr>
                                        <tr>
                                            <td>AllReduce time per iteration</td>
                                            <td className={styles.badValue}>~400ms</td>
                                            <td className={styles.goodValue}>&lt;50ms</td>
                                        </tr>
                                        <tr>
                                            <td>Network throughput during sync</td>
                                            <td className={styles.badValue}>~800 Mbps</td>
                                            <td className={styles.goodValue}>&gt;10 Gbps</td>
                                        </tr>
                                        <tr>
                                            <td>CPU utilization during sync</td>
                                            <td className={styles.badValue}>85%+ (single core)</td>
                                            <td className={styles.goodValue}>&lt;10%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

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
                                        <strong>No GPUDirect.</strong> Without GPUDirect RDMA, NCCL fell back to the Socket transport. Each AllReduce operation involved multiple memory copies and CPU intervention, adding 50-100μs of latency per operation.
                                    </div>
                                </div>
                                <div className={styles.issueItem}>
                                    <span className={styles.issueNumber}>3</span>
                                    <div>
                                        <strong>Inadequate bandwidth.</strong> Even ignoring latency, 1GbE (125 MB/s) couldn't move a 400MB gradient payload fast enough. At theoretical maximum, that's 3.2 seconds per AllReduce—just for the network transfer.
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
                                The math was clear: to make distributed training viable, they needed 100x bandwidth improvement and 10-50x latency reduction. That meant RDMA.
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
                                            <td>Exclusive access—one job per NIC</td>
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
                            <h2 id="results" className={styles.sectionTitle}>Results</h2>

                            <h3 className={styles.subsectionTitle}>Performance Benchmarks</h3>
                            <p className={styles.paragraph}>
                                We benchmarked before and after using nccl-tests (all_reduce_perf) and real training workloads:
                            </p>

                            <div className={styles.tableWrapper}>
                                <table className={styles.dataTable}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Metric</th>
                                            <th scope="col">Before (TCP)</th>
                                            <th scope="col">After (RoCE)</th>
                                            <th scope="col">Improvement</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {benchmarkResults.map((result, index) => (
                                            <tr key={index}>
                                                <td>{result.metric}</td>
                                                <td className={styles.badValue}>{result.before}</td>
                                                <td className={styles.goodValue}>{result.after}</td>
                                                <td className={styles.improvementValue}>{result.improvement}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className={styles.insightBox}>
                                <h4>Key Insight</h4>
                                <p>
                                    The 8.5x training speedup was greater than expected. This is because reduced AllReduce time didn't just speed up synchronization—it allowed the GPUs to process more batches per unit time, compounding the gains.
                                </p>
                            </div>

                            <h3 className={styles.subsectionTitle}>Operational Impact</h3>
                            <div className={styles.impactGrid}>
                                <div className={styles.impactCard}>
                                    <strong>Model iteration time</strong>
                                    <p>Data scientists can now run 5-6 experiments per week instead of 1-2.</p>
                                </div>
                                <div className={styles.impactCard}>
                                    <strong>GPU ROI</strong>
                                    <p>Effective utilization more than doubled, improving the cost-per-trained-model significantly.</p>
                                </div>
                                <div className={styles.impactCard}>
                                    <strong>Team morale</strong>
                                    <p>No more babysitting multi-day training jobs or debugging mysterious slowdowns.</p>
                                </div>
                            </div>
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

                {/* CTA Section */}
                <section className={styles.ctaSection} aria-labelledby="cta-heading">
                    <div className={styles.ctaContent}>
                        <h2 id="cta-heading" className={styles.ctaTitle}>Facing Similar Challenges?</h2>
                        <p className={styles.ctaText}>
                            If you're dealing with GPU infrastructure challenges—utilization, performance, reliability, or building something new—we should talk. No sales pitch. Just a conversation about what you're trying to do and whether we can help.
                        </p>
                        <a
                            href="https://cal.com/baazhq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            Schedule a Call
                        </a>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
