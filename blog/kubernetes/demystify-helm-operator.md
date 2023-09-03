---
slug: demystifying-helm-and-operator-pattern
url: demystifying-helm-and-operator-pattern
title: Demystifying Helm and Operator pattern.
description: Discover insights and explanations about Helm and Operator Pattern in the DataInfra.io blog. Gain a clearer understanding of these tools and patterns used for efficient infrastructure management.
authors: [Adheip Singh]
date: 2023-05-17T10:00
tags: [kubernetes, operator, control-planes]
hide_table_of_contents: false
---

*In this article, we explore the use cases of Helm and Kubernetes operators, demystifying when to use each tool, based on DataInfra's experience in developing and maintaining Kubernetes operators, controllers, and libraries*

**Introduction**

In the realm of software development, the principle of separation of concerns holds great significance. It emphasises the need to divide a system into distinct parts, each responsible for a specific aspect of functionality. This approach promotes modularity, maintainability, and scalability, allowing developers to focus on specific areas without unnecessary dependencies. When it comes to managing Kubernetes deployments, the Helm tool and the operator pattern play crucial roles in adhering to this principle. In this blog post, we will explore the separation of concerns in Helm and the benefits of using operators in Kubernetes deployments.

<!--truncate-->

**Helm: A Configuration Management Tool**

Helm is a popular configuration management tool specifically designed for templating Kubernetes manifests. Its primary responsibility is to generate Kubernetes manifests based on configurable templates and apply them to a cluster. Once the Helm chart is upgraded and installed, Helm's job is essentially completed. At this point, the underlying controllers take over the responsibility of reconciling the state and ensuring that the desired state of the application is achieved.

**Kubernetes and Legacy Applications**

Kubernetes treats an application as a pod in its most basic state, oblivious to any application-specific logic or details. It lacks awareness of whether a pod represents a Kafka instance or a Druid instance. It is worth noting that many big data applications were not originally designed to run on Kubernetes and often rely on the Java Virtual Machine (JVM) and follow legacy design principles. While it is possible to containerize these legacy code bases and run data pipelines on Kubernetes, the overall user experience and management of such deployments can be challenging.

**Introducing the Operator Pattern**

Custom Resource Definitions (CRDs) enable the creation of custom Kubernetes groups, versions, and kinds. Operators, in essence, are specialised controllers that watch specific CRs and reconcile their state. These custom controllers possess application-specific knowledge and act as a bridge between your application and the Kubernetes cluster.

By utilising operators, we can encapsulate the intricate details of an application within a dedicated controller. This approach allows Kubernetes to interact with the operator instead of directly managing the application itself. Operators provide a higher level of abstraction, enabling seamless integration of legacy applications into Kubernetes environments. They bring application-specific logic, automation capabilities, and domain-specific intelligence to the Kubernetes platform.

**Benefits of Operators**

- **Improved Manageability**: Operators encapsulate the complexity of managing applications within Kubernetes, making it easier to deploy, update, and scale applications.

- **Enhanced Automation**: Operators automate various operational tasks, such as scaling, backup and restore, monitoring, and self-healing, thereby reducing the burden on administrators.

- **Application-Aware Operations**: With operators, Kubernetes gains awareness of application-specific requirements and can ensure optimal performance and resource allocation based on those requirements.

- **Simplified Lifecycle Management**: Operators provide consistent and reliable ways to manage the lifecycle of applications, including handling upgrades, rolling updates, and deprovisioning.

**Summary**

In an ideal scenario, it is recommended to use both Helm and Operators together for Kubernetes deployments. Helm's templating capabilities and features such as rollbacks and versioning make it a powerful tool for managing Kubernetes manifests. By utilising Helm, you can template out custom resources and take advantage of its functionality while allowing Operators to reconcile the state of the application.
