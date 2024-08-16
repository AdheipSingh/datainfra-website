---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Dataplanes
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

## Product to Infrastructure - Dataplanes

In a real-world scenario for SaaS (Software as a Service), users are typically not aware of the specific type of dataplane their workloads run on. What users are aware of are the subscription plans or tiers they have subscribed to. To abstract away the complexity and provide a seamless experience, it is essential to map the subscription plans/tiers to different dataplane types.

- Free tier and Startup tier user workloads are deployed on a shared dataplane hosted on the SaaS provider's network.
- Business tier user workloads are deployed on dedicated dataplanes hosted on the SaaS provider's network.
- Enterprise tier user workloads are deployed on dedicated dataplanes hosted on the customer's network.


<div style={{ textAlign: 'center' }}>
  <img src={require('../../../static/img/mapdataplane.png').default} alt="Dataplane" style={{ width: '100%', height: 'auto' }} />
</div>

## Dataplanes in BaaZ

Dataplane is a first-class concept in BaaZ. Here's a sample config for deploying a shared dataplane. Let's look at the important keys for deploying a dataplane:

- ```saasType```: SaaS type can be ```shared```, ```dedicated```, or ```private```.
- ```provisionNetwork```: If set to true, the underlying dataplane controller creates the network, i.e., VPC, subnets, NAT, IG, etc.
- ```applicationConfig```: Application Config bootstraps the dataplane with applications. In SaaS, every dataplane has common app configs such as Nginx, Prometheus, etc. The underlying dataplane controller bootstraps the dataplane with the Helm configs provided.

```yaml
dataplane:
  cloudType: aws
  cloudRegion: us-east-1
  saasType: shared
  cloudAuth:
    awsAuth:
      awsAccessKey: <kidapaji>
      awsSecretKey: <sabvdya>
  provisionNetwork: true
  kubernetesConfig:
    eks:
      version: '1.27'
  applicationConfig:
  - name: "nginx"
    namespace: nginx-ingress
    chartName: "ingress-nginx"
    repoName: "ingress-nginx"
    repoUrl: "https://kubernetes.github.io/ingress-nginx"
    version: "1.9.4"
    values:
    - controller.nodeSelector.nodeType=system
  - name: "zookeeper-operator"
    namespace: zk-operator
    chartName: "zookeeper-operator"
    repoName: "pravega"
    repoUrl: "https://charts.pravega.io"
    version: "0.2.15"
    values:
    - nodeSelector.nodeType=system
```
