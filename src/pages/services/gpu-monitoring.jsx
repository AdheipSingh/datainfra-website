import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GPU Monitoring & Observability",
    "description": "GPU cluster monitoring with DCGM, Prometheus, and Grafana. Health monitoring, alerting, fault detection, and automated recovery for GPU infrastructure.",
    "url": "https://baaz.dev/services/gpu-monitoring",
    "provider": {
        "@type": "Organization",
        "name": "BaaZ",
        "url": "https://baaz.dev"
    },
    "serviceType": "GPU Monitoring Consulting",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GPU Monitoring Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "DCGM Metrics Pipeline",
                    "description": "Deploy and configure NVIDIA DCGM Exporter for comprehensive GPU metrics collection including utilization, memory, temperature, and error counts."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Prometheus & Grafana Dashboards",
                    "description": "Build production-grade GPU monitoring dashboards with Prometheus for metrics storage and Grafana for visualization and alerting."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "GPU Health Monitoring & XID Detection",
                    "description": "Implement GPU health checks, XID error detection, ECC error tracking, and thermal monitoring with automated alerting."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Automated Recovery",
                    "description": "Build automated GPU fault recovery workflows including drain, reset, revalidation, and workload rescheduling."
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

const calloutStyle = {
    background: '#fffbeb',
    border: '1px solid #fcd34d',
    borderRadius: '8px',
    padding: '20px 24px',
    margin: '24px 0',
    color: '#92400e',
    fontSize: '0.95rem',
    lineHeight: 1.7,
}

export default function GpuMonitoring() {
    return (
        <Layout
            title="GPU Monitoring & Observability"
            description="GPU cluster monitoring with DCGM, Prometheus, and Grafana. Health monitoring, alerting, fault detection, and automated recovery for GPU infrastructure."
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
                    GPU Monitoring & Observability
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '32px' }}>
                    GPU infrastructure fails silently. Training jobs hang, GPUs degrade, and utilization drops -- often
                    without anyone knowing until hours of compute time are wasted. We build monitoring systems that give
                    you complete visibility into GPU health, performance, and utilization.
                </p>

                <div style={statBoxStyle}>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>100+</span>
                        <span style={statLabelStyle}>GPU Metrics Tracked</span>
                    </div>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>{'<'}60s</span>
                        <span style={statLabelStyle}>Fault Detection</span>
                    </div>
                    <div style={statItemStyle}>
                        <span style={statValueStyle}>99.9%</span>
                        <span style={statLabelStyle}>Uptime Target</span>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>The Cost of Blind GPU Operations</h2>
                    <p style={pStyle}>
                        GPU hardware is the most expensive component of any AI infrastructure. A single DGX H100 system costs
                        over $300,000. Yet most organizations operate their GPU clusters with less visibility than they have
                        into a $50/month web server. Standard Kubernetes monitoring tools like Prometheus node-exporter and
                        cAdvisor provide CPU, memory, and disk metrics but know nothing about GPU-specific health indicators.
                    </p>
                    <p style={pStyle}>
                        Without proper GPU monitoring, organizations face several costly problems. Training jobs fail after
                        hours of computation because a GPU developed ECC errors that went undetected. Utilization across the
                        cluster averages 30% because no one can see which GPUs are idle and why. Thermal throttling silently
                        reduces performance by 20-40% without any alert. Hardware defects cause intermittent failures that are
                        nearly impossible to debug without historical metrics. And when a job does fail, the lack of telemetry
                        means engineers spend hours or days reproducing and diagnosing issues that proper monitoring would have
                        caught immediately.
                    </p>

                    <div style={calloutStyle}>
                        <strong>Real scenario:</strong> A 64-GPU training job runs for 18 hours before crashing due to an XID
                        error on a single GPU. Without monitoring, the team restarts the job on the same node, hits the same
                        error 12 hours later, and loses another day of compute. With DCGM monitoring and XID detection, the
                        failing GPU would have been flagged and drained within 60 seconds of the first error.
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Our Monitoring Stack</h2>

                    <h3 style={h3Style}>DCGM Metrics Collection</h3>
                    <p style={pStyle}>
                        NVIDIA Data Center GPU Manager (DCGM) is the foundation of GPU observability. We deploy DCGM Exporter
                        across your cluster to collect over 100 GPU metrics at configurable intervals. The key metrics we
                        track include GPU and memory utilization (DCGM_FI_DEV_GPU_UTIL, DCGM_FI_DEV_MEM_COPY_UTIL) for
                        understanding workload efficiency, GPU memory usage (DCGM_FI_DEV_FB_USED, DCGM_FI_DEV_FB_FREE) for
                        capacity planning and OOM prevention, temperature and power (DCGM_FI_DEV_GPU_TEMP,
                        DCGM_FI_DEV_POWER_USAGE) for thermal management and power budgeting, SM clock and memory clock
                        frequencies for detecting thermal throttling, PCIe throughput (DCGM_FI_DEV_PCIE_TX_THROUGHPUT,
                        DCGM_FI_DEV_PCIE_RX_THROUGHPUT) for identifying data transfer bottlenecks, NVLink bandwidth and
                        error counters for inter-GPU communication health, and ECC error counts (single-bit and double-bit)
                        for predicting hardware failures.
                    </p>
                    <p style={pStyle}>
                        We configure DCGM with custom field groups tailored to your workload. Training clusters need different
                        metrics than inference serving clusters. We also set appropriate collection intervals -- high-frequency
                        (1-second) for debugging sessions and standard (10-15 second) for long-term monitoring to balance
                        granularity with storage costs.
                    </p>

                    <h3 style={h3Style}>Prometheus Integration</h3>
                    <p style={pStyle}>
                        We integrate DCGM Exporter with Prometheus for metrics storage, query, and alerting. Our Prometheus
                        configuration includes ServiceMonitor or PodMonitor resources for automatic DCGM Exporter discovery,
                        recording rules that pre-compute common aggregations like per-node GPU utilization averages and
                        cluster-wide memory usage, alerting rules for critical GPU conditions (detailed in the next section),
                        and proper retention and storage configuration sized for your cluster. For large clusters with hundreds
                        or thousands of GPUs, we configure Prometheus with remote write to long-term storage solutions like
                        Thanos or Cortex to handle the high cardinality of per-GPU metrics.
                    </p>

                    <h3 style={h3Style}>Grafana Dashboards</h3>
                    <p style={pStyle}>
                        We build purpose-built Grafana dashboards for different personas and use cases. The Cluster Overview
                        dashboard shows aggregate GPU utilization, memory usage, and health status across the entire cluster
                        at a glance. The Node Detail dashboard drills into individual nodes showing per-GPU metrics, PCIe
                        topology, and NVLink status. The Job Performance dashboard correlates GPU metrics with training job
                        metadata to identify which jobs are underutilizing resources. The Hardware Health dashboard tracks ECC
                        errors, temperature trends, clock frequencies, and power consumption to predict failures before they
                        impact workloads. And the Capacity Planning dashboard shows utilization trends over time to inform
                        procurement and scheduling decisions.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>XID Error Detection and GPU Health Monitoring</h2>
                    <p style={pStyle}>
                        XID errors are NVIDIA's error reporting mechanism for GPU hardware and driver issues. They range from
                        benign (XID 13: graphics engine exception, often a user-code bug) to critical (XID 79: GPU fallen off
                        the bus, requiring a node reboot). We implement comprehensive XID monitoring that detects XID errors
                        in real time from kernel logs and DCGM, classifies them by severity to determine the appropriate
                        response, alerts the operations team with actionable context including the affected GPU, node, and
                        running workload, and triggers automated remediation for known-recoverable errors.
                    </p>
                    <p style={pStyle}>
                        Beyond XID errors, we monitor the broader indicators of GPU health. Rising ECC error rates often
                        precede GPU failure by days or weeks, giving you time to migrate workloads before a crash. Clock
                        frequency drops indicate thermal throttling that may point to cooling system issues. And PCIe link
                        speed degradation can indicate a hardware problem with the GPU, riser card, or motherboard.
                    </p>

                    <h3 style={h3Style}>Alerting Rules We Implement</h3>
                    <ul style={listStyle}>
                        <li>Critical XID errors (31, 43, 45, 48, 64, 69, 74, 79, 92, 119) trigger immediate node drain and page the on-call engineer</li>
                        <li>ECC double-bit errors trigger GPU isolation and workload migration</li>
                        <li>GPU temperature exceeding thermal threshold triggers throttling alerts</li>
                        <li>GPU utilization below 10% for extended periods flags potential stuck or idle workloads</li>
                        <li>NVLink errors exceeding threshold trigger investigation alerts</li>
                        <li>PCIe bandwidth degradation alerts when link trains at lower speed than expected</li>
                        <li>Memory utilization approaching 100% triggers OOM prevention warnings</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Automated Recovery</h2>
                    <p style={pStyle}>
                        Monitoring is only half the equation. When a GPU fails, the system needs to respond automatically to
                        minimize the blast radius and recover as quickly as possible. We implement automated recovery workflows
                        that detect the fault through DCGM metrics or XID error monitoring, cordon and drain the affected node
                        to prevent new workloads from being scheduled on it, attempt GPU reset if the error is recoverable,
                        run DCGM diagnostics to validate GPU health after reset, uncordon the node if diagnostics pass or
                        escalate to human operators if they fail, and notify the team with a complete incident summary
                        including root cause, affected workloads, and recovery status.
                    </p>
                    <p style={pStyle}>
                        On Kubernetes, we implement this using a combination of custom controllers, node problem detectors,
                        and integration with the GPU Operator health check capabilities. For Slurm environments, we integrate
                        with the Slurm health check framework and prolog/epilog scripts.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Technologies We Work With</h2>
                    <div style={tagContainerStyle}>
                        <span style={tagStyle}>DCGM</span>
                        <span style={tagStyle}>DCGM Exporter</span>
                        <span style={tagStyle}>Prometheus</span>
                        <span style={tagStyle}>Grafana</span>
                        <span style={tagStyle}>Alertmanager</span>
                        <span style={tagStyle}>Thanos</span>
                        <span style={tagStyle}>Node Problem Detector</span>
                        <span style={tagStyle}>GPU Operator</span>
                        <span style={tagStyle}>nvidia-smi</span>
                        <span style={tagStyle}>Kubernetes</span>
                        <span style={tagStyle}>Slurm</span>
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>Related Resources</h2>
                    <ul style={{ ...listStyle, listStyleType: 'none', paddingLeft: 0 }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/blog/gpu-power-management" style={{ color: '#3182ce', fontWeight: 500 }}>
                                GPU Power Management and Monitoring
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/services/gpu-kubernetes" style={{ color: '#3182ce', fontWeight: 500 }}>
                                GPU Kubernetes Consulting Service
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link to="/services/ai-factory" style={{ color: '#3182ce', fontWeight: 500 }}>
                                AI Factory Setup Consulting
                            </Link>
                        </li>
                    </ul>
                </div>

                <div style={ctaSectionStyle}>
                    <h2 style={ctaTitleStyle}>Tired of GPU Failures Going Undetected?</h2>
                    <p style={ctaTextStyle}>
                        We build monitoring systems that catch GPU issues before they crash your training jobs.
                        Get complete visibility into your GPU infrastructure with production-grade observability.
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
