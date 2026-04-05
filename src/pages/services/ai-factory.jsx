import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Factory Setup Consulting",
    "description": "End-to-end AI factory architecture and implementation. GPU cluster design, networking, orchestration, and operations for enterprise AI infrastructure.",
    "url": "https://baaz.dev/services/ai-factory",
    "provider": {
        "@type": "Organization",
        "name": "BaaZ",
        "url": "https://baaz.dev"
    },
    "serviceType": "AI Infrastructure Consulting",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Factory Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "AI Factory Architecture Design",
                    "description": "End-to-end architecture design for AI factories including compute, networking, storage, orchestration, and operations layers."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "GPU Cluster Hardware Selection",
                    "description": "Hardware selection guidance for GPU servers, networking equipment, storage systems, and cooling infrastructure."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Orchestration Layer Setup",
                    "description": "Deploy and configure Kubernetes or Slurm-based orchestration for GPU workload management, scheduling, and multi-tenancy."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Operations & Cost Planning",
                    "description": "Operational runbooks, capacity planning, cost modeling, and team training for long-term AI factory operations."
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

const layerCardStyle = {
    background: '#f7fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '16px',
}

const layerTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#1a365d',
    marginBottom: '8px',
}

const layerDescStyle = {
    color: '#4a5568',
    lineHeight: 1.7,
    fontSize: '0.95rem',
    margin: 0,
}

export default function AiFactory() {
    return (
        <Layout
            title="AI Factory Setup Consulting"
            description="End-to-end AI factory architecture and implementation. GPU cluster design, networking, orchestration, and operations for enterprise AI infrastructure."
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
                    AI Factory Setup Consulting
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '32px' }}>
                    An AI factory is not just a GPU cluster. It is a purpose-built system that combines compute,
                    networking, storage, orchestration, and operations into a cohesive platform for continuous AI
                    development. We help organizations design and build AI factories that deliver maximum throughput
                    from day one.
                </p>

                <div style={statBoxStyle}>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>End-to-End</span>
                        <span style={statLabelStyle}>Architecture Design</span>
                    </div>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>Day 1</span>
                        <span style={statLabelStyle}>Production Ready</span>
                    </div>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>Full Stack</span>
                        <span style={statLabelStyle}>Implementation</span>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>What Is an AI Factory?</h2>
                    <p style={pStyle}>
                        The term "AI factory" describes infrastructure purpose-built for the continuous production of AI models.
                        Unlike traditional data centers optimized for web serving or databases, an AI factory is optimized for
                        a single objective: converting raw data and compute into trained models as efficiently as possible. This
                        requires a fundamentally different approach to architecture, one where every layer of the stack is
                        designed around the specific demands of GPU-accelerated workloads.
                    </p>
                    <p style={pStyle}>
                        An AI factory encompasses five critical layers: the compute layer providing GPU-dense servers with
                        high-bandwidth interconnects, the network layer providing RDMA fabric for distributed training, the
                        storage layer delivering the I/O throughput to keep GPUs fed, the orchestration layer managing workload
                        scheduling and resource allocation, and the operations layer ensuring reliability, monitoring, and
                        continuous optimization. Getting any single layer wrong creates a bottleneck that limits the entire
                        system. A cluster of H100 GPUs connected by a slow network is an expensive waste. The fastest network
                        in the world is useless if the storage cannot feed data fast enough. And without proper orchestration,
                        even perfectly configured hardware sits idle while teams wait for access.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>The Five Layers of an AI Factory</h2>

                    <div style={layerCardStyle}>
                        <div style={layerTitleStyle}>Layer 1: Compute</div>
                        <p style={layerDescStyle}>
                            GPU servers (DGX, HGX, custom builds), GPU selection (H100, H200, B200), NVLink and NVSwitch
                            for intra-node communication, CPU and system memory sizing, local NVMe for scratch and
                            checkpointing.
                        </p>
                    </div>
                    <div style={layerCardStyle}>
                        <div style={layerTitleStyle}>Layer 2: Networking</div>
                        <p style={layerDescStyle}>
                            RDMA fabric (InfiniBand or RoCE), leaf-spine topology, GPUDirect RDMA, compute and storage
                            network separation, out-of-band management network.
                        </p>
                    </div>
                    <div style={layerCardStyle}>
                        <div style={layerTitleStyle}>Layer 3: Storage</div>
                        <p style={layerDescStyle}>
                            High-throughput parallel filesystem (Lustre, GPFS, WekaFS), data staging and caching layers,
                            checkpoint storage, dataset management, GPUDirect Storage integration.
                        </p>
                    </div>
                    <div style={layerCardStyle}>
                        <div style={layerTitleStyle}>Layer 4: Orchestration</div>
                        <p style={layerDescStyle}>
                            Workload scheduler (Kubernetes or Slurm), GPU-aware scheduling, job queuing and priority,
                            multi-tenancy and resource quotas, container runtime and image management.
                        </p>
                    </div>
                    <div style={layerCardStyle}>
                        <div style={layerTitleStyle}>Layer 5: Operations</div>
                        <p style={layerDescStyle}>
                            GPU monitoring (DCGM), alerting and incident response, automated fault recovery, capacity
                            planning, cost tracking, and operational runbooks.
                        </p>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Our Approach</h2>

                    <h3 style={h3Style}>Hardware Selection and Sizing</h3>
                    <p style={pStyle}>
                        Choosing the right hardware is the first and most consequential decision in building an AI factory.
                        We help you navigate the complex landscape of GPU server options, networking equipment, and storage
                        systems. For GPU servers, we evaluate the tradeoffs between DGX systems (turnkey but expensive), HGX
                        reference designs from OEMs (lower cost, more flexibility), and custom builds (maximum flexibility,
                        highest operational burden). We consider your workload requirements: large language model training
                        demands maximum GPU memory and inter-node bandwidth, while inference serving may benefit from a larger
                        number of smaller GPUs. We also factor in power and cooling constraints, which increasingly drive
                        architecture decisions as GPU power consumption continues to rise. A single H100 SXM draws 700W. A
                        rack of eight DGX H100 systems consumes over 80 kW, requiring liquid cooling in most environments.
                    </p>

                    <h3 style={h3Style}>Network Architecture</h3>
                    <p style={pStyle}>
                        The network is the single most impactful infrastructure decision after GPU selection. We design GPU
                        cluster networks using rail-optimized topologies where each GPU in a node connects to a dedicated
                        network rail through its own NIC, providing maximum per-GPU bandwidth and eliminating contention.
                        For InfiniBand deployments, we design fat-tree or dragonfly topologies with NVIDIA Quantum switches,
                        configure the subnet manager for optimal routing, and enable adaptive routing for load balancing.
                        For RoCE deployments, we design leaf-spine fabrics with proper oversubscription ratios, configure
                        lossless Ethernet with PFC and ECN, and implement ECMP for multi-path load balancing. We always
                        separate compute traffic (RDMA for training) from storage traffic (data loading) on independent
                        network fabrics to prevent interference.
                    </p>

                    <h3 style={h3Style}>Orchestration: Kubernetes vs. Slurm</h3>
                    <p style={pStyle}>
                        The choice between Kubernetes and Slurm for GPU workload orchestration depends on your team's
                        existing expertise, workload mix, and operational requirements. Slurm has been the standard scheduler
                        in HPC and AI research for years. It excels at batch job scheduling, has native support for MPI and
                        multi-node jobs, and is well-understood by the research community. Kubernetes has become the
                        enterprise standard for container orchestration and is increasingly adopted for GPU workloads. It
                        offers a richer ecosystem of tooling, better support for mixed workloads (training plus inference
                        plus data pipelines), and more mature multi-tenancy capabilities.
                    </p>
                    <p style={pStyle}>
                        We implement either or both, depending on your needs. For Kubernetes GPU clusters, we deploy the
                        full NVIDIA GPU stack including GPU Operator, Network Operator, and advanced schedulers like KAI
                        Scheduler for topology-aware GPU scheduling. For Slurm clusters, we configure Slurm with
                        gres/gpu support, Pyxis for container integration, and Enroot for rootless container execution.
                        Many organizations run both: Kubernetes for inference serving and CI/CD, with Slurm for large-scale
                        training jobs.
                    </p>

                    <h3 style={h3Style}>Monitoring and Operations</h3>
                    <p style={pStyle}>
                        An AI factory requires purpose-built monitoring that goes far beyond standard infrastructure
                        observability. We deploy DCGM-based GPU monitoring with Prometheus and Grafana, implement XID error
                        detection and automated GPU fault recovery, build capacity planning dashboards that track utilization
                        trends and inform procurement decisions, create operational runbooks for common failure scenarios, and
                        set up cost tracking and chargeback systems for multi-tenant environments. We also establish SLOs for
                        GPU infrastructure availability and training job success rates, giving you quantifiable targets for
                        infrastructure reliability.
                    </p>

                    <h3 style={h3Style}>Cost Planning and TCO Analysis</h3>
                    <p style={pStyle}>
                        Building an AI factory is a significant capital investment. We provide detailed TCO (Total Cost of
                        Ownership) analysis that covers hardware procurement costs including GPUs, networking, storage, and
                        racks, facility costs including power, cooling, and space, operational costs including staffing,
                        maintenance contracts, and spare inventory, and comparison against cloud GPU pricing for your specific
                        workload patterns. This analysis helps you make an informed build-vs-buy decision and, if you decide
                        to build, ensures the investment is sized correctly for your needs.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Technologies We Work With</h2>
                    <div style={tagContainerStyle}>
                        <span style={tagStyle}>H100</span>
                        <span style={tagStyle}>H200</span>
                        <span style={tagStyle}>B200</span>
                        <span style={tagStyle}>DGX</span>
                        <span style={tagStyle}>HGX</span>
                        <span style={tagStyle}>InfiniBand</span>
                        <span style={tagStyle}>RoCE</span>
                        <span style={tagStyle}>Spectrum-X</span>
                        <span style={tagStyle}>Kubernetes</span>
                        <span style={tagStyle}>Slurm</span>
                        <span style={tagStyle}>GPU Operator</span>
                        <span style={tagStyle}>Lustre</span>
                        <span style={tagStyle}>WekaFS</span>
                        <span style={tagStyle}>DCGM</span>
                        <span style={tagStyle}>Prometheus</span>
                        <span style={tagStyle}>Grafana</span>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Related Resources</h2>
                    <ul style={{ ...listStyle, listStyleType: 'none', paddingLeft: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/blog/gpu-to-gpu-communication-across-nodes" style={{ color: '#3182ce', fontWeight: 500 }}>
                                GPU-to-GPU Communication Across Nodes
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/blog/network-bottleneck-distributed-training" style={{ color: '#3182ce', fontWeight: 500 }}>
                                Network Bottlenecks in Distributed Training
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/blog/gpu-power-management" style={{ color: '#3182ce', fontWeight: 500 }}>
                                GPU Power Management
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
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/services/gpu-networking" style={{ color: '#3182ce', fontWeight: 500 }}>
                                GPU Networking & RDMA Consulting
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/services/gpu-kubernetes" style={{ color: '#3182ce', fontWeight: 500 }}>
                                GPU Kubernetes Consulting
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/services/gpu-monitoring" style={{ color: '#3182ce', fontWeight: 500 }}>
                                GPU Monitoring & Observability
                            </Link>
                        </li>
                    </ul>
                </div>

                <div style={ctaSectionStyle}>
                    <h2 style={ctaTitleStyle}>Planning an AI Factory?</h2>
                    <p style={ctaTextStyle}>
                        Whether you are building from scratch or scaling an existing cluster into a full AI factory,
                        we bring the expertise to get every layer right. Let us help you avoid the expensive mistakes.
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
