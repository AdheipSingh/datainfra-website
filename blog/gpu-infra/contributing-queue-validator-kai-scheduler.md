---
title: "Contributing a Queue Validator to the KAI Scheduler"
description: "How we contributed a validating admission webhook to NVIDIA's KAI Scheduler that enforces parent-child queue quota consistency — preventing resource overcommit, unsafe deletions, and quota drift in hierarchical GPU scheduling."
slug: contributing-queue-validator-kai-scheduler
authors: [Adheip Singh]
tags: [gpu, kubernetes, kai-scheduler, open-source]
---

If you run GPU workloads on Kubernetes at any meaningful scale, you've probably hit a point where the default scheduler isn't enough. Fractional GPU requests, quota enforcement, gang scheduling, preemption — none of that comes out of the box. That's the gap [KAI Scheduler](https://github.com/kai-scheduler/KAI-Scheduler) fills.

KAI Scheduler is NVIDIA's open-source Kubernetes-native GPU scheduler, originally built inside the Run:ai platform and released under the Apache 2.0 license in April 2025. It's now a CNCF Sandbox project with over 1,200 GitHub stars, and it's quickly becoming the go-to scheduler for teams running AI workloads on Kubernetes — whether on-prem, colo, or cloud.

At [BaaZ](https://baaz.dev), we work with KAI Scheduler in production GPU clusters. We recently contributed a **queue validation webhook** ([PR #857](https://github.com/kai-scheduler/KAI-Scheduler/pull/857)) that prevents a class of misconfiguration bugs in hierarchical queue setups. This post explains the problem, the fix, and why it matters for anyone operating multi-tenant GPU infrastructure.

<!-- truncate -->

## The Problem: Child Queues Could Exceed Parent Quotas

KAI Scheduler uses a hierarchical queue system to manage GPU, CPU, and memory quotas across teams. You define a parent queue with resource limits, then create child queues underneath it — each child gets a slice of the parent's resources.

Here's where the bug lived. Consider this parent queue:

```yaml
apiVersion: scheduling.run.ai/v2
kind: Queue
metadata:
  name: parent-queue
spec:
  resources:
    cpu:
      quota: 2000
    gpu:
      quota: 2
    memory:
      quota: 4096
```

And this child queue:

```yaml
apiVersion: scheduling.run.ai/v2
kind: Queue
metadata:
  name: invalid-child-queue
spec:
  parentQueue: parent-queue
  resources:
    cpu:
      quota: 3000  # Exceeds parent's 2000
    gpu:
      quota: 1
    memory:
      quota: 2048
```

The child requests 3,000 CPU units under a parent that only has 2,000. Before our fix, **KAI Scheduler accepted this without complaint**. The queue was created successfully and the scheduler would have to deal with the inconsistency at runtime.

This was [Issue #81](https://github.com/kai-scheduler/KAI-Scheduler/issues/81), originally reported by a community member who noticed the behavior while setting up multi-tenant GPU clusters.

In a small cluster, this might go unnoticed. In a production multi-tenant environment with dozens of teams and nested queue hierarchies, this kind of silent misconfiguration leads to unpredictable scheduling behavior — workloads that should be guaranteed resources get starved, quota accounting drifts, and debugging becomes a nightmare.

![KAI Scheduler Queue Validator Architecture](/img/blog/kai-scheduler-queue-validator.svg)

## The Fix: A Validating Admission Webhook

The solution is a [Kubernetes validating admission webhook](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/) that intercepts Queue create, update, and delete operations and enforces consistency rules before the object is persisted to etcd.

The webhook validates three scenarios:

### 1. CREATE: Child Quotas Cannot Exceed Parent Quotas

When a new child queue is created, the webhook sums up all existing children's quotas for each resource (CPU, GPU, memory) and adds the new child's requested quota. If the total exceeds the parent's quota for any resource, the creation is rejected.

This is the core guardrail. It makes the misconfiguration described above impossible — the invalid child queue with 3,000 CPU under a 2,000 CPU parent would be rejected at admission time with a clear error message.

### 2. UPDATE: Warn on Parent Quota Reduction Below Children

If an administrator reduces a parent queue's quota below the sum of its children's quotas, the webhook issues a warning. This is an intentional design choice — we chose warnings over hard rejections for updates because there are legitimate operational scenarios where you might temporarily reduce a parent's quota and then adjust children afterward. A hard reject would make that workflow impossible.

### 3. DELETE: Parent Queues Cannot Be Deleted If They Have Children

Deleting a parent queue while child queues still reference it would leave orphaned children pointing at a non-existent parent. The webhook blocks this and returns an error asking the administrator to delete or reassign child queues first.

## The Feature Flag

The quota validation is gated behind a `--enable-quota-validation` flag on the queue controller. This was a deliberate choice during the PR review process with the KAI maintainers — it allows existing deployments to adopt the validator incrementally without breaking current queue configurations that might already have inconsistencies.

For new deployments, we'd recommend enabling it from day one. For existing clusters, enable it after auditing and fixing any existing queue hierarchy misconfigurations.

## What We Learned Contributing to KAI

A few observations from the contribution process that might be useful if you're considering contributing to KAI Scheduler:

**The review process is thorough.** The PR went through 8 commits across two months (January to March 2026) with reviews from multiple NVIDIA maintainers. The feedback was substantive — it pushed the implementation toward better patterns, proper test coverage, and the right level of strictness for each validation scenario.

**Test coverage is non-negotiable.** The PR includes comprehensive validation tests covering all webhook operations — valid creates, invalid creates, quota boundary conditions, update warnings, and delete protections. If you're planning a contribution, write your tests first.

**Convention matters.** The project follows [Conventional Commits](https://www.conventionalcommits.org/) for PR titles (`feat(queue-controller): add queue validator`), and the code structure follows established patterns in the codebase. Spend time reading existing controllers and webhooks before writing your own.

## Why This Matters for GPU Infrastructure Operators

If you're running multi-tenant GPU clusters — whether that's a shared training cluster for internal ML teams, or a GPU-as-a-service platform for external customers — quota enforcement at the admission level is table stakes. Without it, you're relying on everyone to get their YAML right, every time.

The queue validator turns a class of runtime surprises into deploy-time errors. That's the kind of shift-left that saves on-call engineers from 2am debugging sessions where workloads aren't getting the GPUs they were promised.

At BaaZ, we build and operate these kinds of GPU clusters for startups and SMEs. KAI Scheduler is a core part of our stack for multi-tenant GPU environments, and contributing fixes upstream is how we ensure the tools we depend on keep getting better.

If you're interested in GPU scheduling, multi-tenancy, or Kubernetes-native AI infrastructure, the [KAI Scheduler repo](https://github.com/kai-scheduler/KAI-Scheduler) is actively looking for contributors. The issue tracker has plenty of open items, and the maintainers are responsive.

---

## Related

- [GPU Kubernetes Consulting →](/services/gpu-kubernetes)
- [GPU Infrastructure Consulting Services →](/services)
- [Case Study: 8.5x Faster Training with RDMA on Kubernetes →](/case-studies/rdma-kubernetes)
- [How to Calculate if Your Network is Bottlenecking Distributed Training →](/blog/network-bottleneck-distributed-training)
