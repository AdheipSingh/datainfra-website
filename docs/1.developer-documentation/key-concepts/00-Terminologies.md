---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Developer Terminologies
slug: /terminologies
---

## Developer Terminologies

As a developer constructing a robust SaaS backend platform, you often encounter a variety of complex SaaS terminologies. Our goal is to clarify these terms and eliminate any ambiguity, fostering a clearer understanding.

### The Planes
**Control Planes:** Control planes manage the lifecycle of data planes, deployed applications, and maintain the state of the SaaS platform. They reside within the SaaS provider’s network. In scenarios like Private SaaS, the control plane may be deployed in the customer's network.

**Data Planes:** Data planes are where the software is deployed. They can be located in either the SaaS provider's network or the customer's network. In modern SaaS, data planes are typically Kubernetes clusters.

### SaaS Business Models
**Shared SaaS:** In this model, a single data plane supports multiple customer applications, sharing compute and network resources. This is commonly used in free tiers, with all infrastructure hosted in the SaaS provider's network.

**Dedicated SaaS:** Each customer has a dedicated data plane with exclusive compute and network resources. This model is prevalent in business tiers, with infrastructure housed within the SaaS provider's network.

**BYOC SaaS:** Customers bring their own data planes or have the SaaS provider deploy a data plane within their network to host the SaaS application. This model is typical for enterprise tiers, with infrastructure located in the customer's network.
The SaaS provider’s control planes need secure access to manage these data planes.

### SaaS Tiers or Plans
**Free Tiers:** Designed for users exploring the product, often with quotas and limits on organizations, workspaces, users, compute, memory, and storage. Free tiers use shared infrastructure.

**Starter Tiers:** Target users willing to pay but with lower usage needs. These tiers prioritize ease of use and feature exploration, with relatively relaxed SLAs and shared infrastructure with higher computing capabilities.

**Business Tiers:** Aimed at users who trust the product and are willing to pay and share their data. These users expect high performance and strict SLAs, with dedicated infrastructure providing complete isolation.

**Enterprise Tiers:** Align with Private or Hybrid SaaS models, expecting the SaaS provider to deploy and manage applications on data planes within their networks. These tiers demand high performance and stringent SLAs.

### SaaS Onboarding Terminologies
**Organizations:** Represent customers for SaaS providers and are associated with tiers and business models. An organization can have multiple workspaces.

**Workspaces:** An organization can contain multiple workspaces, each hosting one or more deployed applications. For example, Organization A might have Analytics and Platform workspaces.

**Users:** Individuals associated with an organization, with permissions to access and perform actions within workspaces.

**Application:** Refers to the SaaS provider's software application.

### SaaS Sales Models
**Self-Serve Model:** Caters to users with lower spending tendencies, typically without dedicated sales representatives. Users often sign up for free or starter tiers.

**Transactional Model:** Requires dedicated sales representatives to manage business relationships, contracts, and premium SLAs. Common among business tier users.

**Enterprise Model:** Complex and often involves multiple sales teams to establish new relationships. This model targets high-value accounts, usually in the enterprise tier.
