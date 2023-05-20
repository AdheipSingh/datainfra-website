---
slug: setting-up-apache-pinot-on-kubernetes-in-under-15-minutes
title: Setting up Apache Pinot on Kubernetes in Under 15 Minutes
url: setting-up-apache-pinot-on-kubernetes-in-under-15-minutes
authors: [Adheip Singh]
tags: [pinot, kubernetes]
---

*Learn how to install Pinot Control Plane on Kubernetes, configure your first Pinot cluster, and dive into the control plane features.*

**Introduction**

We believe that Kubernetes can serve as a control plane for any application, including those with data and stateful sets. While Helm charts are useful for configuration management, they don't maintain the state of the application. That's why we've built a control plane based on the Kubernetes operator pattern that acts as a bridge between your application's requirements and Kubernetes infrastructure.

**Why Control Plane for Pinot ?**

*Pinot control plane for k8s is specifically designed to improve the user experience of running Apache Pinot clusters. As a distributed database, Pinot can be challenging to run on Kubernetes without the right tools. Our project is based on the DSOI Spec and built using the Operator-Runtime library to provide a more user-friendly and Kubernetes-friendly experience.*

<!--truncate-->

This project is based on the Kubernetes operator pattern, but it is not exclusively limited to this pattern. Given the complexity of Pinot, relying solely on Kubernetes operators may or may not be sufficient to effectively manage its operations. Our vision for the project is to create a comprehensive set of tools and utilities that enable seamless deployment and operation of Pinot on Kubernetes.

- In this tutorial, we are going to deploy an Apache Pinot cluster on KIND.
- This tutorial can easily run on your local machine.
- Apache Pinot needs zookeeper for metadata management and is a dependency to run pinot.
- In this tutorial we shall install zookeeper using zookeeper-operator.

### Prerequisites

To follow this tutorial you will need:

- The KIND CLI installed.
- The KUBECTL CLI installed.
- Docker up and Running.

### Install Kind Cluster

Create kind cluster on your machine.

<TerminalWindow>

```
kind create cluster --name pinot
```

</TerminalWindow>


### Installing Pinot Control Plane

Pinot control plane supports Helm Chart-based deployment.

Clone the repo:

<TerminalWindow>

```
git clone https://github.com/datainfrahq/pinot-control-plane-k8s.git
cd pinot-control-plane-k8s/
```

</TerminalWindow>


### Deploy Pinot Control Plane

The following commands deploys the control plane using helm in the pinot-control-plane namespace.

<TerminalWindow>

```
helm repo add datainfra https://charts.datainfra.io

helm upgrade --install \
--namespace pinot-control-plane \
--create-namespace \
pinot-control-plane datainfra/pinot-control-plane
```

</TerminalWindow>

### Deploy Zookeeper Operator and Zookeeper

The following command will take a few minutes to complete. It will deploy the zookeeper operator in the zookeeper-operator namespace and zk statefulset in the pinot namespace.

<TerminalWindow>

```
make helm-install-zk-operator
```

</TerminalWindow>


### Installing Pinot Cluster

- Install Pinot Cluster CR

<TerminalWindow>

```
kubectl apply -f tutorials/00-pinot-kind/pinot-basic.yaml -n pinot
```

</TerminalWindow>


### Installing Kafka Cluster and Create Topics

Add Helm repo and install Kafka cluster

<TerminalWindow>

``` 
# Add Kafka
helm repo add kafka https://charts.bitnami.com/bitnami
# Deploy kafka
helm install -n pinot kafka kafka/kafka --set replicas=1,zookeeper.image.tag=latest
```

</TerminalWindow>

Once Kafka Pods are up and running, create topics

<TerminalWindow>

```
# Add Kafka
helm repo add kafka https://charts.bitnami.com/bitnami
# Deploy kafka
helm install -n pinot kafka kafka/kafka --set replicas=1,zookeeper.image.tag=latest
```

</TerminalWindow>

### Create Pinot Schema

Pinot control plane supports the creation of schema.

<TerminalWindow>

``` 
kubectl apply -f tutorials/00-pinot-kind/pinotschema-basic.yaml -n pinot
```

</TerminalWindow>


### Create Pinot Table

Pinot control plane supports the creation of tables.

<TerminalWindow>

``` 
kubectl apply -f tutorials/00-pinot-kind/pinottable-basic.yaml -n pinot
```

</TerminalWindow>


# Ingest Data Into Kafka

Ingest Data into kafka topics

<TerminalWindow>

```
kubectl apply -f tutorials/00-pinot-kind/pinot-realtime-kafka.yaml
```

</TerminalWindow>


### Access Pinot Console
Access the pinot console by port-forward controller pod or svc.

<TerminalWindow>

``` 
kubectl port-forward pinot-controller-controller-0 -n pinot 9000
```
</TerminalWindow>
