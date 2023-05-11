---
sidebar_position: 1
description: Deep Dive into Pinot Table Custom Resource
---

# Pinot Table Management

- This documentation cover's the ```PinotTable``` custom resource and its fields.
- ```PinotTable``` CR holds the desired state of a pinot table.
- Reference to [Pinot Table CR](https://github.com/datainfrahq/pinot-control-plane-k8s/blob/main/examples/00-pinot-kind/pinottable-basic.yaml)

:::info
Pinot Table controller is responsible for creation, updation and
deletion of pinot table.       
Update of pinot schema results in segment reload.     
Pinot table controller is responsible for triggering segment reload on state change.
:::

### GVK - Group Version Kind

- Pinot Table Controller watches and reconciles ```PinotTable``` custom resource. 
- ```PinotTable CRD``` defines the following:

```yaml
Group: datainfra.io
Version: v1beta1
Kind: PinotTable
```

```yaml
kind: PinotTable
listKind: PinotTableList
plural: pinottables
singular: pinottable
```

### Scope

- ```PinotTable CRD``` scopes ```PinotTable``` to ```namespace``` scope.

:::info
In kubernetes resources are scoped to namespace or cluster.         
Ex: ```clusterrole``` is scoped to cluster whereas ```deployments``` are scoped to namespace.
:::

### Pinot Table Custom Resource Fields

Pinot Table custom resource is designed to define the desired state of a pinot table.

#### Pinot Cluster 
To create pinot table specify a pinot cluster name field in ```spec.pinotCluster```.

```yaml
spec:
  pinotCluster: pinot-basic
```

#### Pinot Schema
Specify the created pinot schema for the table in ```spec.pinotSchema```.

```yaml
spec:
  pinotSchema: pinot-basic
```

#### Pinot Table
Specify the type of table in ```spec.pinotTableType```.

```yaml
spec:
  pinotTableType: realtime
```
:::info
pinotTableType supports ```realtime```, ```offline``` and ```hybrid``` as values.
:::

#### Segments Reload
Pinot control plane triggers segment reload on state change of the pinot schema CR.
In order to enable auto reload of segments to ```spec.segmentReload: true```

```
spec:
  segmentReload: true
```

### Pinot Table Json
Specify the pinot table json in ```spec.tables.json```.

```
tables.json: |-
    {
      "tableName": "airlineStats",
      "tableType": "REALTIME",
      "segmentsConfig": {
        "timeColumnName": "DaysSinceEpoch",
        "timeType": "DAYS",
        "retentionTimeUnit": "DAYS",
        "retentionTimeValue": "5",
        "segmentPushType": "APPEND",
        "segmentAssignmentStrategy": "BalanceNumSegmentAssignmentStrategy",
        "schemaName": "airlineStats",
        "replication": "1",
        "replicasPerPartition": "1"
      },
      "tenants": {},
      "tableIndexConfig": {
        "loadMode": "MMAP",
        "streamConfigs": {
          "streamType": "kafka",
          "stream.kafka.consumer.type": "simple",
          "stream.kafka.topic.name": "flights-realtime",
          "stream.kafka.decoder.class.name": "org.apache.pinot.plugin.stream.kafka.KafkaJSONMessageDecoder",
          "stream.kafka.consumer.factory.class.name": "org.apache.pinot.plugin.stream.kafka20.KafkaConsumerFactory",
           "stream.kafka.hlc.zk.connect.string": "kafka-zookeeper:2181",
          "stream.kafka.zk.broker.url": "kafka-zookeeper:2181",
          "stream.kafka.broker.list": "kafka-0.kafka-headless.pinot.svc.cluster.local:9092",
          "realtime.segment.flush.threshold.time": "3600000",
          "realtime.segment.flush.threshold.size": "50000",
          "stream.kafka.consumer.prop.auto.offset.reset": "smallest"
        }
      },
      "metadata": {
        "customConfigs": {}
      }
    }
```
