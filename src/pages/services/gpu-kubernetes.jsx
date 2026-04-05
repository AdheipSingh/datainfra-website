import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GPU Kubernetes Consulting",
    "description": "Kubernetes GPU infrastructure consulting: GPU Operator, KAI Scheduler, MIG, fractional GPU sharing, EKS and GKE GPU clusters for AI workloads.",
    "url": "https://baaz.dev/services/gpu-kubernetes",
    "provider": {
        "@type": "Organization",
        "name": "BaaZ",
        "url": "https://baaz.dev"
    },
    "serviceType": "GPU Kubernetes Consulting",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GPU Kubernetes Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "GPU Operator & Device Plugin Setup",
                    "description": "Deploy and configure NVIDIA GPU Operator, device plugins, and container runtime for Kubernetes GPU workloads."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "GPU Scheduling & Multi-Tenancy",
                    "description": "Configure KAI Scheduler, MIG partitioning, time-slicing, and fair-share scheduling for multi-tenant GPU clusters."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Managed Kubernetes GPU Clusters",
                    "description": "Design and implement GPU clusters on EKS, GKE, AKS, or bare-metal Kubernetes with proper networking and storage."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Training Job Orchestration",
                    "description": "Set up Kubeflow Training Operator, Volcano, or custom controllers for distributed training job management on Kubernetes."
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

export default function GpuKubernetes() {
    return (
        <Layout
            title="GPU Kubernetes Consulting"
            description="Kubernetes GPU infrastructure consulting: GPU Operator, KAI Scheduler, MIG, fractional GPU sharing, EKS and GKE GPU clusters for AI workloads."
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
                    GPU Kubernetes Consulting
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '32px' }}>
                    Running GPU workloads on Kubernetes requires specialized expertise that goes far beyond standard
                    container orchestration. We help teams design, deploy, and operate production GPU clusters on
                    Kubernetes -- whether on EKS, GKE, AKS, or bare metal.
                </p>

                <div style={statBoxStyle}>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>70%+</span>
                        <span style={statLabelStyle}>GPU Utilization</span>
                    </div>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>3x</span>
                        <span style={statLabelStyle}>Better Resource Efficiency</span>
                    </div>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>Zero</span>
                        <span style={statLabelStyle}>Scheduling Conflicts</span>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>The Challenge of GPUs on Kubernetes</h2>
                    <p style={pStyle}>
                        Kubernetes was designed for stateless web services, not GPU-intensive AI workloads. While the
                        Kubernetes ecosystem has evolved to support GPUs, getting it right requires deep understanding of
                        device plugins, resource scheduling, network configuration, and storage systems that most platform
                        teams simply do not have. The result is GPU clusters running at 20-30% utilization, teams waiting
                        days for GPU access, and training jobs failing due to misconfigured infrastructure.
                    </p>
                    <p style={pStyle}>
                        The core challenges include GPU resource fragmentation where expensive accelerators sit idle while
                        other teams queue for access, lack of proper scheduling that understands GPU topology and affinity,
                        missing observability into GPU health and utilization, networking that does not support the RDMA
                        requirements of distributed training, and storage systems that cannot feed data fast enough to keep
                        GPUs busy. Solving these requires a purpose-built approach to Kubernetes GPU infrastructure.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>What We Deliver</h2>

                    <h3 style={h3Style}>GPU Operator and Device Plugin Setup</h3>
                    <p style={pStyle}>
                        The NVIDIA GPU Operator automates the management of GPU drivers, container runtime, device plugins,
                        and monitoring components on Kubernetes. We deploy and configure the full GPU Operator stack including
                        driver containers for consistent driver versions across nodes, the NVIDIA Container Toolkit for GPU
                        access in containers, the Kubernetes Device Plugin for GPU resource advertising, DCGM Exporter for
                        GPU metrics in Prometheus, and GPU Feature Discovery for topology-aware scheduling labels. We handle
                        the edge cases that cause failures in production: driver version conflicts, containerd vs CRI-O
                        runtime differences, secure boot compatibility, and upgrade strategies that avoid disrupting running
                        workloads.
                    </p>

                    <h3 style={h3Style}>GPU Scheduling with KAI Scheduler</h3>
                    <p style={pStyle}>
                        The default Kubernetes scheduler treats GPUs as simple integer resources with no understanding of
                        topology, affinity, or fairness. For multi-tenant GPU clusters, you need a scheduler that understands
                        GPU-specific requirements. We implement advanced GPU scheduling using KAI Scheduler or similar
                        solutions that provide topology-aware placement ensuring GPUs within a job are on the same NVLink
                        domain, fair-share scheduling across teams with guaranteed minimums and burst capacity, gang
                        scheduling for distributed training jobs that require all-or-nothing allocation, preemption policies
                        that allow high-priority jobs to reclaim resources from lower-priority workloads, and queue management
                        with priority classes and resource quotas per namespace or team.
                    </p>

                    <h3 style={h3Style}>MIG and Fractional GPU Sharing</h3>
                    <p style={pStyle}>
                        Not every workload needs a full GPU. Development, testing, inference serving, and data preprocessing
                        can often run on a fraction of a GPU. We configure Multi-Instance GPU (MIG) on A100 and H100 GPUs to
                        partition a single GPU into isolated instances with dedicated compute, memory, and memory bandwidth.
                        We also set up time-slicing for GPUs that do not support MIG, enabling multiple workloads to share a
                        GPU with configurable time quotas. The right partitioning strategy depends on your workload mix. We
                        analyze your actual GPU usage patterns to recommend the optimal MIG profiles and sharing policies that
                        maximize utilization without impacting performance-sensitive workloads.
                    </p>

                    <h3 style={h3Style}>EKS, GKE, and Bare-Metal GPU Clusters</h3>
                    <p style={pStyle}>
                        Each deployment environment has its own set of challenges and best practices. On Amazon EKS, we
                        configure GPU node groups with proper AMIs, EFA networking for distributed training, and integration
                        with FSx for Lustre or S3 for training data. On Google GKE, we set up GPU node pools with the correct
                        machine types, configure multi-networking for RDMA, and integrate with GCS and Filestore. For bare-metal
                        deployments, we handle everything from the OS and driver installation through the full Kubernetes stack
                        including Calico or Cilium networking, MetalLB for load balancing, and Rook-Ceph or similar for storage.
                        Bare metal provides the best performance for GPU workloads, especially when combined with RDMA networking
                        and GPUDirect storage.
                    </p>

                    <h3 style={h3Style}>Multi-Tenancy and Resource Management</h3>
                    <p style={pStyle}>
                        Running multiple teams on a shared GPU cluster requires proper isolation and resource management. We
                        implement namespace-based tenancy with GPU resource quotas, RBAC policies that restrict GPU access to
                        authorized teams, network policies for workload isolation, priority classes that ensure production
                        inference workloads are never preempted by development jobs, and cost allocation through GPU usage
                        tracking and chargeback reporting. This enables organizations to consolidate GPU resources into a
                        shared pool that delivers higher utilization and lower costs than dedicated per-team clusters.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Training Job Orchestration</h2>
                    <p style={pStyle}>
                        Running distributed training jobs on Kubernetes requires orchestration beyond what standard Kubernetes
                        controllers provide. We set up and configure the Kubeflow Training Operator for PyTorchJob, TFJob, and
                        MPIJob resources, Volcano batch scheduler for gang scheduling and queue management, custom job
                        controllers for organization-specific workflows, and integration with experiment tracking systems like
                        MLflow and Weights & Biases. We ensure that distributed training jobs are properly configured with the
                        correct number of workers, appropriate resource requests, RDMA-capable network interfaces, and shared
                        storage volumes for checkpointing.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Technologies We Work With</h2>
                    <div style={tagContainerStyle}>
                        <span style={tagStyle}>Kubernetes</span>
                        <span style={tagStyle}>GPU Operator</span>
                        <span style={tagStyle}>KAI Scheduler</span>
                        <span style={tagStyle}>MIG</span>
                        <span style={tagStyle}>Time-Slicing</span>
                        <span style={tagStyle}>EKS</span>
                        <span style={tagStyle}>GKE</span>
                        <span style={tagStyle}>AKS</span>
                        <span style={tagStyle}>Kubeflow</span>
                        <span style={tagStyle}>Volcano</span>
                        <span style={tagStyle}>Network Operator</span>
                        <span style={tagStyle}>Multus</span>
                        <span style={tagStyle}>SR-IOV</span>
                        <span style={tagStyle}>Helm</span>
                        <span style={tagStyle}>ArgoCD</span>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Related Resources</h2>
                    <ul style={{ ...listStyle, listStyleType: 'none', paddingLeft: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/blog/demystify-helm-operator" style={{ color: '#3182ce', fontWeight: 500 }}>
                                Demystifying Helm and Operators for Kubernetes
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/case-studies/rdma-kubernetes" style={{ color: '#3182ce', fontWeight: 500 }}>
                                Case Study: RDMA on Bare-Metal Kubernetes
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/services/distributed-training" style={{ color: '#3182ce', fontWeight: 500 }}>
                                Distributed Training Optimization Service
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/services/gpu-monitoring" style={{ color: '#3182ce', fontWeight: 500 }}>
                                GPU Monitoring & Observability Service
                            </Link>
                        </li>
                    </ul>
                </div>

                <div style={ctaSectionStyle}>
                    <h2 style={ctaTitleStyle}>Need Help Running GPUs on Kubernetes?</h2>
                    <p style={ctaTextStyle}>
                        Whether you are building a new GPU cluster or optimizing an existing one, we can help you get
                        Kubernetes GPU infrastructure right the first time.
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
