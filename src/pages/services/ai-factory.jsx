import React from "react"
import ServiceDetail from "@site/src/components/ServiceDetail"

export default function AiFactory() {
    return (
        <ServiceDetail
            seoTitle="GPU Cluster Architecture (AI Factory Setup) | BaaZ"
            seoDescription="We bring up the full GPU cluster software stack on installed hardware: node bring-up, RDMA fabric, storage, Kubernetes or Slurm, scheduling and operations. AI factory architecture and implementation."
            breadcrumb="GPU Cluster Architecture"
            h1="AI Factory Setup"
            lead="You're building a GPU cluster on hardware that's been delivered, on-prem, colo, or dedicated cloud. You want compute, networking, storage, orchestration, and monitoring right the first time, without spending months figuring out what NVIDIA's docs don't tell you."
            valueProps={[
                { title: "Full-stack architecture", body: "Every layer from node bring-up to the scheduler, designed as one system with a written architecture document." },
                { title: "Production-ready on day 1", body: "The first training job runs on a cluster with verified RDMA, working scheduling, monitoring and runbooks, not a lab." },
                { title: "We do the implementation", body: "Provisioning, configuration and testing on the installed hardware, by the engineers you scoped it with." },
            ]}
            whatWeDo={{
                heading: "Five layers, one cluster.",
                lead: "We work on everything above the installed hardware. Rack, power and cooling belong to you or your data-centre partner.",
                rows: [
                    { n: "01", title: "Node bring-up", body: "BMC discovery and inventory, automated OS provisioning, driver / CUDA / Fabric Manager stack, firmware baselines, NVLink and NVSwitch topology verification, node build consistency checks." },
                    { n: "02", title: "Network fabric", body: "RDMA fabric configuration (InfiniBand or RoCE) with PFC/ECN, compute/storage network separation, VXLAN/VRF on the switches where needed, and GPUDirect RDMA verified across the fabric." },
                    { n: "03", title: "Storage integration", body: "Parallel filesystem integration (Lustre, WekaFS, GPFS), checkpoint paths, data staging, GPUDirect Storage where the workload benefits." },
                    { n: "04", title: "Orchestration & scheduling", body: "Kubernetes with GPU Operator and KAI Scheduler, or Slurm with Pyxis/Enroot. Multi-tenancy, quotas, gang scheduling, job queues." },
                    { n: "05", title: "Operations", body: "DCGM monitoring, XID error detection, automated fault recovery, capacity planning, upgrade procedures, runbooks and handover to your team." },
                ],
            }}
            steps={[
                { n: "01", title: "Scope", body: "Understand your workload, hardware, timeline and who operates the cluster afterwards." },
                { n: "02", title: "Design", body: "Architecture document covering all five layers, with the configuration decisions written down." },
                { n: "03", title: "Build", body: "Provision, configure, verify. We do the implementation on the installed hardware." },
                { n: "04", title: "Hand off", body: "Runbooks, dashboards, and knowledge transfer so your team can run it." },
            ]}
            tech={["H100", "H200", "B200", "GH200", "MI300X", "DGX / HGX", "InfiniBand", "RoCE", "Spectrum-X", "Kubernetes", "Slurm", "GPU Operator", "Network Operator", "KAI Scheduler", "Lustre", "WekaFS", "DCGM", "Prometheus", "Grafana"]}
            related={[
                { tag: "Blog", title: "GPU-to-GPU Communication Across Nodes: What Actually Works", to: "/blog/gpu-to-gpu-communication-across-nodes" },
                { tag: "Blog", title: "How to Calculate if Your Network is Bottlenecking Distributed Training", to: "/blog/network-bottleneck-distributed-training" },
                { tag: "Service", title: "GPU Networking & RDMA", to: "/services/gpu-networking", cta: "Learn more" },
            ]}
            faqs={[
                { q: "What is an AI factory?", a: "A full-stack GPU compute environment purpose-built for AI training and inference (compute, high-speed networking, storage, orchestration, observability, and tenancy) operated as a product for internal or external AI teams." },
                { q: "How long does it take to set up a production GPU cluster?", a: "For a well-scoped deployment on dedicated hardware, a functional training-ready GPU cluster is typically weeks, not months." },
                { q: "Should I build on-prem, in a colo, or in the cloud?", a: "Cloud is fastest to start and best for bursty workloads. Colo and on-prem win on cost once utilization is consistently high. We'll tell you which on the scoping call; we have no stake in the answer." },
                { q: "What storage architecture do I need?", a: "Training I/O is dominated by large-file sequential reads and checkpoint writes. We size the storage path from your dataset, checkpoint frequency and model size, then integrate the filesystem you already have or help you pick one." },
                { q: "How do you size the network fabric?", a: "We size inter-node bandwidth from the model's gradient volume and target AllReduce-to-compute ratio, then verify the configured fabric with nccl-tests before the first real job." },
                { q: "Do you operate the cluster after it is built?", a: "Both. We lead new-cluster builds and can hand off to your SRE/platform team with documentation and runbooks, or stay on for Day-2 operations." },
            ]}
            ctaEyebrow="Planning a GPU cluster build?"
            ctaHeading="We've done this before. Let's talk about what you're building."
        />
    )
}
