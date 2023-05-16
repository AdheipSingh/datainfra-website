---
sidebar_position: 1
description: Deploy a Apache Pinot cluster on AWS.
tags: [pinot on kubernetes, AWS, S3 ]
---

# Pinot Cluster On AWS with S3 as Deepstorage

-   In this tutorial, we are going to deploy an [Apache Pinot](https://github.com/apache/pinot) cluster on AWS with s3 as deepstorage.
-   [Apache Pinot](https://github.com/apache/pinot) needs zookeeper for metadata management and is a dependency to run pinot.
-   In this tutorial we shall install zookeeper using [zookeeper-operator](https://github.com/pravega/zookeeper-operator).

## Prerequisites

To follow this tutorial you will need:

-   The [KIND CLI](https://kind.sigs.k8s.io/docs/user/quick-start#installation) installed.
-   The [KUBECTL CLI](https://kubernetes.io/docs/tasks/tools/#kubectl) installed.
-   EKS or Self hosted k8s cluster on AWS.
-   S3 bucket.

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
By default AWS cluster has storage class `gp2`.         
gp2 runs as an addon or self managed.       
To get the storage class of your cluster run `kubectl get storageclass`.
:::

### Install Custom Resource

:::tip
Make sure the control plane pods are up and running successfully.       
```kubectl get pods -n pinot-control-plane```
:::

## Configure AWS Bucket and Access keys

Lets configure access to aws by specifying access and secret keys.

### AWS access AND secret keys in config 
Configure your aws bucket name, and keys in ```spec.deepStorage.spec[0].nodeType``` controller.
Adding the keys in config isn't the best way to add configure pinot on aws.

```
controller.data.dir=s3://${BUCKET_NAME}
pinot.controller.storage.factory.s3.accessKey=${ACCESS_KEY}
pinot.controller.storage.factory.s3.secretKey=${SECRET_KEY}
```
### AWS access AND secret keys as ENV 

- Add creds to ```aws-credentials``` file.

<TerminalWindow>

```
cat << EOF > aws-credentials
AWS_ACCESS_KEY_ID=access123
AWS_SECRET_ACCESS_KEY=secret123
EOF
```

</TerminalWindow>

- Create k8s secret creds from ```aws-credentials``` file.

<TerminalWindow>

```
kubectl create secret generic aws-credentials --from-env-file=aws-credentials -n pinot
```

</TerminalWindow>

- Ref this secret as an env in controller k8s config section.

<TerminalWindow>

```
env:
 - name: AWS_ACCESS_KEY_ID
   valueFrom:
    secretKeyRef:
        name: aws-credentials
        key: AWS_ACCESS_KEY_ID
 - name: AWS_SECRET_ACCESS_KEY
   valueFrom:
    secretKeyRef:
        name: aws-credentials
        key: AWS_SECRET_ACCESS_KEY
```

</TerminalWindow>


### Install Pinot CR

<TerminalWindow>

```
kubectl apply -f tutorials/05-pinot-aws/pinot-aws.yaml -n pinot
```

</TerminalWindow>

:::info
In the CR define plugins in ```spec.plugins```.
```
 plugins:
   - pinot-s3
```
:::
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
kubectl apply -f tutorials/05-pinot-aws/pinotschema-aws.yaml  -n pinot
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
kubectl apply -f tutorials/05-pinot-aws/pinottable-aws.yaml -n pinot
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
kubectl apply -f tutorials/05-pinot-aws/pinot-realtime-kafka.yaml -n pinot
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
