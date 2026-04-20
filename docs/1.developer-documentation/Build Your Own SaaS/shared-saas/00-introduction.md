---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Introduction
slug: /shared-infra-saas/introduction
---

## Introduction to Shared SaaS

In this document, we will explore how to leverage BaaZ to build a shared infrastructure SaaS. In a shared infrastructure SaaS model, multiple customers’ applications are deployed within a single data plane, allowing for efficient resource sharing and management.

### Why Shared Infrastructure SaaS?

**Cost Efficiency:**
With a shared infrastructure, you can serve multiple customers using the same resources, significantly reducing operational costs. 

**Simplified Operations:**
Managing one centralized infrastructure reduces the operational overhead associated with maintaining multiple instances.

**Resource Efficiency:**
Shared infrastructure maximizes resource utilization. Since not all customers will be consuming peak resources simultaneously, this model allows for better scaling and load balancing across tenants.

**Speed to Market:**
By avoiding the need to set up isolated environments for each customer, you can onboard new customers much faster.

### Use Case

If you're building "X-as-a-Service," where "X" could be any application—like a database, messaging platform, or other software—and you need to deploy separate instances for each customer, a shared SaaS model is the most efficient way to start.

### Architecture

In this tutorial we are going to deploy BaaZ, on our control plane network and deploy dataplane on AWS Cloud.
