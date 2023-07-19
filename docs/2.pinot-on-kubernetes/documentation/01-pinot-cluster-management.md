---
sidebar_position: 1
description: "Access Pinot on Kubernetes Cluster Management documentation to optimize your Pinot cluster. Learn best practices for efficient cluster management in Pinot on Kubernetes with DataInfra.io's comprehensive resources."
title: "Pinot on Kubernetes Cluster Management Documentation"
hide_title: "true"
sidebar_label: "Pinot Cluster Management"
---

# Pinot Cluster Management


- This documentation cover's the ```Pinot``` custom resource and its fields.
- ```Pinot``` CR holds the desired state of the pinot cluster.
- Reference to [pinot CR](https://github.com/datainfrahq/pinot-control-plane-k8s/blob/main/tutorials/00-pinot-kind/pinot-basic.yaml)


### GVK - Group Version Kind

-   Pinot Controller watches and reconciles `Pinot` custom resource.
-   `Pinot CRD` defines the following:

```yaml
Group: datainfra.io
Version: v1beta1
Kind: Pinot
```

#### Names

```yaml
kind: Pinot
listKind: PinotList
plural: pinots
singular: pinot
```

### Scope

-   `Pinot CRD` scopes `Pinot` to namespace scope.

:::info
In kubernetes resources are scoped to namespace or cluster.  
Ex: `clusterrole` is scoped to cluster whereas `deployments` are scoped to namespace.
:::

### Pinot Custom Resource Fields

Pinot Custom Resource is designed on the principles defined by the [DSOI-SPEC](../../3.distributed-systems-operator-interface/index.md)

#### External Spec

Pinot has a dependency for zookeeper. Its an external dependency, the control plane is not
responsible for creating or managing zookeeper instances. The spec gives an option to define
external dependency as a seperation of concern principle for configuration management.

```yaml
external:
    zookeeper:
        spec:
            zkAddress: zk-pinot-zookeeper-headless.pinot:2181
```

#### K8s Config - Configurations specific to kubernetes

This section defines Kubernetes configurations. The node section (defined below) requires a reference to a Kubernetes configuration, in the `nodes.k8sConfig` section.

```yaml
k8sConfig:
    ## Name of the k8s config
    - name: controller

      ## k8s service account
      serviceAccountName: "default"

      ## ports
      port:
          - name: controller
            containerPort: 9000
            protocol: TCP

      ## define k8s service
      service:
          type: LoadBalancer
          ports:
              - protocol: TCP
                port: 9000
                targetPort: 9000

      ## probes
      livenessProbe:
          initialDelaySeconds: 60
          periodSeconds: 10
          httpGet:
              path: "/health"
              port: 9000
      readinessProbe:
          initialDelaySeconds: 60
          periodSeconds: 10
          httpGet:
              path: "/health"
              port: 9000

      ## define env variables
      env:
          - name: LOG4J_CONSOLE_LEVEL
            value: info

      ## define image
      image: apachepinot/pinot:latest

      ## define storage config with a name, mountPath and pvcSpec.

      storageConfig:
          - name: pinotcontroller
            mountPath: "/var/pinot/controller/data"
            spec:
                accessModes:
                    - ReadWriteOnce
                storageClassName: ${STORAGE_CLASS_NAME}
                resources:
                    requests:
                        storage: 1Gi
```

#### Node Config - Configurations specific to Pinot Nodes

This section defines configurations for different pinot nodes. The node section (defined below) requires a reference to a pinot node configuration, in the `nodes.pinotNodeConfig` section.

```yaml
pinotNodeConfig:
    - name: controller
      java_opts: "-XX:ActiveProcessorCount=2 -Xms256M -Xmx1G -XX:+UseG1GC -XX:MaxGCPauseMillis=200
          -Xlog:gc*:file=/opt/pinot/gc-pinot-controller.log -Dlog4j2.configurationFile=/opt/pinot/conf/log4j2.xml
          -Dplugins.dir=/opt/pinot/plugins"
      data: |-
          controller.port=9000
          controller.data.dir=/var/pinot/controller/data
          pinot.set.instance.id.to.hostname=true
          controller.task.scheduler.enabled=true
```

#### Nodes - Maps K8s Configurations with Pinot Node Configurations

This section defines the specifications of a Pinot node type and maps each type to k8s configuration and node specific configuration.

:::info
Pinot has different nodess. Each node is defined with a `nodeType`.  
This is a key for building specific logic for each `nodeType`.  
Pinot has `server`, `broker`, `controller` and `minion` as `nodeTypes`.
:::

```yaml
nodes:
    ## create a pinot-controller ie name of the node
    ## with a statefulset having single replica having
    ## nodeType as controller nodetype and k8s config controller
    ## and pinotNodeConfig as controller.
    - name: pinot-controller
      kind: Statefulset
      replicas: 1
      nodeType: controller
      k8sConfig: controller
      pinotNodeConfig: controller
```

:::info
Mapping of node name to k8s config and pinot node config is many to one and one to one.
Ex: i want to have three servers out of which two belongs to a `high mem configuration` and other belongs to `low mem configuration`. Here is what the mapping looks in the nodes section:

```yaml
nodes:
    - name: pinot-server-az1
      kind: Statefulset
      replicas: 1
      nodeType: server
      k8sConfig: high-mem-server
      pinotNodeConfig: high-mem-server
    - name: pinot-server-az2
      kind: Statefulset
      replicas: 1
      nodeType: server
      k8sConfig: high-mem-server
      pinotNodeConfig: high-mem-server
    - name: pinot-server-az3
      kind: Statefulset
      replicas: 1
      nodeType: server
      k8sConfig: low-mem-server
      pinotNodeConfig: low-mem-server
```

:::

:::note
Having 3 replicas of `nodeType` server isn't the same as having 3 instances of `nodeType` servers.
:::

### Deployment Order - Incremental Upgrades

Define the order of your deployment. Control plane upgrades the pinot nodes on the basis of the
order defined.

```yaml
deploymentOrder:
    - controller
    - broker
    - server
    - minion
```

### Plugins

Define the plugins to be added to pinot nodes. This section is scoped at `spec.plugins` in the pinot CR.

```yaml
plugins:
    - pinot-s3
```
