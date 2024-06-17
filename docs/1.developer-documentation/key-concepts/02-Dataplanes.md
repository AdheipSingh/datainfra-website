---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Dataplanes
slug: /concepts/dataplanes
---

## Dataplanes

Data planes are where the software is deployed. They can be located either in the SaaS provider's network or the customer's network. In modern SaaS, data planes are typically Kubernetes clusters. In BaaZ, Dataplane is a first class concept.

<div style={{ textAlign: 'center' }}>
  <img src={require('../../../static/img/dataplane.png').default} alt="Dataplane" style={{ width: '50%', height: 'auto' }} />
</div>


In BaaZ, a Dataplane consists of:

**Network:** The network layer is the first layer of execution when launching a Dataplane. The network consists of deploying VPCs, subnets, route tables, etc.

**Compute:** Once the network layer is set up, the compute layer is the second layer of execution. Compute consists of Kubernetes clusters only.

**Storage:** The storage layer consists of any object storage or managed DB in the cloud.

:::info
BaaZ uses cloud SDK's directly to launch cloud infrastructure. It maintains the state of each layer deployed. As of now, it supports managed k8s on cloud only.
:::

## Dataplane Types

In BaaZ, Dataplane can be deployed within a customer network or within a SaaS provider network. 

### Shared Dataplane

- A shared dataplane can deploy multiple customer applications.
- Network and compute resources are shared.
- Physical isolation is not present at the network and compute levels.
- Logical isolation is maintained.
- One Dataplane is mapped to many customers.
- Lower cloud costs, easy to maintain.

<div style={{ textAlign: 'center' }}>
  <img src={require('../../../static/img/shared-dp.png').default} alt="Dataplane" style={{ width: '50%', height: 'auto' }} />
</div>

### Dedicated Dataplane

- A dedicated dataplane deploys only a single customer applications.
- Network and compute resources are dedicated.
- Physical isolation is present at the network and compute levels.
- Logical isolation is maintained.
- One Dataplane is mapped to one customer.
- Higher cloud costs, at scale maintainence can be an overhead if best practices not followed.

<div style={{ textAlign: 'center' }}>
  <img src={require('../../../static/img/dedicated-dp.png').default} alt="Dataplane" style={{ width: '50%', height: 'auto' }} />
</div>
