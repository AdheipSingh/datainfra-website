import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import { PageMetadata } from "@docusaurus/theme-common"
import { Navbar } from "@site/src/components/Layout"
import WhitepaperRequest from "@site/src/components/WhitepaperRequest"
import styles from "./styles.module.css"

const Arrow = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)
const Chevron = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>)

const H1 = "GPU networking on Kubernetes"

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": H1,
    "url": "https://baaz.dev/networking",
    "provider": { "@type": "Organization", "name": "BaaZ", "url": "https://baaz.dev" },
    "areaServed": "Worldwide",
}

const WHAT_WE_DO = [
    {
        id: "design",
        title: "What we design",
        body: "The fabric topology for the traffic the cluster will carry: rail-optimized for training where that pays, simpler where it does not. Switch and NIC selection against the GPU and server you have chosen. The cabling plan. The management network, separate from the data fabric. The storage path, including NFS over RDMA where it fits. The output is a design your integrator can build from and we can accept against.",
    },
    {
        id: "bring-up",
        title: "What we bring up",
        body: "Switch configuration for the fabric and the management network. Provisioning through the servers' management controllers, so the operating system, firmware and driver baselines are the same on every node. GPUDirect RDMA verified end to end, GPU to NIC to switch to GPU, before anything else is installed on top.",
    },
    {
        id: "run",
        title: "What we run",
        body: "NVIDIA's Network Operator on Kubernetes, with the device plugins and the drivers it manages. Secondary networks for training and storage traffic (SR-IOV, IPoIB, Multus), isolated from the cluster network. The telemetry that shows the fabric is healthy, and the runbooks that let your team keep it that way.",
    },
]

const PACKAGES = [
    {
        id: "fabric-acceptance",
        title: "Fabric acceptance",
        body: "Before you sign off on a new cluster, we test the RDMA fabric at wire rate with the standard tools, fix what fails, and hand over the report. For clusters delivered by an integrator or a reseller, this is the check that the thing you paid for is the thing you got.",
    },
    {
        id: "network-operator",
        title: "Network Operator deployment and upgrades",
        body: "Install or upgrade the Operator and the pieces it manages on an existing cluster, without taking the cluster down. We know the code paths: we have contributed to them.",
    },
    {
        id: "secondary-networks",
        title: "Secondary networks for training and storage",
        body: "RDMA, SR-IOV and IPoIB networks for training jobs and storage traffic on Kubernetes, kept apart from the cluster network, with the MTU, the IPAM and the restart behavior set so a configuration change does not take a job down.",
    },
]

// Merged changes only, each linked to github.com/Mellanox/<repo>/pull/<number>.
const CONTRIBUTIONS = [
    { repo: "network-operator", pr: 3266, text: "network-operator: make NIC firmware storage access mode configurable (September 2026)" },
    { repo: "network-operator", pr: 3147, text: "network-operator: MTU support on the IPoIBNetwork resource (September 2026)" },
    { repo: "ipoib-cni", pr: 132, text: "ipoib-cni: MTU support (May 2026)" },
    { repo: "doca-driver-build", pr: 299, text: "doca-driver-build: install the NFS userspace tools on the host when NFS over RDMA is enabled (April 2026)" },
    { repo: "network-operator", pr: 2070, text: "network-operator: global configuration for the NicClusterPolicy (January 2026)" },
    { repo: "network-operator", pr: 2035, text: "network-operator: restart RDMA, SR-IOV and Multus pods automatically on configuration changes (January 2026)" },
]

const READING = [
    { title: "ECMP Hash Collisions in a Fat-Tree", to: "/blog/ecmp-hash-collisions-fat-tree-ai-clusters" },
    { title: "Understanding Secondary Networks for GPU Workloads in Kubernetes", to: "/blog/secondary-networks-gpu-kubernetes" },
    { title: "How to Calculate if Your Network is Bottlenecking Distributed Training", to: "/blog/network-bottleneck-distributed-training" },
]

const COMPONENT_STACK = [
    { component: "Calico", purpose: "Primary CNI for pod networking" },
    { component: "Multus CNI", purpose: "Meta-CNI for multiple network interfaces" },
    { component: "NVIDIA Network Operator", purpose: "RDMA drivers, device plugin, secondary networks" },
    { component: "whereabouts", purpose: "IPAM for secondary network" },
    { component: "NVIDIA GPU Operator", purpose: "GPU drivers, device plugin" },
    { component: "KAI Scheduler", purpose: "Gang scheduling for distributed jobs" },
]

// The former RDMA case study, moved here with every figure removed.
function RdmaWriteUp() {
    return (
        <div className={`prose ${styles.writeUp}`}>
            <p>
                A computer-vision team's training cluster was running gradient sync over TCP. We specified RDMA-capable NICs and a DCB switch, then did the Kubernetes and NCCL configuration that makes RDMA actually get used.
            </p>
            <p className={styles.environment}>
                Environment: bare-metal Kubernetes, GPUs (RTX A5000/A5500), RoCE.
            </p>

            <h3>Executive Summary</h3>
            <p>
                A computer-vision team trains object-detection and segmentation models on-prem for data-residency reasons. Their cluster: workstations with GPUs, Kubernetes on bare metal. Multi-node training was running gradient synchronization over the workstations' integrated NICs — TCP, CPU in the data path, no RDMA capability at all.
            </p>
            <p>
                The work had two halves. The hardware half: specify RDMA-capable NICs and a DCB switch on a dedicated network (procurement and physical installation were the customer's). The software half — the part that usually goes wrong — make Kubernetes and NCCL actually use it: a second pod network via Multus, drivers and device plugin via NVIDIA Network Operator, PFC/ECN on the switch, and the NCCL GID index set so traffic doesn't silently fall back to TCP.
            </p>
            <p>
                In clusters that already own RDMA hardware, that silent fallback is the failure we find most often in audits.
            </p>

            <h3>The Challenge</h3>
            <h4>Client Context</h4>
            <p>
                The client, a computer-vision team, had built an on-premises ML platform to train object detection and image segmentation models. Privacy requirements and data residency regulations made cloud training impractical for their most sensitive workloads.
            </p>
            <div className={styles.box}>
                <h5>Their Infrastructure</h5>
                <ul>
                    <li>Dell Precision workstations with RTX A5000 and RTX A5500 GPUs</li>
                    <li>Bare metal Kubernetes cluster (Ubuntu)</li>
                    <li>NVIDIA GPU Operator for device management</li>
                    <li>Calico CNI for pod networking</li>
                    <li>NFS for shared storage, local NVMe for scratch space</li>
                </ul>
            </div>

            <h4>The Problem</h4>
            <p>
                Training jobs that used all the GPUs across the nodes were painfully slow. The GPUs spent much of each iteration idle, waiting on the network while gradients synchronized, with the CPU stuck in the data path for every byte transferred.
            </p>

            <h4>Root Cause Analysis</h4>
            <p>We identified these compounding issues:</p>
            <ol className={styles.issues}>
                <li>
                    <strong>No RDMA capability.</strong> The integrated NICs didn't support RDMA. Every gradient sync required: GPU memory → PCIe → System RAM → CPU (TCP/IP stack) → NIC → Wire → NIC → CPU → System RAM → PCIe → GPU memory. The CPU was in the critical path for every byte transferred.
                </li>
                <li>
                    <strong>No GPUDirect.</strong> Without GPUDirect RDMA, NCCL fell back to the Socket transport. Each AllReduce operation involved multiple memory copies and CPU intervention, adding latency per operation.
                </li>
                <li>
                    <strong>Inadequate bandwidth.</strong> Even ignoring latency, the integrated link cannot move gradient payloads fast enough for multi-node training to make sense.
                </li>
            </ol>

            <figure className={styles.figure}>
                <img
                    src="/img/diagram-01-tcp-vs-rdma-datapath.svg"
                    alt="Comparison diagram showing TCP/IP data path with multiple memory copies through CPU versus RDMA direct path bypassing CPU"
                    loading="lazy"
                    width="1000"
                    height="500"
                />
                <figcaption>TCP/IP Data Path vs RDMA Data Path</figcaption>
            </figure>

            <p className={styles.highlight}>
                No RDMA path between the nodes is a network problem, not a GPU problem. That meant RDMA.
            </p>

            <h3>Solution Architecture</h3>
            <h4>Technology Selection: RoCE vs InfiniBand</h4>
            <p>For RDMA, the main options are InfiniBand and RoCE (RDMA over Converged Ethernet). We evaluated both:</p>
            <div className={styles.tableWrap}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th scope="col">Factor</th>
                            <th scope="col">InfiniBand (HDR/NDR)</th>
                            <th scope="col">RoCE v2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Expertise required</td>
                            <td>Specialized</td>
                            <td>Familiar to network teams</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.decision}>
                <h5>Decision: RoCE v2</h5>
                <p>
                    The slight latency penalty is negligible for large gradient payloads.
                </p>
            </div>

            <h4>Hardware Specification</h4>
            <div className={styles.tableWrap}>
                <table className={styles.table}>
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
                            <td>NVIDIA ConnectX-6 Dx (dual-port)</td>
                            <td>RDMA-capable network interface</td>
                        </tr>
                        <tr>
                            <td>Switch</td>
                            <td>NVIDIA SN2201 or Dell S5248F-ON</td>
                            <td>DCB-capable Ethernet with PFC/ECN</td>
                        </tr>
                        <tr>
                            <td>Cabling</td>
                            <td>DAC (Direct Attach Copper) or QSFP28</td>
                            <td>Node interconnect</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>Network Topology Design</h4>
            <p>
                We designed a physically separated network architecture with distinct planes:
            </p>
            <figure className={styles.figure}>
                <img
                    src="/img/diagram-02-physical-topology.svg"
                    alt="Physical network topology showing separate management and RDMA networks connecting GPU servers"
                    loading="lazy"
                    width="1000"
                    height="600"
                />
                <figcaption>Physical Network Topology</figcaption>
            </figure>
            <div className={styles.pair}>
                <div className={styles.box}>
                    <h5>Management Network (existing)</h5>
                    <p>Integrated NICs connected to the existing management switch. Handles Kubernetes control plane, SSH access, monitoring, and NFS traffic. No changes required.</p>
                </div>
                <div className={styles.box}>
                    <h5>RDMA Network (new)</h5>
                    <p>ConnectX-6 Dx NICs connected to a dedicated DCB switch. Handles only GPU-to-GPU NCCL traffic. Flat L2 network with PFC/ECN enabled.</p>
                </div>
            </div>
            <div className={styles.box}>
                <h5>Why Flat L2 (No VLANs, No VXLAN)</h5>
                <ul>
                    <li><strong>No VLANs needed:</strong> With so few nodes on a dedicated switch, there's nothing to segment.</li>
                    <li><strong>No VXLAN:</strong> Encapsulation overhead kills RDMA performance. VXLAN adds headers and processing that defeat the purpose of zero-copy transfers.</li>
                    <li><strong>Simple PFC configuration:</strong> Priority Flow Control is easier to configure and debug on a flat network.</li>
                </ul>
            </div>

            <h3>Kubernetes Integration</h3>
            <h4>The Multi-Network Challenge</h4>
            <p>
                Kubernetes assumes a single network per pod. Our design requires pods to have both networks: the primary Calico network for Kubernetes services and a secondary RDMA network for NCCL traffic. This is where Multus CNI comes in.
            </p>
            <figure className={styles.figure}>
                <img
                    src="/img/diagram-03-pod-networking.svg"
                    alt="Pod network architecture diagram showing eth0 for Calico and net1 for RDMA via Multus CNI"
                    loading="lazy"
                    width="1000"
                    height="500"
                />
                <figcaption>Pod Network Architecture with Multus CNI</figcaption>
            </figure>
            <div className={styles.pair}>
                <div className={styles.box}>
                    <code>eth0</code>
                    <p>Primary interface (Calico) for Kubernetes services, DNS, API server communication</p>
                </div>
                <div className={styles.box}>
                    <code>net1</code>
                    <p>Secondary interface (RDMA) for NCCL collective operations</p>
                </div>
            </div>

            <h4>Component Stack</h4>
            <p>The complete Kubernetes stack for RDMA-enabled GPU training:</p>
            <div className={styles.tableWrap}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th scope="col">Component</th>
                            <th scope="col">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        {COMPONENT_STACK.map((item) => (
                            <tr key={item.component}>
                                <td><strong>{item.component}</strong></td>
                                <td>{item.purpose}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h4>SR-IOV vs Host-Device: A Critical Decision</h4>
            <div className={styles.tableWrap}>
                <table className={styles.table}>
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
                            <td>More complex setup, added overhead</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.decision}>
                <h5>Decision: Host-Device with Dual Ports</h5>
                <p>
                    For this deployment running one distributed training job at a time, host-device provides the simplest path. The dual-port ConnectX-6 Dx gives us an RDMA resource per port, allowing concurrent RDMA-enabled jobs if needed.
                </p>
            </div>

            <h3>Distributed Training Setup</h3>
            <h4>Framework: Kubeflow Training Operator</h4>
            <p>
                For running distributed PyTorch jobs on Kubernetes, we deployed the Kubeflow Training Operator. It provides PyTorchJob CRD for distributed PyTorch training, automatic worker discovery, rendezvous coordination, and integration with KAI Scheduler for gang scheduling support.
            </p>
            <figure className={styles.figure}>
                <img
                    src="/img/diagram-04-training-stack.svg"
                    alt="Distributed training stack diagram showing Kubeflow Training Operator, PyTorchJob, and KAI Scheduler integration"
                    loading="lazy"
                    width="1000"
                    height="600"
                />
                <figcaption>Distributed Training Stack</figcaption>
            </figure>

            <h4>NCCL Configuration for RoCE</h4>
            <p>
                NCCL (NVIDIA Collective Communication Library) must be explicitly configured to use the RDMA interface. Key environment variables include enabling the InfiniBand/RoCE path, specifying the ConnectX-6 device name, and setting the correct RoCEv2 GID index.
            </p>
            <div className={styles.warning} role="note">
                <h5>Critical: NCCL_IB_GID_INDEX</h5>
                <p>
                    The GID index must match your RoCEv2 configuration. Run <code>show_gids</code> on the host to verify the correct index for your setup. <strong>Wrong GID index = silent fallback to TCP.</strong>
                </p>
            </div>

            <h3>What changed</h3>
            <p>
                Gradient synchronization moved off the CPU and onto the RDMA path; AllReduce stopped being the step the GPUs waited on. Multi-node jobs that had been network-bound became GPU-bound, which is the state you want. Multi-node training went from something the team avoided to the default.
            </p>
            <p>
                The configuration detail that mattered most was the smallest one: the NCCL GID index. Get it wrong and everything runs — over TCP, silently, at a fraction of the speed.
            </p>

            <h3>When to Use This Architecture</h3>
            <div className={styles.pair}>
                <div className={styles.box}>
                    <h5>This solution is appropriate when:</h5>
                    <ul>
                        <li>You're running multi-node distributed training (DDP, FSDP, DeepSpeed)</li>
                        <li>Gradient payloads are large (most modern models)</li>
                        <li>You control the hardware (on-prem, colo, bare metal cloud)</li>
                    </ul>
                </div>
                <div className={styles.box}>
                    <h5>This solution is overkill when:</h5>
                    <ul>
                        <li>Training fits on a single node</li>
                        <li>You're doing inference only</li>
                        <li>You're on shared cloud infrastructure without RDMA support</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default function Networking() {
    return (
        <Layout
            title="GPU Networking on Kubernetes: RDMA Fabrics"
            description="Fabric design, bring-up and acceptance for GPU clusters, and NVIDIA's networking stack on Kubernetes, by engineers who contribute to it."
        >
            <PageMetadata image="/img/og-networking.png" />
            <Head>
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            </Head>
            <Navbar />
            <div className="site">
                <main>
                    <section className="page-hero">
                        <div className="container stack-v gap-16">
                            <div className="breadcrumb">
                                <Link to="/">Home</Link> <Chevron /> <span>GPU networking</span>
                            </div>
                            <h1 className="h1">{H1}</h1>
                            <p className="lead">
                                A GPU cluster is worth what its network lets it do. The fabric is the part of a cluster most often wrong on day one and hardest to prove right, and the software that runs it on Kubernetes is deep. We design it, bring it up and run it, and we contribute to the software we run.
                            </p>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="def-rows">
                                {WHAT_WE_DO.map((w) => (
                                    <div className="def-row" key={w.id}>
                                        <div className="k"><h2 className="h3" id={w.id}>{w.title}</h2></div>
                                        <div className="v">{w.body}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="section alt">
                        <div className="container">
                            <div className="section-head">
                                <h2 className="h2">Three ways to work with us</h2>
                            </div>
                            <div className="grid grid-3">
                                {PACKAGES.map((p) => (
                                    <div className="card" key={p.id}>
                                        <h3 className="h4" id={p.id}>{p.title}</h3>
                                        <p className="body">{p.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="section-head">
                                <h2 className="h2" id="contributions">We contribute to the software we run</h2>
                                <p className="lead">
                                    Changes we contributed to NVIDIA's networking software in 2026, maintained in the Mellanox organization on GitHub. Each links to the merged change.
                                </p>
                            </div>
                            <ul className={styles.contributions}>
                                {CONTRIBUTIONS.map((c) => (
                                    <li key={c.pr}>
                                        <a href={`https://github.com/Mellanox/${c.repo}/pull/${c.pr}`} target="_blank" rel="noopener noreferrer">
                                            {c.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <p className={`body ${styles.also}`}>
                                Also: a queue validator contributed to the KAI Scheduler, written up on the blog.
                            </p>
                            <p className={`body ${styles.also}`}>
                                <Link className="link-arrow" to="/open-source">Open source, for the full list <Arrow /></Link>
                            </p>
                        </div>
                    </section>

                    <section className="section alt">
                        <div className="container">
                            <div className="section-head">
                                <h2 className="h2" id="rdma-on-kubernetes">RDMA on bare-metal Kubernetes</h2>
                            </div>
                            <RdmaWriteUp />
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="section-head">
                                <h2 className="h2">Reading</h2>
                            </div>
                            <div className="post-list">
                                {READING.map((r) => (
                                    <Link className="post-row" to={r.to} key={r.to}>
                                        <span className="h4">{r.title}</span>
                                        <Arrow />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="cta-band">
                        <div className="container">
                            <div className="inner">
                                <h2 className="h2" id="fabric-check">Fabric check</h2>
                                <p className="lead">
                                    Planning a cluster, or inheriting one? Send us the topology and the switch and NIC models, and we will tell you what to test first and what usually fails. No charge for the first look.
                                </p>
                                <WhitepaperRequest
                                    subject="Fabric check"
                                    buttonLabel="Send the topology"
                                    askBuilding={false}
                                    fallbackTo="/contact"
                                />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
