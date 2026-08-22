// Static index of GPU-relevant posts and case studies for tag-based
// "Related reading" selection. SaaS/control-plane posts are deliberately
// excluded (they are noindexed and off-topic for GPU readers).
// Keep in sync when publishing new GPU posts.

export const POST_INDEX = [
    {
        title: "Contributing a Queue Validator to the KAI Scheduler",
        url: "/blog/contributing-queue-validator-kai-scheduler",
        tags: ["gpu", "kubernetes", "kai-scheduler", "open-source"],
    },
    {
        title: "Dual-Network Kubernetes Pods with RDMA on NVIDIA GH200: A Hands-On Guide",
        url: "/blog/dual-network-rdma-kubernetes-gh200",
        tags: ["gpu", "rdma", "kubernetes", "networking", "gh200", "nccl", "tutorial"],
    },
    {
        title: "GPU-to-GPU Communication Across Nodes: What Actually Works",
        url: "/blog/gpu-to-gpu-communication-across-nodes",
        tags: ["gpu", "infrastructure", "networking", "distributed-training", "nvlink", "infiniband", "rdma"],
    },
    {
        title: "Adding Global Config to the NVIDIA Network Operator",
        url: "/blog/global-config-nvidia-network-operator",
        tags: ["gpu", "kubernetes", "networking", "rdma", "open-source"],
    },
    {
        title: "Understanding Power Management in GPU via PCIe",
        url: "/blog/understanding-power-management-in-gpu-via-pcie",
        tags: ["gpu", "infrastructure", "power-management", "pcie", "monitoring"],
    },
    {
        title: "How to Calculate if Your Network is Bottlenecking Distributed Training",
        url: "/blog/network-bottleneck-distributed-training",
        tags: ["gpu", "distributed-training", "networking", "performance", "tutorial"],
    },
    {
        title: "Understanding Secondary Networks for GPU Workloads in Kubernetes",
        url: "/blog/secondary-networks-gpu-kubernetes",
        tags: ["gpu", "rdma", "kubernetes", "networking", "nccl", "network-operator", "sr-iov"],
    },
    {
        title: "Understanding RX vs TX - Making Sense of Network Traffic Direction",
        url: "/blog/understanding-rx-tx-network-traffic-direction",
        tags: ["networking", "monitoring", "infrastructure", "troubleshooting", "mellanox", "nvidia"],
    },
    {
        title: "Case study: 8.5x Faster Distributed Training - RDMA on Bare Metal Kubernetes",
        url: "/case-studies/rdma-kubernetes",
        tags: ["gpu", "rdma", "kubernetes", "networking", "distributed-training", "nccl"],
    },
]

// Pick up to `count` posts sharing the most tags with `tags`, excluding
// the current page. Falls back to index order when nothing overlaps.
export function getRelatedPosts(tags = [], currentUrl = "", count = 3) {
    const tagSet = new Set(tags.map((t) => String(t).toLowerCase()))
    return POST_INDEX.filter((p) => p.url !== currentUrl)
        .map((p, idx) => ({
            ...p,
            score: p.tags.filter((t) => tagSet.has(t)).length,
            idx,
        }))
        .sort((a, b) => b.score - a.score || a.idx - b.idx)
        .slice(0, count)
}
