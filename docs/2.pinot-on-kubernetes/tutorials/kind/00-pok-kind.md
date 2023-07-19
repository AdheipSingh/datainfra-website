---
sidebar_position: 1
sidebar_label: Simple Pinot Cluster
title: "Deploying Pinot on Kind: Tutorial"
description: "Learn how to deploy Pinot on Kind with our comprehensive tutorial. Discover the potential of distributed data systems and optimize performance for your analytics workloads."
tags: [pinot on kubernetes, local setup, KIND]
---

# Simple Pinot Cluster

-   In this tutorial, we are going to deploy an [Apache Pinot](https://github.com/apache/pinot) cluster on [KIND](https://kind.sigs.k8s.io/).
-   This tutorial can easily run on your local machine.
-   [Apache Pinot](https://github.com/apache/pinot) needs zookeeper for metadata management and is a dependency to run pinot.
-   In this tutorial we shall install zookeeper using [zookeeper-operator](https://github.com/pravega/zookeeper-operator).

## Prerequisites

To follow this tutorial you will need:

-   The [KIND CLI](https://kind.sigs.k8s.io/docs/user/quick-start#installation) installed.
-   The [KUBECTL CLI](https://kubernetes.io/docs/tasks/tools/#kubectl) installed.
-   Docker up and Running.

## Install Kind Cluster

Create kind cluster on your machine.

<TerminalWindow>

```
kind create cluster --name pinot
```

</TerminalWindow>

## Install Zookeeper

Let's first get the pinot control plane repo.

### Get Pinot Control Plane repo

Clone the github repo and cd to the pinot-control-plane-k8s dir.

<TerminalWindow>

```
git clone https://github.com/datainfrahq/pinot-control-plane-k8s.git
cd pinot-control-plane-k8s/
```

</TerminalWindow>

### Deploy Zookeeper Using Zookeeper Operator

This make command bootstraps zookeeper operator and zookeeper CR on a Kubernetes cluster using the [Helm](https://helm.sh/) package manager.

:::info
The command `make helm-install-zk-operator` can take couple of minutes.
:::

<TerminalWindow>

```
make helm-install-zk-operator
```

</TerminalWindow>

:::info
The underlying make command deploy's zookeeper-operator in `zookeeper-operator` namespace.
A zookeeper CR is deployed in `pinot` namespace.  
`pinot` namespace and `zookeeper-operator` namespace is created on the fly.  
Run the following command to check the status of the zk cluster `kubectl get zk -n pinot`.
:::

## Install Control Plane for Pinot

This chart bootstraps Pinot Control Plane on a Kubernetes cluster using the [Helm](https://helm.sh/) package manager.

### Configure DataInfra Helm Repo

<TerminalWindow>

```
helm repo add datainfra https://charts.datainfra.io
```

</TerminalWindow>

:::info
Pinot control plane is fast moving project.  
To grab the latest helm release update the repo
if already added using:  
`helm repo update datainfra`.
:::

### Install the Chart

Install pinot control plane chart with helm:

<TerminalWindow>

```
helm upgrade --install \
--namespace pinot-control-plane \
--create-namespace \
pinot-control-plane datainfra/pinot-control-plane
```

</TerminalWindow>

## Install Pinot Custom Resource

Let's install pinot custom resource:

:::info

Pinot Control Plane supports creating statefulsets as well as deployments.  
In this tutorial we shall create all pinot nodetypes as statefulsets.  
By default Kind cluster has storage class `standard`  
To get the storage class of your cluster run `kubectl get storageclass`.
:::

### Install Custom Resource

:::tip
Make sure the control plane pods are up and running successfully.       
```kubectl get pods -n pinot-control-plane```
:::
<TerminalWindow>

```
kubectl apply -f tutorials/00-pinot-kind/pinot-basic.yaml -n pinot
```

</TerminalWindow>

### View Pinot Control Plane Events

<TerminalWindow>

```
kubectl describe pinot -n pinot
```

</TerminalWindow>


:::tip
Run the following command to get the all resource created by the control plane.  
`kubectl get all -n pinot`
:::

### Access Pinot Console

Pinot console can be accessed by port-forwarding pinot controller service. Make sure all pods are up and running before port-forwarding.

<TerminalWindow>

```
kubectl port-forward svc/pinot-controller-controller-svc -n pinot 9000
```

</TerminalWindow>
