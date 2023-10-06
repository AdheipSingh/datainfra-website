---
hide_title: true
sidebar_label: Introduction
title: "Druid on Kubernetes Introduction: Empowering Real-Time Analytics"
description: "Introduction to Druid Kubernetes Operator"
---
# Introduction

Druid Operator is a Kubernetes controller that manages the lifecycle of Apache Druid clusters. The operator simplifies the management of Druid clusters with its custom logic that is configurable via custom API (Kubernetes CRD).

The Druid on Kubernetes project aims to provide a seamless and efficient way to run Apache Druid on Kubernetes. This project is based on the Kubernetes operator pattern, although it is not limited to this approach.

Developed using GoLang and bootstrapped using Kubebuilder, this project provisions and manages Apache Druid clusters on Kubernetes in distributed mode only. 

We believe that Kubernetes can serve as a control plane for any application, including those with data and stateful sets. While Helm charts are useful for configuration management, they don't maintain the state of the application. Druid Operator acts as a bridge between your application's requirements and Kubernetes infrastructure.

As a distributed database, Druid can be challenging to run on Kubernetes without the right tools. Druid isn't designed to run on kubernetes, it belongs to the JVM ecosystem. Helm solves the problem of configuration management, its responsible for applying configuration, the druid operator is responsible for state management and reconciling configurations.


## :dart: Major Features

* Deny List in Operator
* Reconcile Time in Operator
* Finalizer in Druid CR
* Deletetion of Orphan PVC's
* Rolling Deploy
* Force Delete of Sts Pods
* Scaling of Druid Nodes
* Volume Expansion of Druid Nodes Running As StatefulSets
* Add Additional Containers in Druid Nodes
