---
sidebar_position: 1
description: Deploy an Apache Pinot cluster with minio as deepstorage on KIND.
tags: [pinot on kubernetes, local setup, KIND]
---

# Pinot on Kubernetes - Deepstorage

-   In this tutorial, we are going to deploy an [Apache Pinot](https://github.com/apache/pinot) cluster on [KIND](https://kind.sigs.k8s.io/) with [minio](https://github.com/minio/minio) as deepstorage.
-   This tutorial can easily run on your local machine.
-   [Apache Pinot](https://github.com/apache/pinot) needs zookeeper for metadata management and is a dependency to run pinot.
-   In this tutorial we shall install zookeeper using [zookeeper-operator](https://github.com/pravega/zookeeper-operator).
-   In this tutorial we shall also create ```PinotSchema``` and ```PinotTable``` using control plane and ingest data from ```Kafka```.

## Prerequisites

To follow this tutorial you will need:

-   The [KIND CLI](https://kind.sigs.k8s.io/docs/user/quick-start#installation) installed.
-   The [KUBECTL CLI](https://kubernetes.io/docs/tasks/tools/#kubectl) installed.
-   The [MINIO MC CLI](https://min.io/docs/minio/linux/reference/minio-mc.html).
-   Docker up and Running.

## Install Kind Cluster

Create kind cluster on your machine.

<TerminalWindow>

```
kind create cluster --name pinot
```

</TerminalWindow>

## Get Pinot Control Plane repo

Clone the github repo and cd to the pinot-control-plane-k8s dir.

<TerminalWindow>

```
git clone https://github.com/datainfrahq/pinot-control-plane-k8s.git
cd pinot-control-plane-k8s/
```

</TerminalWindow>

## Install Zookeeper

Let's first get the pinot control plane repo.

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

## Install Minio 

Install minio operator and a minio tenant.
<TerminalWindow>

```
make helm-install-minio-operator
```

</TerminalWindow>

:::info
The underlying make command deploy's minio-operator in `minio-operator` namespace.
A minio CR ie ```tenant``` is deployed in `pinot` namespace.  
Run the following command to check the status of the minio cluster `kubectl get tenant -n pinot`.
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

### Install Custom Resource

:::tip
Make sure the control plane pods are up and running successfully.       
```kubectl get pods -n pinot-control-plane```
:::
<TerminalWindow>

```
kubectl apply -f tutorials/03-pinot-minio/pinot-minio.yaml -n pinot
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

## Install Apache Kafka Using Helm

Install kafka helm chart

<TerminalWindow>

```
helm repo add kafka https://charts.bitnami.com/bitnami
helm install -n pinot kafka kafka/kafka --set replicas=1,zookeeper.image.tag=latest
```

</TerminalWindow>

### Create Kafka Topics

Create kafka topics for ingesting data.

:::note
Make sure kafka cluster is up and running. 
A single statefulset of kafka pod is created.
```kubectl get sts -n pinot```
:::

<TerminalWindow>

```
kubectl -n pinot exec kafka-0 -- kafka-topics.sh --bootstrap-server kafka-0:9092 --topic flights-realtime --create --partitions 1 --replication-factor 1
kubectl -n pinot exec kafka-0 -- kafka-topics.sh --bootstrap-server kafka-0:9092 --topic flights-realtime-avro --create --partitions 1 --replication-factor 1
```

</TerminalWindow>

## Create Pinot Schema 

Create pinot schema using control plane. 

<TerminalWindow>

```
kubectl apply -f tutorials/03-pinot-minio/pinotschema-minio.yaml -n pinot
```

</TerminalWindow>

:::tip
Check the status of pinot schema using kubectl.
```
kubectl get pinotschema -n pinot -o yaml
```
:::

## Create Pinot Table 

Create pinot table using control plane. 

<TerminalWindow>

```
kubectl apply -f tutorials/03-pinot-minio/pinottable-minio.yaml -n pinot
```

</TerminalWindow>

:::tip
Check the status of pinot table using kubectl.
```
kubectl get pinottable -n pinot -o yaml
```
:::

## Ingest Data into Kafka

Ingest data into kafka using kubernetes jobs.

<TerminalWindow>

```
kubectl apply -f tutorials/03-pinot-minio/pinot-realtime-kafka.yaml -n pinot
```

</TerminalWindow>

## Check for segments in deepstorage using minio client

Using mc client let's access minio API's.

### Port-forward minio pod

Access minio pod locally on port ```9000```.

<TerminalWindow>

```
kubectl port-forward svc/myminio-hl -n pinot 9000
```

</TerminalWindow>

### Add minio alias

Add minio alias as pinot. User is ```minio``` and password is ```minio123```

<TerminalWindow>

```
mc alias set pinot http://localhost:9000 minio minio123 
```

</TerminalWindow>


### List Segments

List segments in deepstorage.

<TerminalWindow>

```
mc ls pinot  --recursive
```

</TerminalWindow>

:::tip
Adding the following configs in pinottable custom resource can increase the time taken segments pushing to minio/deepstorage
```
"realtime.segment.flush.threshold.rows": "100",
"realtime.segment.flush.threshold.time": "1m",
"realtime.segment.flush.threshold.segment.size": "1M",
```
:::
