---
sidebar_position: 1
---

# Introduction

Pinot control plane for Kubernetes, is a solution that bridges the gap between Pinot's requirements and Kubernetes infrastructure. 

With Pinot control plane for Kubernetes, data engineers and data ops can build their internal pinot cloud platform, knowing that their data remains within their network. Thus, avoiding costly SAAS vendors. The control plane ensures configuration and data management for pinot and reconciles them with ease, ensuring a seamless user experience.

This control plane is designed to accelerate deployment of pinot infrastructure on Kubernetes. This project provides the right set of tooling to data engineers and data ops, making it easier to run Pinot clusters on Kubernetes without any challenges. A single control plane can manage N number of pinot clusters.

## :rocket: Major Features

- Installation of heterogeneous pinot clusters across mutiple AZ's.
- Rolling Upgrades - Incremental
- Ordered Deployment - Define order for upgrades
- Table Management
- Schema Management
- Tenant Management (experimental)

## :dart: Motivation

We believe that Kubernetes can serve as a control plane for any application, including those with data and stateful sets. While Helm charts are useful for configuration management, they don't maintain the state of the application. That's why we've built a control plane that acts as a bridge between your application's requirements and Kubernetes infrastructure.

As a distributed database, Pinot can be challenging to run on Kubernetes without the right tools. Pinot isn't designed to run on kubernetes, it belongs to the JVM ecosystem and has tight coupling with zookeeper and helix. Helm solves the problem of configuration management, its responsible for applying configuration, the control plane is responsible for state management and reconciling configurations.            

*Scaling statefulsets for OLAP stores isn't straightforward, adding replicas to a statefulset for scaling isn't the same as adding statefulsets for scaling.*

*At every point in the lifecycle of a Pinot cluster on Kubernetes, the cluster has three states: the current state, modified state, and original state.*


This control plane is based on [Distributed System Operator Interface](../../3.distributed-systems-operator-interface/documentation/introduction.md) and is built using [operator-runtime](../../4.operator-runtime/documentation/introduction.md). This is a radical new approach that brings ease of use and decouples application and kubernetes in a way that it becomes easier for day 2 operations. The underlying controllers are built on observed state (conditions) and not state machines.
