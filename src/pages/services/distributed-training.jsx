import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Distributed Training Optimization",
    "description": "Expert NCCL tuning, RDMA configuration, InfiniBand and RoCE optimization for multi-node GPU training. Achieve 8.5x faster distributed training.",
    "url": "https://baaz.dev/services/distributed-training",
    "provider": {
        "@type": "Organization",
        "name": "BaaZ",
        "url": "https://baaz.dev"
    },
    "serviceType": "GPU Infrastructure Consulting",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Distributed Training Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "NCCL Tuning & Debugging",
                    "description": "Optimize NCCL environment variables, algorithm selection, and protocol tuning for maximum collective communication throughput."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "RDMA/RoCE Configuration",
                    "description": "End-to-end RDMA over Converged Ethernet setup including PFC, ECN, DSCP marking, and switch configuration."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "GPUDirect RDMA Setup",
                    "description": "Configure GPUDirect RDMA for zero-copy GPU-to-GPU transfers across nodes, eliminating CPU bottlenecks."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Network Topology Analysis",
                    "description": "Analyze and optimize network topology, PCIe affinity, and NUMA placement for distributed training workloads."
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

export default function DistributedTraining() {
    return (
        <Layout
            title="Distributed Training Optimization"
            description="Expert NCCL tuning, RDMA configuration, InfiniBand and RoCE optimization for multi-node GPU training. Achieve 8.5x faster distributed training."
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
                    Distributed Training Optimization
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '32px' }}>
                    Expert NCCL tuning, RDMA configuration, InfiniBand and RoCE optimization for multi-node GPU training.
                    We help teams achieve linear scaling across GPU nodes by eliminating the network bottlenecks that cause
                    distributed training to underperform.
                </p>

                <div style={statBoxStyle}>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>8.5x</span>
                        <span style={statLabelStyle}>Faster Training</span>
                    </div>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>10x</span>
                        <span style={statLabelStyle}>Latency Reduction</span>
                    </div>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>95%+</span>
                        <span style={statLabelStyle}>Scaling Efficiency</span>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Why Multi-Node Training Underperforms</h2>
                    <p style={pStyle}>
                        Most organizations moving from single-GPU to multi-node distributed training expect linear performance
                        gains. Instead, they encounter a frustrating reality: scaling from 8 to 64 GPUs delivers only a 2-3x
                        speedup rather than the expected 8x improvement. The problem is almost never the GPUs themselves. It
                        is the network.
                    </p>
                    <p style={pStyle}>
                        Distributed training frameworks like PyTorch DDP, FSDP, DeepSpeed, and Megatron-LM rely on collective
                        communication operations (AllReduce, AllGather, ReduceScatter) to synchronize gradients and parameters
                        across nodes. When the network fabric connecting those nodes is misconfigured, under-provisioned, or
                        running over TCP instead of RDMA, these collective operations become the dominant bottleneck. GPUs sit
                        idle waiting for gradient synchronization while expensive compute time is wasted.
                    </p>
                    <p style={pStyle}>
                        Common symptoms include GPU utilization dropping below 50% during multi-node training, NCCL timeout
                        errors, jobs hanging during AllReduce operations, and training throughput that barely improves as you
                        add more nodes. These issues stem from a set of well-understood but frequently misdiagnosed root causes.
                    </p>

                    <h3 style={h3Style}>The Root Causes</h3>
                    <ul style={listStyle}>
                        <li>NCCL falling back to TCP sockets instead of using RDMA verbs, reducing bandwidth by 5-10x</li>
                        <li>Missing or misconfigured PFC (Priority Flow Control) causing packet drops on RoCE networks</li>
                        <li>Incorrect ECN (Explicit Congestion Notification) thresholds leading to congestion-induced retransmits</li>
                        <li>PCIe topology misalignment where GPUs and NICs are on different NUMA nodes, adding microseconds of latency per transfer</li>
                        <li>GPUDirect RDMA not enabled, forcing all inter-node traffic through CPU memory copies</li>
                        <li>Suboptimal NCCL algorithm and protocol selection for the given network topology</li>
                        <li>Switch-level misconfigurations including incorrect MTU, missing DSCP trust, or improper QoS policies</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Our Approach to Distributed Training Optimization</h2>
                    <p style={pStyle}>
                        We take a systematic, bottom-up approach to diagnosing and resolving distributed training performance
                        issues. Rather than guessing at configurations, we measure, analyze, and validate at each layer of the
                        stack.
                    </p>

                    <h3 style={h3Style}>Network Fabric Assessment</h3>
                    <p style={pStyle}>
                        We start by profiling the physical and logical network topology. This includes verifying link speeds
                        and error counters on every NIC and switch port, testing raw RDMA bandwidth with perftest tools
                        (ib_write_bw, ib_send_bw), validating PFC and ECN configuration at the switch level, and mapping the
                        PCIe topology to understand GPU-NIC affinity. This assessment alone frequently reveals the primary
                        bottleneck. We have seen cases where a single misconfigured switch port was silently downgrading an
                        entire rack to 25 Gbps instead of 100 Gbps.
                    </p>

                    <h3 style={h3Style}>NCCL Tuning</h3>
                    <p style={pStyle}>
                        NCCL (NVIDIA Collective Communications Library) has dozens of environment variables that control its
                        behavior. The right configuration depends on your specific hardware topology, network fabric, and
                        workload characteristics. We tune NCCL_ALGO to select the optimal algorithm (Ring, Tree, or
                        CollnetDirect) for your topology, configure NCCL_PROTO to choose between Simple, LL, and LL128
                        protocols based on message sizes, set NCCL_IB_HCA and NCCL_IB_GID_INDEX to ensure NCCL uses the
                        correct network interfaces, adjust NCCL_BUFFSIZE and NCCL_NTHREADS for maximum throughput, and enable
                        NCCL_NET_GDR_LEVEL for GPUDirect RDMA when hardware supports it. We validate each change with NCCL
                        tests (nccl-tests) and real training workloads to confirm measurable improvement.
                    </p>

                    <h3 style={h3Style}>RDMA and GPUDirect Configuration</h3>
                    <p style={pStyle}>
                        Enabling RDMA properly requires coordination across multiple layers. We configure the Mellanox/NVIDIA
                        ConnectX NICs with optimal firmware settings, set up RDMA-CM or raw verbs depending on the deployment,
                        enable and validate GPUDirect RDMA for zero-copy GPU-to-GPU transfers, configure peer memory modules
                        and verify GDR copy functionality, and tune RoCE-specific parameters including GID indexes, traffic
                        class, and DSCP marking. For InfiniBand environments, we configure subnet managers, partition keys,
                        and adaptive routing. For RoCE environments, we ensure lossless Ethernet is properly configured end-to-end.
                    </p>

                    <h3 style={h3Style}>Topology-Aware Optimization</h3>
                    <p style={pStyle}>
                        Modern GPU servers like the DGX H100 and HGX platforms have complex internal topologies with NVSwitch,
                        NVLink, and PCIe interconnects. We map this topology and ensure that NCCL leverages it optimally. This
                        includes configuring intra-node communication to use NVLink/NVSwitch rather than PCIe, aligning
                        inter-node communication with the optimal NIC-GPU pairs based on PCIe affinity, and setting CUDA
                        visible devices and process placement to match the physical topology. On platforms like the GH200 with
                        dual-network configurations, we configure NCCL to use separate network rails for different collective
                        operations, maximizing aggregate bandwidth.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Results We Deliver</h2>
                    <p style={pStyle}>
                        Our optimization work consistently delivers dramatic improvements in distributed training performance.
                        In a recent engagement with a computer vision company running multi-node training on bare-metal
                        Kubernetes with ConnectX-6 NICs, we achieved an 8.5x improvement in training throughput and a 10x
                        reduction in inter-node communication latency by properly configuring GPUDirect RDMA over RoCE.
                    </p>
                    <p style={pStyle}>
                        Typical results across our engagements include training throughput improvements of 3-8x when moving
                        from TCP to properly configured RDMA, inter-node latency reduction from hundreds of microseconds to
                        single-digit microseconds with GPUDirect RDMA, scaling efficiency above 90% across 8-16 nodes (up
                        from 30-50% before optimization), and elimination of NCCL timeout errors and job failures caused by
                        network issues.
                    </p>
                    <p style={pStyle}>
                        Read our detailed case study on how we achieved these results:
                    </p>
                    <p style={{ marginBottom: '16px' }}>
                        <Link to="/case-studies/rdma-kubernetes" style={{ color: '#3182ce', fontWeight: 600 }}>
                            Case Study: 8.5x Faster Distributed Training with RDMA on Kubernetes
                        </Link>
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Technologies We Work With</h2>
                    <div style={tagContainerStyle}>
                        <span style={tagStyle}>NCCL</span>
                        <span style={tagStyle}>InfiniBand</span>
                        <span style={tagStyle}>RoCE v2</span>
                        <span style={tagStyle}>GPUDirect RDMA</span>
                        <span style={tagStyle}>ConnectX-6/7</span>
                        <span style={tagStyle}>PyTorch DDP</span>
                        <span style={tagStyle}>DeepSpeed</span>
                        <span style={tagStyle}>Megatron-LM</span>
                        <span style={tagStyle}>FSDP</span>
                        <span style={tagStyle}>H100</span>
                        <span style={tagStyle}>A100</span>
                        <span style={tagStyle}>GH200</span>
                        <span style={tagStyle}>NVSwitch</span>
                        <span style={tagStyle}>Spectrum-X</span>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Related Resources</h2>
                    <ul style={{ ...listStyle, listStyleType: 'none', paddingLeft: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/blog/network-bottleneck-distributed-training" style={{ color: '#3182ce', fontWeight: 500 }}>
                                Identifying Network Bottlenecks in Distributed Training
                            </Link>
                        </li>
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
                            <Link to="/services/gpu-networking" style={{ color: '#3182ce', fontWeight: 500 }}>
                                GPU Networking & RDMA Consulting
                            </Link>
                        </li>
                    </ul>
                </div>

                <div style={ctaSectionStyle}>
                    <h2 style={ctaTitleStyle}>Struggling with Multi-Node Training Performance?</h2>
                    <p style={ctaTextStyle}>
                        Let us diagnose your distributed training bottlenecks. We will analyze your network fabric,
                        NCCL configuration, and GPU topology to deliver measurable throughput improvements.
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
