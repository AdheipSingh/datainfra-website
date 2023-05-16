---
sidebar_position: 1
description: Introduction to operator-runtime
---

# Introduction

Operator runtime is a Go-based library that facilitates the development of Kubernetes operators that conform to the Dsoi-Spec. This library offers high-level abstractions and standardization to simplify the process of building resilient reconcile loops for data applications with multiple node types. Operators created with operator runtime benefit from consistent, well-defined behavior and functionality. Operator's built using operator runtime

- Control Plane For Apache Pinot On Kubernetes
- Parseable Kubernetes Operator

## :dart: Motivation

- At DataInfra, we specialize in developing data-centric control planes to facilitate self-service data platforms. Our team has extensive experience building Kubernetes operators for distributed systems. However, creating reconcile loops for various node types and components can be a tedious and error-prone task, particularly when dealing with multiple applications. Unfortunately, there are few abstractions available that can be readily leveraged by the reconciliation loops. To address this challenge, we have developed a unique approach that focuses on application building blocks. By leveraging the operator runtime, we have abstracted out the underlying Kubernetes object reconciliation internals. This approach has enabled us to streamline our development process, reduce errors, and enhance the overall efficiency of our Kubernetes operator implementations.

Using this library we introduce standardisation across
 
- **Builder Abstractions** - Our library includes robust abstractions that enable streamlined building of Kubernetes objects and reconciliation processes.

- **State Change Triggering** - We utilize hashes to trigger reconciliation on state changes, improving the accuracy and efficiency of the process.

- **Internal Store** - Our library includes an internal store that reduces the number of Kubernetes API calls required, resulting in improved performance and resource utilization.

- **Event Emitters** - We have incorporated event emitters that provide real-time feedback on system activity, enhancing visibility and facilitating effective troubleshooting.

## :bricks: Abstractions

- This library abstracts out controller runtime ```client.Client``` by wrapping it with CRUD methods and inbuilt event recorders.
- To build objects initalise the ```Builder``` and leverage the ```ReconcileInterface``` to reconcile objects.
