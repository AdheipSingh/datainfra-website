import React from "react"
import ServiceDetail from "@site/src/components/ServiceDetail"

export default function GPUKubernetes() {
    return (
        <ServiceDetail
            seoTitle="GPU Sharing & Multi-tenancy on Kubernetes | BaaZ"
            seoDescription="Production GPU clusters on Kubernetes. GPU Operator, KAI Scheduler, MIG, fractional GPU sharing and multi-tenancy on EKS, GKE and bare metal."
            breadcrumb="GPU Sharing & Multi-tenancy"
            h1="GPU Sharing & Multi-tenancy"
            lead="Your GPU cluster is sitting mostly idle. Teams wait days for GPU access. Training jobs fail because the scheduler doesn't understand GPU topology. Kubernetes can run GPUs well. It just needs someone who has done it before."
            valueProps={[
                { title: "Utilization, not idle silicon", body: "MIG partitioning, time-slicing and a GPU-aware scheduler so more teams share the same hardware without stepping on each other." },
                { title: "We know the scheduler code", body: "We are active contributors to KAI Scheduler, so gang scheduling, queues and preemption are things we tune from the inside, not from the docs." },
                { title: "Any substrate", body: "EKS with EFA, GKE GPU pools with multi-networking, or bare metal with Calico/Cilium. We have shipped all three." },
            ]}
            whatWeDo={{
                heading: "Make one cluster serve many teams.",
                lead: "The operator stack, the scheduler and the tenancy model, configured so GPUs are scheduled, shared and accounted for.",
                rows: [
                    { n: "01", title: "GPU Operator stack", body: "Driver containers, Container Toolkit, Device Plugin, DCGM Exporter and GPU Feature Discovery. We handle driver conflicts, runtime differences, secure boot and upgrade rollouts." },
                    { n: "02", title: "KAI Scheduler", body: "Topology-aware placement, fair-share scheduling, gang scheduling for distributed training, preemption policies and queue management. We are an active contributor." },
                    { n: "03", title: "MIG & fractional sharing", body: "A100 and H100 MIG partitioning, time-slicing for non-MIG GPUs, and workload-aware partition profiles." },
                    { n: "04", title: "Multi-tenancy", body: "Namespace isolation, GPU resource quotas, RBAC, priority classes, and cost allocation and chargeback." },
                    { n: "05", title: "Job orchestration", body: "Kubeflow Training Operator and PyTorchJob, with integration into MLflow and W&B for training workflows." },
                ],
            }}
            steps={[
                { n: "01", title: "Assess", body: "Audit your Kubernetes GPU setup, scheduler config and utilization." },
                { n: "02", title: "Design", body: "Right-size the operator stack, scheduling policy and tenancy model." },
                { n: "03", title: "Implement", body: "Deploy, configure and validate with real workloads." },
                { n: "04", title: "Transfer", body: "Runbooks, dashboards and training for your platform team." },
            ]}
            tech={["Kubernetes", "GPU Operator", "KAI Scheduler", "Network Operator", "MIG", "Time-Slicing", "EKS", "GKE", "Kubeflow", "Multus", "SR-IOV", "Helm", "ArgoCD"]}
            related={[
                { tag: "Blog", title: "Contributing a Queue Validator to KAI Scheduler", to: "/blog/contributing-queue-validator-kai-scheduler" },
                { tag: "Case study", title: "RDMA on Bare-Metal Kubernetes", to: "/case-studies/rdma-kubernetes", cta: "Read the case study" },
                { tag: "Service", title: "GPU Observability & Reliability", to: "/services/gpu-monitoring", cta: "Learn more" },
            ]}
            faqs={[
                { q: "What is the NVIDIA GPU Operator?", a: "A set of Kubernetes operators that automate the lifecycle of GPU drivers, Container Toolkit, device plugin, DCGM exporter and MIG manager across every GPU node. You need it any time you want GPUs scheduled as Kubernetes resources." },
                { q: "How does GPU sharing work in Kubernetes?", a: "There are three modes: MIG for hardware partitioning on A100 and H100 (hard isolation, fixed sizes), time-slicing for simple time-multiplexing (no isolation), and MPS for CUDA-level process sharing. Pick MIG for multi-tenant production and time-slicing for dev and inference." },
                { q: "What is the KAI Scheduler?", a: "KAI Scheduler (formerly the Run:ai scheduler) is a Kubernetes-native gang scheduler purpose-built for GPU workloads: queues, fair-share, gang scheduling and preemption with GPU-awareness. We are an active contributor to this project." },
                { q: "Can I run GPU workloads on EKS, GKE, or AKS?", a: "Yes. All three support GPU node groups and the GPU Operator runs on top. The complications are around driver versions, instance-type-specific CUDA images, multi-tenancy isolation and in-cluster networking (especially RDMA or EFA)." },
                { q: "Do I need Slurm if I already run Kubernetes?", a: "Not usually. Kubernetes with GPU Operator, KAI or Volcano scheduler, and the Kubeflow Training Operator covers most distributed-training workloads. Slurm still wins for traditional HPC or organizations with deep Slurm operational expertise." },
                { q: "How do you approach multi-tenant GPU clusters?", a: "Namespace quotas, ResourceQuotas on nvidia.com/gpu, a GPU-aware scheduler for fair-share, MIG or SR-IOV for hardware isolation where needed, node taints and tolerations for workload separation, and per-namespace DCGM metrics for visibility." },
            ]}
            ctaEyebrow="Need help running GPUs on Kubernetes?"
            ctaHeading="We've deployed GPU Operator and KAI Scheduler on EKS, GKE and bare metal. Let's look at your cluster."
        />
    )
}
