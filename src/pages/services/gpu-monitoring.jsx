import React from "react"
import ServiceDetail from "@site/src/components/ServiceDetail"

export default function GPUMonitoring() {
    return (
        <ServiceDetail
            seoTitle="GPU Observability & Reliability | BaaZ"
            seoDescription="Production GPU monitoring with DCGM, Prometheus and Grafana. XID error detection, automated fault recovery and GPU health dashboards. Catch failures before jobs crash."
            breadcrumb="GPU Observability & Reliability"
            h1="GPU Observability & Reliability"
            lead="A large training job runs overnight, then crashes on an XID error from one bad GPU. Without monitoring, your team restarts on the same node and loses another day. With proper observability, the failing GPU is flagged and drained quickly."
            valueProps={[
                { title: "One source of truth", body: "DCGM telemetry into Prometheus and Grafana, so per-GPU health, utilization and errors live in one place your on-call can trust." },
                { title: "Catch it before the crash", body: "XID and ECC trends flag a degrading GPU while the job is still healthy, so hardware is drained on your schedule, not the job's." },
                { title: "Recover automatically", body: "Fault detection wired to cordon, GPU reset, DCGM diagnostics and escalation, so jobs restart on healthy hardware." },
            ]}
            whatWeDo={{
                heading: "See every GPU, catch every fault.",
                lead: "From the exporter on each node to the alert that pages your on-call, we build the reliability layer around your cluster.",
                rows: [
                    { n: "01", title: "DCGM metrics stack", body: "DCGM Exporter deployment, custom field groups per workload type, and collection intervals tuned for training versus inference." },
                    { n: "02", title: "Prometheus integration", body: "ServiceMonitor and PodMonitor setup, recording rules for cluster aggregations, and remote write to Thanos or Cortex for large clusters." },
                    { n: "03", title: "Grafana dashboards", body: "Cluster overview, per-node GPU detail, job performance correlation, hardware health trends and capacity planning." },
                    { n: "04", title: "XID & health detection", body: "Real-time XID monitoring from kernel logs and DCGM with severity classification and automated node drain for critical codes, plus ECC trend tracking, thermal throttling and PCIe link degradation alerts." },
                    { n: "05", title: "Automated recovery", body: "Detect fault, cordon node, attempt GPU reset, run DCGM diagnostics, then uncordon or escalate, with Node Problem Detector integration and tuned alerting rules." },
                ],
            }}
            steps={[
                { n: "01", title: "Assess", body: "Audit current monitoring gaps. Most clusters have zero GPU observability." },
                { n: "02", title: "Deploy", body: "DCGM Exporter, Prometheus, Grafana, alerting and recovery automation." },
                { n: "03", title: "Tune", body: "Adjust thresholds and collection intervals for your SLOs." },
                { n: "04", title: "Transfer", body: "Dashboards, runbooks, alert playbooks and on-call procedures." },
            ]}
            tech={["DCGM", "DCGM Exporter", "Prometheus", "Grafana", "Alertmanager", "Thanos", "Node Problem Detector", "GPU Operator", "nvidia-smi", "Kubernetes", "Slurm"]}
            related={[
                { tag: "Blog", title: "Understanding Power Management in GPUs via PCIe", to: "/blog/understanding-power-management-in-gpu-via-pcie" },
                { tag: "Blog", title: "RX vs TX: Network Traffic Direction Explained", to: "/blog/understanding-rx-tx-network-traffic-direction" },
                { tag: "Service", title: "GPU Sharing & Multi-tenancy", to: "/services/gpu-kubernetes", cta: "Learn more" },
            ]}
            faqs={[
                { q: "What is DCGM?", a: "NVIDIA DCGM (Data Center GPU Manager) is the official toolkit for GPU telemetry, diagnostics and policy management. It exposes per-GPU utilization, memory, temperature, power, ECC errors, XID events and PCIe metrics through a Prometheus exporter. It is the reliable source of truth for GPU health." },
                { q: "Which GPU metrics matter for reliability?", a: "SM utilization, memory bandwidth utilization, XID errors, ECC double-bit and single-bit counts, power draw, thermal throttling events, PCIe replay counts and NVLink error counters. For training, add NCCL timeouts and AllReduce duration. These catch the majority of hardware and driver issues before jobs crash." },
                { q: "What is an XID error?", a: "XID errors are NVIDIA driver events reported via the kernel log when something goes wrong: ECC failures, a GPU falling off the bus, hardware errors or timeouts. Some are transient, others (like XID 79) are fatal and require node replacement. Mature monitoring alerts on these and automates node draining for critical codes." },
                { q: "How fast can GPU observability detect failures?", a: "With DCGM scraping at short intervals and proper alerts, most failures (thermal throttling, ECC storms, XID events, PCIe link downgrade) are detected within about a minute. Fail-fast controllers can drain the affected pod automatically, so jobs restart on healthy hardware." },
                { q: "Can you integrate with our existing monitoring stack?", a: "Yes. DCGM exports Prometheus metrics, so it drops into any stack built on Prometheus, Grafana, VictoriaMetrics, Mimir, Datadog or Grafana Cloud. We also integrate with PagerDuty, Opsgenie, Loki and Elastic, and build GPU-specific Grafana dashboards on top of your existing setup." },
            ]}
            ctaEyebrow="Tired of GPU failures going undetected?"
            ctaHeading="We build monitoring that catches GPU issues before they crash your training jobs."
        />
    )
}
