---
title: "Adding Global Config to the NVIDIA Network Operator"
description: "Global config for NicClusterPolicy: set repository, version, and imagePullSecrets once instead of repeating across every Network Operator component."
slug: global-config-nvidia-network-operator
authors: [Adheip Singh]
date: 2026-04-06T10:00
tags: [gpu, kubernetes, networking, rdma, open-source]
image: /img/blog/global-config-nvidia-network-operator.svg
---

If you've ever written a `NicClusterPolicy` manifest for the NVIDIA Network Operator, you know the pain: the same `repository`, `version`, and `imagePullSecrets` copied and pasted across every single sub-component. OFED driver, RDMA shared device plugin, SR-IOV device plugin, Multus, CNI plugins, IPAM plugin, NV-IPAM — each one needs its own `repository: nvcr.io/nvidia/mellanox` and `version: network-operator-v25.7.0`. Change the version during an upgrade, and you're editing 8+ places in the same YAML. Miss one, and you get a partially upgraded cluster with mismatched component versions.

We recently contributed a fix for this: **global config support for NicClusterPolicy** ([PR #2070](https://github.com/Mellanox/network-operator/pull/2070)). It's now merged into the NVIDIA Network Operator, and this post explains the problem, the implementation, and why it matters for anyone operating [RDMA-capable GPU clusters on Kubernetes](/services/gpu-networking).

<!-- truncate -->

## The Problem: Repetitive Configuration Across 14 Sub-Components

The [NVIDIA Network Operator](https://github.com/Mellanox/network-operator) is the standard way to deploy networking infrastructure for GPU clusters on Kubernetes. It manages OFED drivers, RDMA device plugins, SR-IOV, Multus CNI, IPoIB, IPAM, NIC configuration — everything you need for [high-performance GPU networking](/blog/gpu-to-gpu-communication-across-nodes). All of this is configured through a single `NicClusterPolicy` custom resource.

Here's what a typical `NicClusterPolicy` looked like before this change:

```yaml
apiVersion: mellanox.com/v1alpha1
kind: NicClusterPolicy
metadata:
  name: nic-cluster-policy
spec:
  ofedDriver:
    image: mofed
    repository: nvcr.io/nvidia/mellanox      # repeated
    version: network-operator-v25.7.0         # repeated
    imagePullSecrets:                          # repeated
    - ngc-secret
  rdmaSharedDevicePlugin:
    image: k8s-rdma-shared-dev-plugin
    repository: nvcr.io/nvidia/mellanox      # repeated
    version: network-operator-v25.7.0         # repeated
    imagePullSecrets:                          # repeated
    - ngc-secret
  sriovDevicePlugin:
    image: sriov-network-device-plugin
    repository: nvcr.io/nvidia/mellanox      # repeated
    version: network-operator-v25.7.0         # repeated
    imagePullSecrets:                          # repeated
    - ngc-secret
  nvIpam:
    image: nvidia-k8s-ipam
    repository: nvcr.io/nvidia/mellanox      # repeated
    version: network-operator-v25.7.0         # repeated
    imagePullSecrets:                          # repeated
    - ngc-secret
  secondaryNetwork:
    cniPlugins:
      image: plugins
      repository: nvcr.io/nvidia/mellanox    # repeated
      version: network-operator-v25.7.0       # repeated
      imagePullSecrets:                        # repeated
      - ngc-secret
    multus:
      image: multus-cni
      repository: nvcr.io/nvidia/mellanox    # repeated
      version: network-operator-v25.7.0       # repeated
      imagePullSecrets:                        # repeated
      - ngc-secret
    ipamPlugin:
      image: whereabouts
      repository: nvcr.io/nvidia/mellanox    # repeated
      version: network-operator-v25.7.0       # repeated
      imagePullSecrets:                        # repeated
      - ngc-secret
    ipoib:
      image: ipoib-cni
      repository: nvcr.io/nvidia/mellanox    # repeated
      version: network-operator-v25.7.0       # repeated
      imagePullSecrets:                        # repeated
      - ngc-secret
```

That's the same registry, version, and pull secret repeated 8 times — and a real production manifest often has even more components. NVIDIA has been aligning component versions since the v25.x releases, which means most sub-components now share the same registry and version string. The CRD just hadn't caught up to this reality.

The operational consequences of this repetition are real. During upgrades, you have to update the version in every sub-component. If you use a private registry mirror (common in air-gapped environments), the registry path needs to change everywhere too. And if your cluster uses imagePullSecrets for registry authentication (required for NGC), you're maintaining the same secret reference across every component block. One typo, one missed field, and you're debugging partial deployments.

## The Fix: Global Config for NicClusterPolicy on Kubernetes

The solution adds a new top-level `globalConfig` section to the `NicClusterPolicy` spec:

```yaml
apiVersion: mellanox.com/v1alpha1
kind: NicClusterPolicy
metadata:
  name: nic-cluster-policy
spec:
  globalConfig:
    repository: nvcr.io/nvidia/mellanox
    version: network-operator-v25.7.0
    imagePullSecrets:
    - ngc-secret
  ofedDriver:
    image: mofed
  rdmaSharedDevicePlugin:
    image: k8s-rdma-shared-dev-plugin
  nvIpam:
    image: nvidia-k8s-ipam
    enableWebhook: false
  secondaryNetwork:
    cniPlugins:
      image: plugins
    multus:
      image: multus-cni
    ipamPlugin:
      image: whereabouts
    ipoib:
      image: ipoib-cni
```

That's it. The `repository`, `version`, and `imagePullSecrets` are defined once and applied to every sub-component automatically. The manifest drops from a wall of repetition to a clean, readable configuration where each component only specifies what's unique to it — its image name.

### Component-Level Overrides

Not every component always uses the same registry. Maybe your OFED driver comes from a different registry, or one plugin is pinned to a specific version during a migration. Component-level values override the global defaults:

```yaml
spec:
  globalConfig:
    repository: nvcr.io/nvidia/mellanox
    version: network-operator-v25.7.0
  ofedDriver:
    image: mofed
  rdmaSharedDevicePlugin:
    image: k8s-rdma-shared-dev-plugin
    repository: my-private-registry.example.com/nvidia  # overrides global
    version: v1.5.2                                       # overrides global
```

The inheritance rule is simple: if the component specifies a field, it wins. If not, the global value is used. If neither is specified, validation catches it at admission time.

## Implementation: CRD, State Renderers, and Webhook Validation

The change touches three layers of the operator:

**CRD and API types.** A new `GlobalConfig` struct is added to `nicclusterpolicy_types.go` with `Repository`, `Version`, and `ImagePullSecrets` fields. The `repository` and `version` fields on individual component `ImageSpec` structs are made optional (no longer `required` in the CRD schema). An `ApplyGlobalConfig()` method on the `ImageSpec` handles the inheritance logic — it copies global values into the component spec only when the component's own fields are empty. For `imagePullSecrets`, we use `append([]string(nil), global.ImagePullSecrets...)` rather than a direct slice assignment to avoid shared backing array mutations between components.

**State renderers.** All 14 state renderers (OFED, RDMA shared device plugin, SR-IOV device plugin, IB Kubernetes, Multus, CNI plugins, IPoIB, IPAM plugin, NV-IPAM, NIC feature discovery, NIC configuration operator, NIC configuration daemon, DOCA telemetry, and maintenance operator) are updated to call `ApplyGlobalConfig()` in their `GetManifestObjects()` method before rendering manifests. Each renderer also validates that the effective `repository` and `version` are non-empty after global config application — if they're still missing, the renderer returns an error rather than producing a broken manifest.

**Webhook validation.** The admission webhook is updated to compute the effective repository (component value if set, otherwise global value) before running format validation. This ensures that a globally-set repository is validated the same way a component-level one would be.

## What This Means for RDMA and GPU Cluster Operators

If you're running NVIDIA Network Operator on GPU clusters — whether for RDMA, GPUDirect, SR-IOV, or any combination — this change simplifies three common workflows:

**Version upgrades.** Bump the version in one place instead of 8+. This is especially significant for teams running the Network Operator alongside the GPU Operator, where coordinating version bumps across both operators already involves enough YAML editing.

**Air-gapped and private registry deployments.** Mirroring NVIDIA container images to an internal registry is standard practice in enterprise and sovereign AI deployments. Previously, every component needed its registry path updated individually. Now it's a single field change. This is particularly relevant for [RDMA-capable GPU clusters](/blog/dual-network-rdma-kubernetes-gh200) where the Network Operator is a foundational layer — you don't want registry misconfigurations blocking your OFED driver rollout.

**Secret management.** Teams using NGC or private registry authentication only need to reference their imagePullSecret once. No more debugging why one component can't pull its image while others work fine — it was always a missing secret reference on one of the eight component blocks.

At [BaaZ](https://baaz.dev/services), we deploy and operate the Network Operator on production GPU clusters for clients running distributed training and inference workloads. This change came directly from that operational experience — we got tired of writing the same three fields eight times in every cluster deployment.

## Frequently Asked Questions

**Does globalConfig work with existing NicClusterPolicy manifests?**
Yes. The change is fully backward-compatible. Existing manifests with per-component `repository`, `version`, and `imagePullSecrets` continue to work exactly as before. `globalConfig` is purely additive — you can adopt it incrementally.

**What happens if I set both globalConfig and component-level values?**
Component-level values always win. The global config only fills in fields that the component leaves empty. This means you can set a global default and override specific components that need a different registry or version.

**What if I forget to set repository or version in both places?**
The webhook validator and state renderers both catch this. If the effective repository or version is empty after applying global config inheritance, the resource is rejected at admission time or the renderer returns an error before producing any manifests. You won't end up with half-deployed components.

**Does this affect Helm-based deployments?**
The Helm chart will need to be updated to expose `globalConfig` as a values parameter. Until then, you can use it when creating the `NicClusterPolicy` CR directly via kubectl.

## Related

If you're building or operating GPU clusters with RDMA networking, these might be useful:

- [Dual-Network Kubernetes Pods with RDMA on NVIDIA GH200 →](/blog/dual-network-rdma-kubernetes-gh200)
- [GPU-to-GPU Communication Across Nodes: What Actually Works →](/blog/gpu-to-gpu-communication-across-nodes)
- [GPU Networking & RDMA Consulting Services →](/services)
