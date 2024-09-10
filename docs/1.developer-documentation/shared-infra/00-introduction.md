---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Introduction
slug: /shared-infra/introduction
---

## Shared Infrastructure

In this doc, we are going to demonstrate how to use BaaZ to build shared infrastructure and deploy apps for various customers.

### Prerequisite

- Baaz controller is running
- baaz cli is installed

#### Step#1 (Export Baaz URL)

```bash
$ export BAAZ_URL={baaz_server_url}
```

#### Step#2 (Create Customer)

Example customer.yaml file:

```yaml
customer:
  name: foo
  saas_type: shared
  cloud_type: aws
  labels: 
    tier: free
    region: us-east-1
```

```bash
$ baaz create customer -f customer.yaml
Customer Created Successfully
```

#### Step#3 (Create Dataplane)

Example dataplane.yaml file:

```yaml
dataplane:
  cloudType: aws
  cloudRegion: us-east-1
  saasType: private
  cloudAuth:
    awsAuth:
      awsAccessKey: ""
      awsSecretKey: ""
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

Note: Put your original access key and secret key id before creating

```bash
$ baaz create dataplane -f dataplane.yaml
Dataplane Created Successfully
```

To check created dataplane: 

```bash
$ kubectl get dataplanes -n shared
NAME                 STATUS   AGE
aws-us-east-1-qcqs   Ready    7m16s
```

#### Step#4 (Add customer into dataplane)

```bash
$ baaz add dataplane --customer=foo --dataplane=aws-us-east-1-qcqs
Dataplane Added to Customer
```

Note: Replace customer name and dataplane name as your need.

