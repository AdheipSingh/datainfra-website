---
sidebar_position: 1
---

# Pinot on Kubernetes - Kind

## Introduction

- In this tutorial, we are going to deploy an Apache Pinot cluster on [KIND](https://kind.sigs.k8s.io/).
- This tutorial can easily run on your local machine. 

## Prerequisites

To follow this tutorial you will need:

- The [KIND CLI](https://kind.sigs.k8s.io/docs/user/quick-start#installation) installed.
- The [KUBECTL CLI](https://kubernetes.io/docs/tasks/tools/#kubectl) installed.

## Install Kind Cluster

Create kind cluster on your machine.

```
kind create cluster --name pinot
```

## Install Control Plane for Pinot

This chart bootstraps Pinot Control Plane on a Kubernetes cluster using the [Helm](https://helm.sh/) package manager.


### Configure DataInfra Helm Repo

```
helm repo add datainfra https://charts.datainfra.io
```

### Installing the Chart
Install this chart using:

```
helm upgrade --install \
--namespace pinot-control-plane \
--create-namespace \
pinot-control-plane datainfra/pinot-control-plane
```

## Install Pinot Custom Resource

Lets install pinot custom resource:

#### Get Pinot Control Plane repo:
Clone the github repo and cd to the pinot-control-plane-k8s dir:
```
git clone https://github.com/datainfrahq/pinot-control-plane-k8s.git
cd pinot-control-plane-k8s/ 
```

#### Create Pinot Namespace
Create pinot namespace for pinot custom resource to be installed:
```
kubectl create namespace pinot
```

#### Export Storage Class
Storage class is passed to the pinot custom resource yaml. 

```
export STORAGE_CLASS_NAME=standard
```

:::note

Pinot Control Plane supports creating statefulsets as well as deployments.              
In this tutorial we shall create all pinot nodetypes as statefulsets.
:::

#### Install Custom Resource

```
envsubst <  examples/00-pinot-kind/pinot-basic.yaml | kubectl apply -f - -n pinot
```

#### View Pinot Control Plane Events

```
kubectl describe pinot -n pinot 
```