---
sidebar_position: 1
title: "Pinot Control Plane Documentation: Simplify and Scale Pinot on Kubernetes"
hide_title: true
sidebar_label: "Pinot Control Plane"
description: Access the Pinot Control Plane documentation to simplify and scale your Pinot deployment on Kubernetes. Learn how DataInfra.io's comprehensive guides and best practices empower efficient Pinot management, improving real-time analytics capabilities.
---

# Pinot Control Plane
Pinot control plane is based on kubernetes operator's and custom controllers. Its based on the principles of the ```distributed system operator interface``` and uses ```operator runtime``` internally.         

## Introduction

- This documentation cover's the core features of pinot control plane.
- Pinot Control Plane consists of 4 controllers:
   ```
    Pinot Controller: Reconcile's Pinot CR.
    Schema Controller: Reconcile's  Pinot Schema CR.
    Table Controller: Reconcile's  Pinot Table CR.
    Tenant Controller: Reconcile's  Pinot Tenant CR.
    ```

:::info
Terminology         
```NodeType``` Each pinot node has a nodeType ie broker, controller, server and minion.
:::

## Features

Let's dive into the features for pinot control plane.

### Installation of heterogeneous pinot clusters across mutiple AZ's.

The ability to define a heterogeneous pinot spec comes from the distributed system operator interface. This gives the users utmost flexibilty in defining multiple nodes with nodeType.

User's can specify if the pinot node deployed is ```Statefulset``` or ```Deployment``` 

Example:

```
  - name: pinot-server
    kind: Statefulset
    replicas: 1
    nodeType: server
    k8sConfig: server
    pinotNodeConfig: server
```

### Rolling Upgrades - Incremental and Ordered Deployment 

- When a pinot cluster is deployed all the pods are deployed in parallel ie the first installation.

:::info
Pinot Controller calculates the installations by checking on the generation field in the CR.
:::

- Upgrades are incremental ie control plane does not upgrade all pods at once. It upgrades the pinot cluster in a defined order. The order is defined by the user in the pinot custom resources.

```
deploymentOrder:
  - controller
  - broker
  - server
  - minion
```

:::tip
The deploymentOrder can be changed according to scenarios.
:::

:::info
During an upgrade if a pods goes into a bad state, the pinot controller halts the deployment and does not rollout the changes to the new pods.
In this case a manual intervetion is required.
:::

### Deny List

- Pinot controller watches namespaces and reconciles them. It support watching
1. A single namespace
2. All namespaces.

Example : As a user you want to watch All namespaces but exclude ```kube-system``` namespace. You can add it in the ```DENY_LIST```.

:::info
Deny List is an env var in the pinot control plane.
:::

### Schema Management

Schema controller is responsible for reconciling ```PinotSchema CR```. 
Any state change in the pinot schema is reconciled by the schema controller. Schema controller is responsible CRUD operations of pinot schema.

Refer to Schema Management for more info.

### Table Management

Table controller is responsible for reconciling ```PinotTable CR```. 
Any state change in the pinot table is reconciled by the table controller. Table controller is responsible CRUD operations of pinot table.

Refer to Table Management for more info.

### Automatic Segment Reloads

On state change on pinot schema CR, table controller automatically reloads the segments by caling the pinot API.

:::info
Specify ```segmentReload: true``` in the pinot table resource.
:::

### Tenant Management ( Experimental )

Tenant controller is responsible for reconciling ```PinotTenant CR```. 
Any state change in the pinot tenant is reconciled by the tenant controller. Tenant controller is responsible CRUD operations of pinot tenant.

Refer to Tenant Management for more info.

