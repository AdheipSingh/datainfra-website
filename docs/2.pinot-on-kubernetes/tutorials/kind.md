---
sidebar_position: 1
---

# Pinot on Kubernetes - Kind

## Introduction

- In this tutorial, we are going to deploy an [Apache Pinot](https://github.com/apache/pinot) cluster on [KIND](https://kind.sigs.k8s.io/).
- This tutorial can easily run on your local machine.
- [Apache Pinot](https://github.com/apache/pinot) needs zookeeper for metadata management and is a dependency to run pinot.
- In this tutorial we shall install zookeeper using [zookeeper-operator](https://github.com/pravega/zookeeper-operator).

## Prerequisites

To follow this tutorial you will need:

- The [KIND CLI](https://kind.sigs.k8s.io/docs/user/quick-start#installation) installed.
- The [KUBECTL CLI](https://kubernetes.io/docs/tasks/tools/#kubectl) installed.
- Docker up and Running.

## Install Kind Cluster

Create kind cluster on your machine.

```
kind create cluster --name pinot
```

## Install Zookeeper

Let's first get the pinot control plane repo.

#### Get Pinot Control Plane repo
Clone the github repo and cd to the pinot-control-plane-k8s dir.
```
git clone https://github.com/datainfrahq/pinot-control-plane-k8s.git
cd pinot-control-plane-k8s/ 
```

#### Deploy Zookeeper Using Zookeeper Operator
This make command bootstraps zookeeper operator and zookeeper CR on a Kubernetes cluster using the [Helm](https://helm.sh/) package manager.

:::note
The command ```make helm-install-zk-operator``` can take couple of minutes. 
:::

```
make helm-install-zk-operator     
```

:::info
The underlying make command deploy's zookeeper-operator in ```zookeeper-operator``` namespace.
A zookeeper CR is deployed in ```pinot``` namespace.            
```Pinot``` namespace and ```zookeeper-operator``` namespace is created on the fly.          
Run the following command to check the status of the zk cluster ```kubectl get zk -n pinot```.
:::


## Install Control Plane for Pinot

This chart bootstraps Pinot Control Plane on a Kubernetes cluster using the [Helm](https://helm.sh/) package manager.


### Configure DataInfra Helm Repo

```
helm repo add datainfra https://charts.datainfra.io
```

:::info
Pinot control plane is fast moving project.         
To grab the latest helm release update the repo
if already added using:                  
```helm repo update datainfra```. 
:::

### Installing the Chart
Install this chart using:

```
helm upgrade --install \
--namespace pinot-control-plane \
--create-namespace \
pinot-control-plane datainfra/pinot-control-plane
```

## Install Pinot Custom Resource

Let's install pinot custom resource:

#### Export Storage Class
Storage class is passed to the pinot custom resource yaml. 

```
export STORAGE_CLASS_NAME=standard
```

:::info

Pinot Control Plane supports creating statefulsets as well as deployments.              
In this tutorial we shall create all pinot nodetypes as statefulsets.       
By default Kind cluster has storage class ```standard```        
To get the storage class of your cluster run ```kubectl get storageclass```.
:::

#### Install Custom Resource

```
envsubst <  examples/00-pinot-kind/pinot-basic.yaml | kubectl apply -f - -n pinot
```

:::info

Install envsubst on Mac
```
brew install gettext
brew link --force gettext 
```
:::

#### View Pinot Control Plane Events

```
kubectl describe pinot -n pinot 
```

:::tip
Run the following command to get the all resource created by the control plane.         
```kubectl get all -n pinot```
:::
#### Access Pinot Console

Pinot console can be accessed by port-forwarding pinot controller service
```
kubectl port-forward svc/pinot-controller-controller-svc -n pinot 9000
```
