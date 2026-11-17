import React from "react"
import styles from "./styles.module.css"

const COMPONENT_STACK = [
    { component: "Calico", purpose: "Primary CNI for pod networking" },
    { component: "Multus CNI", purpose: "Meta-CNI for multiple network interfaces" },
    { component: "NVIDIA Network Operator", purpose: "RDMA drivers, device plugin, secondary networks" },
    { component: "whereabouts", purpose: "IPAM for secondary network" },
    { component: "NVIDIA GPU Operator", purpose: "GPU drivers, device plugin" },
    { component: "KAI Scheduler", purpose: "Gang scheduling for distributed jobs" },
]

// The RDMA case study body, with every figure removed (site revamp).
export default function RdmaWriteUp() {
    return (
        <div className={`prose ${styles.writeUp}`}>
            <p>
                A computer-vision team's training cluster was running gradient sync over TCP. We specified RDMA-capable NICs and a DCB switch, then did the Kubernetes and NCCL configuration that makes RDMA actually get used.
            </p>
            <p className={styles.environment}>
                Environment: bare-metal Kubernetes, GPUs (RTX A5000/A5500), RoCE.
            </p>

            <h2>Executive Summary</h2>
            <p>
                A computer-vision team trains object-detection and segmentation models on-prem for data-residency reasons. Their cluster: workstations with GPUs, Kubernetes on bare metal. Multi-node training was running gradient synchronization over the workstations' integrated NICs — TCP, CPU in the data path, no RDMA capability at all.
            </p>
            <p>
                The work had two halves. The hardware half: specify RDMA-capable NICs and a DCB switch on a dedicated network (procurement and physical installation were the customer's). The software half — the part that usually goes wrong — make Kubernetes and NCCL actually use it: a second pod network via Multus, drivers and device plugin via NVIDIA Network Operator, PFC/ECN on the switch, and the NCCL GID index set so traffic doesn't silently fall back to TCP.
            </p>
            <p>
                In clusters that already own RDMA hardware, that silent fallback is the failure we find most often in audits.
            </p>

            <h2>The Challenge</h2>
            <h3>Client Context</h3>
            <p>
                The client, a computer-vision team, had built an on-premises ML platform to train object detection and image segmentation models. Privacy requirements and data residency regulations made cloud training impractical for their most sensitive workloads.
            </p>
            <div className={styles.box}>
                <h4>Their Infrastructure</h4>
                <ul>
                    <li>Dell Precision workstations with RTX A5000 and RTX A5500 GPUs</li>
                    <li>Bare metal Kubernetes cluster (Ubuntu)</li>
                    <li>NVIDIA GPU Operator for device management</li>
                    <li>Calico CNI for pod networking</li>
                    <li>NFS for shared storage, local NVMe for scratch space</li>
                </ul>
            </div>

            <h3>The Problem</h3>
            <p>
                Training jobs that used all the GPUs across the nodes were painfully slow. The GPUs spent much of each iteration idle, waiting on the network while gradients synchronized, with the CPU stuck in the data path for every byte transferred.
            </p>

            <h3>Root Cause Analysis</h3>
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

            <h2>Solution Architecture</h2>
            <h3>Technology Selection: RoCE vs InfiniBand</h3>
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
                <h4>Decision: RoCE v2</h4>
                <p>
                    The slight latency penalty is negligible for large gradient payloads.
                </p>
            </div>

            <h3>Hardware Specification</h3>
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

            <h3>Network Topology Design</h3>
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
                    <h4>Management Network (existing)</h4>
                    <p>Integrated NICs connected to the existing management switch. Handles Kubernetes control plane, SSH access, monitoring, and NFS traffic. No changes required.</p>
                </div>
                <div className={styles.box}>
                    <h4>RDMA Network (new)</h4>
                    <p>ConnectX-6 Dx NICs connected to a dedicated DCB switch. Handles only GPU-to-GPU NCCL traffic. Flat L2 network with PFC/ECN enabled.</p>
                </div>
            </div>
            <div className={styles.box}>
                <h4>Why Flat L2 (No VLANs, No VXLAN)</h4>
                <ul>
                    <li><strong>No VLANs needed:</strong> With so few nodes on a dedicated switch, there's nothing to segment.</li>
                    <li><strong>No VXLAN:</strong> Encapsulation overhead kills RDMA performance. VXLAN adds headers and processing that defeat the purpose of zero-copy transfers.</li>
                    <li><strong>Simple PFC configuration:</strong> Priority Flow Control is easier to configure and debug on a flat network.</li>
                </ul>
            </div>

            <h2>Kubernetes Integration</h2>
            <h3>The Multi-Network Challenge</h3>
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

            <h3>Component Stack</h3>
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

            <h3>SR-IOV vs Host-Device: A Critical Decision</h3>
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
                <h4>Decision: Host-Device with Dual Ports</h4>
                <p>
                    For this deployment running one distributed training job at a time, host-device provides the simplest path. The dual-port ConnectX-6 Dx gives us an RDMA resource per port, allowing concurrent RDMA-enabled jobs if needed.
                </p>
            </div>

            <h2>Distributed Training Setup</h2>
            <h3>Framework: Kubeflow Training Operator</h3>
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

            <h3>NCCL Configuration for RoCE</h3>
            <p>
                NCCL (NVIDIA Collective Communication Library) must be explicitly configured to use the RDMA interface. Key environment variables include enabling the InfiniBand/RoCE path, specifying the ConnectX-6 device name, and setting the correct RoCEv2 GID index.
            </p>
            <div className={styles.warning} role="note">
                <h4>Critical: NCCL_IB_GID_INDEX</h4>
                <p>
                    The GID index must match your RoCEv2 configuration. Run <code>show_gids</code> on the host to verify the correct index for your setup. <strong>Wrong GID index = silent fallback to TCP.</strong>
                </p>
            </div>

            <h2>What changed</h2>
            <p>
                Gradient synchronization moved off the CPU and onto the RDMA path; AllReduce stopped being the step the GPUs waited on. Multi-node jobs that had been network-bound became GPU-bound, which is the state you want. Multi-node training went from something the team avoided to the default.
            </p>
            <p>
                The configuration detail that mattered most was the smallest one: the NCCL GID index. Get it wrong and everything runs — over TCP, silently, at a fraction of the speed.
            </p>

            <h2>When to Use This Architecture</h2>
            <div className={styles.pair}>
                <div className={styles.box}>
                    <h4>This solution is appropriate when:</h4>
                    <ul>
                        <li>You're running multi-node distributed training (DDP, FSDP, DeepSpeed)</li>
                        <li>Gradient payloads are large (most modern models)</li>
                        <li>You control the hardware (on-prem, colo, bare metal cloud)</li>
                    </ul>
                </div>
                <div className={styles.box}>
                    <h4>This solution is overkill when:</h4>
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
