import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GPU Networking & RDMA Consulting",
    "description": "RDMA, InfiniBand, and RoCE networking consulting for GPU clusters. GPUDirect RDMA setup, NCCL optimization, and network fabric design for AI training.",
    "url": "https://baaz.dev/services/gpu-networking",
    "provider": {
        "@type": "Organization",
        "name": "BaaZ",
        "url": "https://baaz.dev"
    },
    "serviceType": "GPU Networking Consulting",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GPU Networking Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "RDMA Network Setup",
                    "description": "End-to-end RDMA configuration for InfiniBand and RoCE networks including switch configuration, NIC tuning, and validation."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "GPUDirect RDMA Configuration",
                    "description": "Enable and optimize GPUDirect RDMA for zero-copy GPU-to-GPU data transfers across network nodes."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Network Fabric Design",
                    "description": "Design and implement GPU cluster network fabrics using leaf-spine topologies, rail-optimized networks, and multi-rail configurations."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "NCCL Network Optimization",
                    "description": "Tune NCCL to maximize network throughput for distributed training collective operations over RDMA fabrics."
                }
            }
        ]
    }
}

const sectionStyle = {
    marginBottom: '48px',
}

const h2Style = {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#1a365d',
    marginBottom: '16px',
    marginTop: '48px',
}

const h3Style = {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#2d3748',
    marginBottom: '12px',
    marginTop: '32px',
}

const pStyle = {
    color: '#4a5568',
    lineHeight: 1.8,
    fontSize: '1.05rem',
    marginBottom: '16px',
}

const listStyle = {
    color: '#4a5568',
    lineHeight: 1.8,
    fontSize: '1.05rem',
    paddingLeft: '24px',
    marginBottom: '16px',
}

const statBoxStyle = {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
    margin: '32px 0',
}

const statItemStyle = {
    background: '#f7fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '24px 32px',
    textAlign: 'center',
    flex: '1',
    minWidth: '150px',
}

const statValueStyle = {
    display: 'block',
    fontSize: '2rem',
    fontWeight: 800,
    color: '#3182ce',
    lineHeight: 1,
}

const statLabelStyle = {
    display: 'block',
    fontSize: '0.9rem',
    color: '#4a5568',
    marginTop: '8px',
}

const ctaSectionStyle = {
    background: '#1a365d',
    borderRadius: '16px',
    padding: '48px',
    textAlign: 'center',
    marginTop: '64px',
}

const ctaTitleStyle = {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: 'white',
    marginBottom: '16px',
}

const ctaTextStyle = {
    fontSize: '1.05rem',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 1.6,
    marginBottom: '24px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
}

const ctaButtonStyle = {
    display: 'inline-block',
    background: 'white',
    color: '#1a365d',
    padding: '14px 40px',
    borderRadius: '6px',
    fontWeight: 600,
    fontSize: '1.05rem',
    textDecoration: 'none',
}

const tagContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    margin: '16px 0',
}

const tagStyle = {
    background: '#ebf8ff',
    border: '1px solid #bee3f8',
    padding: '6px 14px',
    borderRadius: '6px',
    fontSize: '0.9rem',
    color: '#2b6cb0',
    fontWeight: 500,
}

const heroLabelStyle = {
    display: 'inline-block',
    background: '#ebf8ff',
    color: '#2b6cb0',
    padding: '6px 16px',
    borderRadius: '100px',
    fontSize: '0.85rem',
    fontWeight: 600,
    letterSpacing: '0.02em',
    marginBottom: '16px',
}

const comparisonTableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '24px 0',
    fontSize: '0.95rem',
}

const thStyle = {
    background: '#f7fafc',
    border: '1px solid #e2e8f0',
    padding: '12px 16px',
    textAlign: 'left',
    fontWeight: 600,
    color: '#1a365d',
}

const tdStyle = {
    border: '1px solid #e2e8f0',
    padding: '12px 16px',
    color: '#4a5568',
}

export default function GpuNetworking() {
    return (
        <Layout
            title="GPU Networking & RDMA Consulting"
            description="RDMA, InfiniBand, and RoCE networking consulting for GPU clusters. GPUDirect RDMA setup, NCCL optimization, and network fabric design for AI training."
        >
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Head>
            <Navbar />
            <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 24px 80px' }}>
                <span style={heroLabelStyle}>Service</span>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1a365d', lineHeight: 1.2, marginBottom: '20px' }}>
                    GPU Networking & RDMA Consulting
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '32px' }}>
                    The network connecting your GPUs determines whether distributed training scales linearly or
                    plateaus. We design, implement, and optimize RDMA network fabrics for GPU clusters, turning
                    the interconnect from a bottleneck into an enabler.
                </p>

                <div style={statBoxStyle}>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>400 Gb/s</span>
                        <span style={statLabelStyle}>Per-Port Bandwidth</span>
                    </div>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>{'<'}2 us</span>
                        <span style={statLabelStyle}>RDMA Latency</span>
                    </div>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>Zero</span>
                        <span style={statLabelStyle}>CPU Overhead</span>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Why GPU Networking Is Different</h2>
                    <p style={pStyle}>
                        Traditional data center networking was designed for web applications and databases where latency
                        requirements are measured in milliseconds and bandwidth needs are modest. GPU cluster networking
                        operates in a fundamentally different regime. Distributed training workloads generate burst traffic
                        patterns where all nodes simultaneously transmit gradient data during collective operations, demanding
                        full bisection bandwidth from the network fabric. A single congested link or misconfigured switch port
                        can degrade the performance of an entire training job.
                    </p>
                    <p style={pStyle}>
                        The difference between a properly configured RDMA network and a standard TCP/IP network is not
                        incremental. It is transformational. RDMA enables GPU-to-GPU transfers at wire rate with sub-microsecond
                        latency and zero CPU involvement. Without it, every inter-node transfer requires multiple memory copies
                        through the CPU, adding hundreds of microseconds of latency and consuming CPU cycles that should be
                        feeding the GPUs. This is why networking expertise is the single most impactful investment you can make
                        in GPU cluster performance.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>InfiniBand vs. RoCE: Choosing the Right Fabric</h2>
                    <p style={pStyle}>
                        The first architectural decision for any GPU cluster network is choosing between InfiniBand and RDMA
                        over Converged Ethernet (RoCE). Both provide RDMA capability, but they differ significantly in
                        deployment complexity, cost, and operational characteristics.
                    </p>

                    <table style={comparisonTableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Characteristic</th>
                                <th style={thStyle}>InfiniBand</th>
                                <th style={thStyle}>RoCE v2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Lossless guarantee</td>
                                <td style={tdStyle}>Built-in credit-based flow control</td>
                                <td style={tdStyle}>Requires PFC configuration</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Congestion management</td>
                                <td style={tdStyle}>Native, automatic</td>
                                <td style={tdStyle}>ECN/DCQCN must be configured</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Bandwidth (current gen)</td>
                                <td style={tdStyle}>400 Gb/s (NDR)</td>
                                <td style={tdStyle}>400 Gb/s (ConnectX-7)</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Switch ecosystem</td>
                                <td style={tdStyle}>NVIDIA Quantum only</td>
                                <td style={tdStyle}>Multiple vendors</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Operational complexity</td>
                                <td style={tdStyle}>Requires IB subnet manager</td>
                                <td style={tdStyle}>Standard Ethernet operations</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Cost</td>
                                <td style={tdStyle}>Higher (dedicated fabric)</td>
                                <td style={tdStyle}>Lower (shared Ethernet)</td>
                            </tr>
                        </tbody>
                    </table>

                    <p style={pStyle}>
                        InfiniBand provides guaranteed lossless transport through credit-based flow control, making it
                        inherently reliable for RDMA. RoCE runs over standard Ethernet switches, offering lower cost and
                        operational familiarity, but requires careful configuration of Priority Flow Control and ECN to
                        achieve lossless behavior. We help you choose the right fabric based on your scale, budget, and
                        operational capabilities, then implement it correctly.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>What We Implement</h2>

                    <h3 style={h3Style}>RDMA Network Setup</h3>
                    <p style={pStyle}>
                        A working RDMA network requires correct configuration at every layer from the NIC firmware through the
                        switch fabric to the host operating system. We configure ConnectX NIC firmware and driver parameters
                        for optimal RDMA performance, set up RoCE v2 with proper GID indexes, traffic class, and DSCP
                        marking, configure PFC (Priority Flow Control) on switches with appropriate pause thresholds to prevent
                        packet loss without causing head-of-line blocking, tune ECN (Explicit Congestion Notification) and
                        DCQCN parameters for proactive congestion management, validate end-to-end RDMA connectivity with
                        perftest tools, and set MTU to 9000 bytes (jumbo frames) across the entire path for maximum throughput.
                    </p>

                    <h3 style={h3Style}>GPUDirect RDMA</h3>
                    <p style={pStyle}>
                        GPUDirect RDMA enables network adapters to directly read from and write to GPU memory, completely
                        bypassing CPU memory. This eliminates two memory copies per transfer and reduces latency by an order
                        of magnitude. We install and configure the nvidia-peermem kernel module, verify PCIe topology to ensure
                        GPUs and NICs share the same PCIe root complex for optimal DMA performance, configure NCCL to use
                        GPUDirect with the appropriate NET_GDR_LEVEL setting, and validate GPU-to-GPU RDMA bandwidth with
                        NCCL tests and real workloads. On systems where GPU and NIC are on different PCIe trees, we evaluate
                        the performance tradeoff and configure NCCL accordingly.
                    </p>

                    <h3 style={h3Style}>Network Fabric Design</h3>
                    <p style={pStyle}>
                        For new GPU cluster builds, we design the network fabric from scratch. Our designs typically use
                        leaf-spine or fat-tree topologies that provide full bisection bandwidth, rail-optimized network
                        layouts where each GPU connects to a dedicated network rail for maximum per-GPU bandwidth, multi-rail
                        configurations on platforms like HGX and DGX that have multiple NICs per node, adaptive routing on
                        InfiniBand or ECMP on Ethernet to distribute traffic across multiple paths, and dedicated compute and
                        storage networks to prevent training traffic from competing with data loading. We size the fabric based
                        on the expected communication patterns of your workloads, ensuring that collective operations like
                        AllReduce can execute at full bandwidth across the cluster.
                    </p>

                    <h3 style={h3Style}>NVIDIA Spectrum-X</h3>
                    <p style={pStyle}>
                        For Ethernet-based GPU clusters, NVIDIA Spectrum-X combines Spectrum-4 switches with BlueField-3 DPUs
                        to deliver InfiniBand-class performance over Ethernet. We design and deploy Spectrum-X fabrics
                        including switch configuration with adaptive routing and congestion control, BlueField-3 DPU setup for
                        hardware-accelerated RoCE, isolation between tenants on multi-tenant GPU clusters, and integration
                        with existing Ethernet infrastructure. Spectrum-X is particularly valuable for cloud providers and
                        enterprises that want RDMA performance without the operational overhead of a separate InfiniBand fabric.
                    </p>

                    <h3 style={h3Style}>NCCL Network Tuning</h3>
                    <p style={pStyle}>
                        NCCL is the bridge between your training framework and the network. Proper NCCL configuration is
                        essential to leverage the full capability of your RDMA fabric. We tune NCCL_IB_HCA to pin NCCL to
                        the correct network interfaces with proper affinity, configure NCCL_IB_GID_INDEX for RoCE v2
                        operation with the right GID, set NCCL_ALGO and NCCL_PROTO based on the cluster topology and message
                        size distribution, enable NCCL_IB_ADAPTIVE_ROUTING on InfiniBand fabrics that support it, and tune
                        buffer sizes and thread counts for the specific GPU and NIC combination. Every environment is
                        different. We do not apply generic configurations. We measure and tune for your specific hardware.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Technologies We Work With</h2>
                    <div style={tagContainerStyle}>
                        <span style={tagStyle}>InfiniBand NDR</span>
                        <span style={tagStyle}>RoCE v2</span>
                        <span style={tagStyle}>GPUDirect RDMA</span>
                        <span style={tagStyle}>ConnectX-6/7</span>
                        <span style={tagStyle}>BlueField-3</span>
                        <span style={tagStyle}>Spectrum-X</span>
                        <span style={tagStyle}>Quantum-2</span>
                        <span style={tagStyle}>NCCL</span>
                        <span style={tagStyle}>PFC/ECN</span>
                        <span style={tagStyle}>DCQCN</span>
                        <span style={tagStyle}>SR-IOV</span>
                        <span style={tagStyle}>Multus</span>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Related Resources</h2>
                    <ul style={{ ...listStyle, listStyleType: 'none', paddingLeft: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/blog/dual-network-rdma-kubernetes-gh200" style={{ color: '#3182ce', fontWeight: 500 }}>
                                Dual-Network RDMA on Kubernetes with GH200
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/blog/gpu-to-gpu-communication-across-nodes" style={{ color: '#3182ce', fontWeight: 500 }}>
                                GPU-to-GPU Communication Across Nodes
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/blog/understanding-rx-tx-network-traffic" style={{ color: '#3182ce', fontWeight: 500 }}>
                                Understanding RX/TX Network Traffic
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/blog/network-bottleneck-distributed-training" style={{ color: '#3182ce', fontWeight: 500 }}>
                                Network Bottlenecks in Distributed Training
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/case-studies/rdma-kubernetes" style={{ color: '#3182ce', fontWeight: 500 }}>
                                Case Study: 8.5x Faster Training with RDMA
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/services/distributed-training" style={{ color: '#3182ce', fontWeight: 500 }}>
                                Distributed Training Optimization Service
                            </Link>
                        </li>
                    </ul>
                </div>

                <div style={ctaSectionStyle}>
                    <h2 style={ctaTitleStyle}>Need Help with GPU Networking?</h2>
                    <p style={ctaTextStyle}>
                        Whether you are designing a new RDMA fabric or troubleshooting an existing one, we bring
                        hands-on expertise to get your GPU network running at full bandwidth.
                    </p>
                    <a
                        href="https://cal.com/baazhq"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={ctaButtonStyle}
                    >
                        Schedule a Call
                    </a>
                </div>
            </main>
        </Layout>
    )
}
