---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Introduction
slug: /developer-documentation
---

## What is BaaZ ?

BaaZ is a **centralised control plane for building infra SaaS products**. It accelerates GTM by giving users a robust control plane that helps them monetize their product by giving various manged offerings.

BaaZ can be leveraged to build **SaaS products**. Using BaaZ users can launch:
- **Managed Services**
- **Shared Infra SaaS**
- **Dedicated Infra SaaS**
- **BYOC Infra SaaS**
- **Serverless SaaS**
- **Internal SaaS**

All with a single control plane architecture.
<div style={{ textAlign: 'center' }}>
  <img src={require('../../static/img/baaz-e2e.png').default} alt="SaaS Architecture Layers" />
</div>

## Why BaaZ ?

Building a control plane for SaaS products involves the following challenges:

- **Time-Consuming**:Involves significant time investment due to the complexity of setting up and managing infrastructure components. 
- **Costly:** Incur substantial costs related to cloud services, engineering resources, and ongoing maintenance.
- **Barrier to Sales:** Sales face delays due to engineering's inability to support diverse customer requirements like BYOC deployment. Not all customers are willing to share data to SaaS provider.
- **Security & Compliance:** Meeting standards like SOC2, HIPAA, etc, is a time-consuming process. Architecture needs to support secure access to customer networks.
- **Re-Architecture:** As products evolves, companies often end up re-architecting infrastructure to support various customer deployment requirements.

BaaZ is built to address these challenges. It enables users to focus on the product layer and accelerate their SaaS journey. Users can start with managed services and seamlessly transition to building a SaaS without altering service provisioning.

## How it Works 

- Deploy on any Kubernetes cluster in cloud or on-prem.
- Written in Golang, and built on Kuberntes API.
- Can provision and maintain cloud infrastructure, uses cloud SDK's directly. No Terraform.
- CLI to interact with BaaZ server, single binary, no distributed setup.
- Service Provisioning Layer is built to manage N number of dataplanes across clouds.
- State Machines for managing Dataplanes, Tenants, TenantsInfra and Applications. 

## Major Features

- **Unified Multi-Cloud Design:** Build multi tenant cloud SaaS for shared infra, dedicated infra and private infrastructure on any cloud.
- **Push and Pull Model:** For shared and dedicated infra within SaaS provider network, BaaZ supports a push based model. To build BYOC/Private SaaS infrastructure BaaZ supports a pull based model, which is secure way to access customer networks.
- **Optimized Cost Efficiency:** In built deployment strategies with low priority nodes, and scheduling strategies to increase your SaaS gross margins.
- **Stateless Control Plane:** Statless control plane, can be deployed on customer network as well as saas provider network.
- **Telemetry:** Built support for getting events, logs on all control plane activites. 
- **Tenant Expansion:** In SaaS, tenants belongs to plans/tiers. BaaZ supports tenant expansion from tier A to tier B.
