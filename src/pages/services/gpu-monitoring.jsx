import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import FAQSection from "@site/src/components/FAQSection"
import styles from "./styles.module.css"

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GPU Monitoring & Observability",
    "provider": { "@type": "Organization", "name": "BaaZ", "url": "https://baaz.dev" },
    "description": "GPU cluster monitoring with DCGM, Prometheus, and Grafana. XID error detection, health dashboards, alerting, and automated fault recovery.",
    "url": "https://baaz.dev/services/gpu-monitoring",
}

const faqItems = [
    {
        question: "What is DCGM?",
        answer: "NVIDIA DCGM (Data Center GPU Manager) is the official toolkit for GPU telemetry, diagnostics, and policy management. It exposes per-GPU utilization, memory, temperature, power, ECC errors, XID events, and PCIe metrics through a Prometheus exporter. It's the reliable source of truth for GPU health.",
    },
    {
        question: "Which GPU metrics matter for reliability?",
        answer: "SM utilization, memory bandwidth utilization, XID errors, ECC DBE/SBE counts, power draw, thermal throttling events, PCIe replay counts, and NVLink error counters. For training, add NCCL timeouts and AllReduce duration. These catch the majority of hardware and driver issues before jobs crash.",
    },
    {
        question: "What is an XID error?",
        answer: "XID errors are NVIDIA driver events reported via the kernel log when something goes wrong — ECC failures, GPU falls off the bus, hardware errors, timeouts. Some are transient, others (like XID 79) are fatal and require node replacement. Mature monitoring alerts on these and automates node draining for critical codes.",
    },
    {
        question: "How fast can GPU observability detect failures?",
        answer: "With DCGM scraping at 5-15 second intervals and proper alerts, most failures — thermal throttling, ECC storms, XID events, PCIe link downgrade — are detected within a minute. Fail-fast controllers can drain the affected pod automatically, so jobs restart on healthy hardware.",
    },
    {
        question: "Can you integrate with our existing monitoring stack?",
        answer: "Yes. DCGM exports Prometheus metrics, so it drops into any stack built on Prometheus, Grafana, VictoriaMetrics, Mimir, Datadog, or Grafana Cloud. We also integrate with PagerDuty, Opsgenie, Loki, and Elastic, and build GPU-specific Grafana dashboards on top of your existing setup.",
    },
]

export default function GPUMonitoring() {
    return (
        <Layout
            title="GPU Monitoring & Observability"
            description="Production GPU monitoring with DCGM, Prometheus, and Grafana. XID error detection, automated fault recovery, GPU health dashboards. Catch failures before jobs crash."
        >
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Head>
            <Navbar />
            <main className={styles.subPage}>
                <span className={styles.subLabel}>Service</span>
                <h1 className={styles.subTitle}>GPU Monitoring & Observability</h1>
                <p className={styles.subLead}>
                    A 64-GPU training job runs 18 hours, then crashes on an XID error from one bad GPU.
                    Without monitoring, your team restarts on the same node and loses another day. With
                    proper observability, the failing GPU is flagged and drained in under 60 seconds.
                </p>

                <div className={styles.metricsRow}>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>100+</span>
                        <span className={styles.metricBoxLabel}>GPU Metrics Tracked</span>
                    </div>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>&lt;60s</span>
                        <span className={styles.metricBoxLabel}>Fault Detection</span>
                    </div>
                    <div className={styles.metricBox}>
                        <span className={styles.metricBoxValue}>99.9%</span>
                        <span className={styles.metricBoxLabel}>Uptime Target</span>
                    </div>
                </div>

                <h2 className={styles.subH2}>What We Do</h2>
                <ul className={styles.subList}>
                    <li><strong>DCGM metrics stack</strong> — DCGM Exporter deployment, custom field groups per workload type, collection intervals tuned for training vs inference</li>
                    <li><strong>Prometheus integration</strong> — ServiceMonitor/PodMonitor setup, recording rules for cluster aggregations, remote write to Thanos/Cortex for large clusters</li>
                    <li><strong>Grafana dashboards</strong> — Cluster overview, per-node GPU detail, job performance correlation, hardware health trends, capacity planning</li>
                    <li><strong>XID error detection</strong> — Real-time XID monitoring from kernel logs and DCGM, severity classification, automated node drain for critical errors (31, 43, 45, 48, 64, 69, 74, 79, 92, 119)</li>
                    <li><strong>GPU health monitoring</strong> — ECC error trend tracking (predicts failures days in advance), thermal throttling detection, PCIe link speed degradation alerts, NVLink error counters</li>
                    <li><strong>Automated recovery</strong> — Detect fault → cordon node → attempt GPU reset → run DCGM diagnostics → uncordon or escalate. Node Problem Detector integration</li>
                    <li><strong>Alerting rules</strong> — Critical XID errors, ECC double-bit errors, thermal breaches, stuck/idle workloads, NVLink errors, PCIe bandwidth degradation, OOM prevention</li>
                </ul>

                <h2 className={styles.subH2}>Proof</h2>
                <p className={styles.subP}>
                    We've deployed GPU monitoring stacks across bare-metal and cloud Kubernetes clusters. Our
                    monitoring setup caught a degrading GPU (rising single-bit ECC errors) 72 hours before it
                    would have caused a job failure — the GPU was drained and replaced during a maintenance
                    window with zero training disruption.
                </p>

                <h2 className={styles.subH2}>How We Work</h2>
                <div className={styles.processRow}>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>1</div>
                        <p className={styles.processBoxTitle}>Assess</p>
                        <p className={styles.processBoxDesc}>Audit current monitoring gaps. Most clusters have zero GPU observability.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>2</div>
                        <p className={styles.processBoxTitle}>Deploy</p>
                        <p className={styles.processBoxDesc}>DCGM Exporter, Prometheus, Grafana, alerting, recovery automation.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>3</div>
                        <p className={styles.processBoxTitle}>Tune</p>
                        <p className={styles.processBoxDesc}>Adjust thresholds and collection intervals for your SLOs.</p>
                    </div>
                    <div className={styles.processBox}>
                        <div className={styles.processBoxNum}>4</div>
                        <p className={styles.processBoxTitle}>Transfer</p>
                        <p className={styles.processBoxDesc}>Dashboards, runbooks, alert playbooks, on-call procedures.</p>
                    </div>
                </div>

                <h2 className={styles.subH2}>Technologies</h2>
                <div className={styles.techTagsRow}>
                    {["DCGM", "DCGM Exporter", "Prometheus", "Grafana", "Alertmanager", "Thanos", "Node Problem Detector", "GPU Operator", "nvidia-smi", "Kubernetes", "Slurm"].map(t => (
                        <span key={t} className={styles.subTag}>{t}</span>
                    ))}
                </div>

                <h2 className={styles.subH2}>Related</h2>
                <ul className={styles.relatedList}>
                    <li><Link to="/blog/understanding-power-management-in-gpu-via-pcie" className={styles.subLink}>GPU PCIe Power Management →</Link></li>
                    <li><Link to="/blog/understanding-rx-tx-network-traffic-direction" className={styles.subLink}>RX vs TX Network Traffic Explained →</Link></li>
                    <li><Link to="/services/gpu-kubernetes" className={styles.subLink}>GPU Kubernetes Consulting →</Link></li>
                    <li><Link to="/services/ai-factory" className={styles.subLink}>AI Factory Setup →</Link></li>
                </ul>

                <FAQSection items={faqItems} />

                <div className={styles.subCta}>
                    <h2 className={styles.subCtaTitle}>Tired of GPU Failures Going Undetected?</h2>
                    <p className={styles.subCtaText}>
                        We build monitoring that catches GPU issues before they crash your training jobs.
                    </p>
                    <a href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer" className={styles.subCtaButton}>
                        Schedule a Call
                    </a>
                </div>
            </main>
        </Layout>
    )
}
