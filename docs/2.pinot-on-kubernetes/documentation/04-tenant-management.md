---
sidebar_position: 1
description: "Streamline tenant management for Pinot on Kubernetes with DataInfra.io's documentation. Discover best practices and resources for efficient and scalable Pinot tenant management."
title: "Pinot on Kubernetes Tenant Management Documentation"
hide_title: "true"
sidebar_label: "Pinot Tenant Management"
---

# Pinot Tenant Management

- This documentation cover's the ```PinotTenant``` custom resource and its fields.
- ```PinotTenant``` CR holds the desired state of a pinot table.
- Reference to [Pinot Tenant CR](https://github.com/datainfrahq/pinot-control-plane-k8s/blob/main/tutorials/02-pinot-tenant/pinottenant-broker.yaml)

:::caution
Pinot Tenant controller is in experimental phase.           
Expect breaking changes.
:::

### GVK - Group Version Kind

- Pinot Tenant Controller watches and reconciles ```PinotTenant``` custom resource. 
- ```PinotTenant CRD``` defines the following:

```yaml
Group: datainfra.io
Version: v1beta1
Kind: PinotTenant
```
#### Names

```yaml
kind: PinotTenant
listKind: PinotTenantList
plural: pinottenants
singular: pinottenant
```

### Scope

- ```PinotTenant CRD``` scopes ```PinotTenant``` to ```namespace``` scope.

:::info
In kubernetes resources are scoped to namespace or cluster.         
Ex: ```clusterrole``` is scoped to cluster whereas ```deployments``` are scoped to namespace.
:::

### Pinot Tenant Custom Resource Fields

Pinot Tenant custom resource is designed to define the desired state of a pinot tenant.

#### Pinot Cluster 
To create pinot tenant specify a pinot cluster name field in ```spec.pinotCluster```.

```yaml
spec:
  pinotCluster: pinot-basic
```

#### Pinot Tenant Type
Specify pinot tenant type in ```spec.pinotTenantType```.

```yaml
pinotTenantType: BROKER
```
:::info
Pinot tenant types supported are ```BROKER``` and ```SERVER```
:::

### Pinot Tenant Json
Specify pinot tenant json ```spec.tenants.json```

```yaml
tenants.json: |- 
    {
      "tenantRole": "BROKER",
      "tenantName": "sampleBrokerTenant",
      "numberOfInstances": 1
    }
```
