---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Tutorial
slug: /shared-infra-saas/tutorial
---

## Shared SaaS - Zookeeper as a Service

In this tutorial, we will explore how to leverage BaaZ to build a shared infrastructure SaaS. In a shared infrastructure SaaS model, multiple customers’ applications are deployed within a single data plane, allowing for efficient resource sharing and management. We will take zookeeper as an example here. 

### Prerequisites

- KIND / Minkube cluster or any k8s cluter where we can install BaaZ.
- Install BaaZ CLI.

### Scenario

In this we will create two customer ```foo``` and ```boo```. Each customer will have its own zk deployment.

### Install BaaZ Control Plane

- Download the BaaZ CLI
```sh

```
- Install BaaZ 
```sh
bz init --kubernetes_config_server_url="https://<IP/HOSTNAME>:<PORT>"
```

- Proxy BaaZ HTTP Server locally
```sh
bz proxy
```

- Export BaaZ Url 
```sh
export BAAZ_URL=http://localhost:8000
```

### Create Customers

- Lets create customer ```foo```.

```yaml
cat <<EOF > customer-foo.yaml
customer:
  name: foo
  saas_type: shared
  cloud_type: aws
  labels: 
    tier: free
    region: us-east-1
EOF
```

```sh
bz create customer -f customer-foo.yaml
```

- Lets create customer ```boo```.

```yaml
cat <<EOF > customer-boo.yaml
customer:
  name: boo
  saas_type: shared
  cloud_type: aws
  labels: 
    tier: free
    region: us-east-1
EOF
```

```yaml
bz create customer -f customer-boo.yaml
```

- Get all customers
```sh
bz get customers
```
```sh
+---------------+-----------+------------+-------------+-------------------+--------+
| CUSTOMER NAME | SAAS TYPE | CLOUD TYPE |  DATAPLANE  |      LABELS       | STATUS |
+---------------+-----------+------------+-------------+-------------------+--------+
|      boo      |  shared   |    aws     | unavailable | region: us-east-1 | active |
|               |           |            |             |    tier: free     |        |
+---------------+-----------+------------+-------------+-------------------+--------+
|      foo      |  shared   |    aws     | unavailable |    tier: free     | active |
|               |           |            |             | region: us-east-1 |        |
|               |           |            |             |                   |        |
+---------------+-----------+------------+-------------+-------------------+--------+
```

### Create Dataplane

- Create dataplane config, we will add an application config. This config shall automatically bootstrap our 
dataplane with ingress nginx and zookeeper operator.

```yaml
cat <<EOF > shared-dataplane.yaml
dataplane:
  cloudType: aws
  cloudRegion: us-east-1
  saasType: shared
  cloudAuth:
    awsAuth:
      awsAccessKey: "accesskey"
      awsSecretKey: "secretkey"
  provisionNetwork: true
  vpcCidr: "10.0.0.0/16"
  kubernetesConfig:
    eks:
      version: '1.29'
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
EOF
```
- Create dataplane

```sh
bz create dataplane -f shared-dataplane.yaml
```

- Get all dataplanes: 

```sh
bz get dataplanes 
```
```yaml
+--------------------+--------------+------------+-----------+----------------+---------+--------+
|   DATAPLANE NAME   | CLOUD REGION | CLOUD TYPE | CUSTOMERS | DATAPLANE TYPE | VERSION | STATUS |
+--------------------+--------------+------------+-----------+----------------+---------+--------+
| aws-us-east-1-anpa |  us-east-1   |    aws     |           |     shared     |  1.29   | Active |
+--------------------+--------------+------------+-----------+----------------+---------+--------+
```

### Add dataplane to customer

- Add customer ```foo``` to dataplane. 

```yaml
bz add dataplane --customer=foo --dataplane=<dataplane_name>
```
- Add customer ```boo``` to dataplane. 

```yaml
bz add dataplane --customer=boo --dataplane=<dataplane_name>
```

- Get dataplanes
```
bz get dataplanes
```

```yaml
+--------------------+--------------+------------+-----------+----------------+---------+--------+
|   DATAPLANE NAME   | CLOUD REGION | CLOUD TYPE | CUSTOMERS | DATAPLANE TYPE | VERSION | STATUS |
+--------------------+--------------+------------+-----------+----------------+---------+--------+
| aws-us-east-1-anpa |  us-east-1   |    aws     |    boo    |     shared     |  1.29   | Active |
|                    |              |            |    foo    |                |         |        |
+--------------------+--------------+------------+-----------+----------------+---------+--------+
```

- Get customers
```
bz get customers
```

```yaml
+---------------+-----------+------------+--------------------+-------------------+--------+
| CUSTOMER NAME | SAAS TYPE | CLOUD TYPE |     DATAPLANE      |      LABELS       | STATUS |
+---------------+-----------+------------+--------------------+-------------------+--------+
|      boo      |  shared   |    aws     | aws-us-east-1-anpa | region: us-east-1 | active |
|               |           |            |                    |    tier: free     |        |
+---------------+-----------+------------+--------------------+-------------------+--------+
|      foo      |  shared   |    aws     | aws-us-east-1-anpa | region: us-east-1 | active |
|               |           |            |                    |    tier: free     |        |
+---------------+-----------+------------+--------------------+-------------------+--------+
```

### Create Tenant Infrastructure

- Create tenant infra spec.

```yaml
cat <<EOF>> zk-tenant-infra.yaml
tenantsInfra:
  zk-small:
    machinePool:
    - name: zk-pool
      size: t2.small
      min: 1
      max: 3
      strictScheduling: disable
      type: default-priority
      labels:
        app: zk
        size: small
  zk-medium:
    machinePool:
    - name: zk-pool
      size: t2.medium
      min: 1
      max: 3
      strictScheduling: disable
      type: default-priority
      labels:
        app: zk
        size: medium
EOF
```
- Create tenantinfra for dataplane.

```yaml
bz create tenantsinfra -f zk-tenant-infra.yaml --dataplane  <dataplane_name>
```

- Get tenantsinfra 

```yaml
bz get tenantsinfra  --dataplane  <dataplane_name>
```

```yaml
+--------------------------------+--------------+-----------+-----+-----+----------------------+-------------------+------------------+--------+
|              NAME              | MACHINE POOL |   SIZE    | MIN | MAX |        LABELS        | STRICT SCHEDULING |       TYPE       | STATUS |
+--------------------------------+--------------+-----------+-----+-----+----------------------+-------------------+------------------+--------+
| aws-us-east-1-yduc-tenantinfra | zk-pool      | t2.medium |   1 |   3 | app: zk, size: small | disable           | default-priority | ACTIVE |
|                                | zk-pool      | t2.small  |   1 |   3 | app: zk, size: medium | disable           | default-priority | ACTIVE |
+--------------------------------+--------------+-----------+-----+-----+----------------------+-------------------+------------------+--------+
```

### Create tenants for each customer

- Create tenant spec.

```yaml
cat <<EOF>> zk-tenant-foo.yaml
tenants:
  networkSecurity: 
    interNamespaceTraffic: "Deny"
    allowedNamespaces: ["nginx-ingress"]
  application:
    name: "zk-foo"
    appSize: "zk-small"
EOF
```

- Create tenant for a customer

```yaml
bz create tenant -f zk-tenant-foo.yaml --tenant ws1-foo --customer foo
```

- Get tenants for a customer

```yaml
bz get tenants --customer foo
```

### Deploy Application for Customer

```yaml
cat <<EOF>> zk-cr-app-foo.yaml
application:
  - name:  "zk-cr"
    namespace: "ws1-foo"
    chartName: "zookeeper"
    repoName: "zookeeper"
    repoUrl: "https://charts.pravega.io"
    version: "0.2.15"
    values:
     - pod.nodeSelector.size=small
     - replicas=1
EOF
```