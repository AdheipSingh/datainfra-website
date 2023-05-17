---
slug: accelerating-real-time-analytics-infrastructure-on-kubernetes
title: Accelerating Real-Time Analytics Infrastructure On Kubernetes
url: accelerating-real-time-analytics-infrastructure-on-kubernetes
authors: [Adheip Singh]
tags: [real-time analytics, control-planes]
---

*DataInfra is at the forefront of democratizing running real-time analytical workloads on Kubernetes, with a particular focus on OLAP stores and query engines. We have delved deep into the Kubernetes API and have extended the Kubernetes control plane to create a seamless user experience for running real-time analytics infrastructure on Kubernetes.*

**Current State of Real-Time Analytics on Kubernetes**

The need for real-time analytics has never been greater than it is today. With the increase of data sources and the speed at which data is generated, organizations want to analyze and derive insights from their data in real-time.

Setting up and scaling a real-time analytics pipeline with current tooling can be challenging. Many of the available tools are complex, distributed, and not designed to run on Kubernetes. This has led to a lack of standard, scalable, and extensible ways to define distributed systems in a Kubernetes-native way.

<!--truncate-->

To effectively power real-time analytics, organizations must build a robust data infrastructure that supports multiple tooling options and encourages collaboration between data engineering and data operations teams. This infrastructure must be flexible enough to accommodate different streaming, streaming processing, OLAP and BI tools.

*Examples for real-time analytics tooling is OLAP stores such as Apache Druid, Apache Pinot and query engines such as Trino*

**Why Data-Centric Kubernetes Control Planes are Critical for Real-Time Analytics Infrastructure**

Kubernetes cannot be just seen as an orchestration platform, kubernetes is a control plane for your data application. With its extensibility features, Kubernetes can be used to build data-centric control planes that streamline data management and data operations.

Control planes are essential for managing data applications on Kubernetes. They handle installation, upgrading, scaling, and running the data application in autopilot mode. They can also perform rollbacks and complex data management operations such as schema and table management. Control planes act as a bridge between a data application's desired state and its interpretation in Kubernetes, enabling smooth and efficient data management.

By leveraging control planes, organizations can create a secure and compliant internal cloud data platform for real-time analytics on Kubernetes. With a control plane, data never leaves the network, ensuring privacy and reducing the risk of data breaches.

With a centralized control plane for real time data infrastructure, organizations can accelerate their transition from proof-of-concept to production. This approach enables data engineers to focus on data problems rather than infrastructure, while facilitating faster onboarding of multiple data applications across multiple environments.

**Summary**

A centralized control plane for real time data infrastructure can significantly reduce transition time, lower costs, increase reliability, and improve team efficiency. Automate critical functions such as configuration management and capacity planning.
