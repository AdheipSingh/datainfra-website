---
sidebar_position: 1
description: "Streamline schema management for Pinot on Kubernetes with DataInfra.io's documentation. Discover best practices and resources for efficient and scalable Pinot tenant management."
title: "Pinot on Kubernetes Schema Management Documentation"
hide_title: "true"
sidebar_label: "Pinot Schema Management"
---

# Pinot Schema Management

- This documentation cover's the ```PinotSchema``` custom resource and its fields.
- ```PinotSchema``` CR holds the desired state of pinot schema.
- Reference to [Pinot Schema CR](https://github.com/datainfrahq/pinot-control-plane-k8s/blob/main/tutorials/00-pinot-kind/pinotschema-basic.yaml)

:::info
Pinot Schema controller is responsible for creation, updation and
deletion of pinot schema.       
Update of pinot schema results in segment reload.     
Which is defined in the [Pinot Table CR](./03-table-management.md).
:::

### GVK - Group Version Kind

- Pinot Schema Controller watches and reconciles ```PinotSchema``` custom resource. 
- ```PinotSchema CRD``` defines the following:

```yaml
Group: datainfra.io
Version: v1beta1
Kind: PinotSchema
```

```yaml
kind: PinotSchema
listKind: PinotSchemaList
plural: pinotschemas
singular: pinotschema
```

### Scope

- ```PinotSchema CRD``` scopes ```PinotSchema``` to ```namespace``` scope.

:::info
In kubernetes resources are scoped to namespace or cluster.         
Ex: ```clusterrole``` is scoped to cluster whereas ```deployments``` are scoped to namespace.
:::

### Pinot Schema Custom Resource Fields

Pinot Schema custom resource is designed to define the desired state of the pinot cluster.

#### Pinot Cluster 
To create pinot schema specify a pinot cluster name field in ```spec.pinotCluster```.

```yaml
spec:
  pinotCluster: pinot-basic
  schema.json: |-
  {
    ...
    ...
    ...
  }  
```

:::info
Mapping between a pinot schema CR and pinot cluster CR is one to one.       
This is a stateless mapping.
:::

#### Pinot Schema Json
Specify your pinot schema in ```spec.schema.json``` field.

```yaml
  schema.json: |-
     {
      "metricFieldSpecs":[
          
      ],
      "dimensionFieldSpecs":[
          {
            "dataType":"INT",
            "name":"ActualElapsedTime"
          },
          {
            "dataType":"INT",
            "name":"AirTime"
          },
          {
            "dataType":"INT",
            "name":"AirlineID"
          },
      ],
      "dateTimeFieldSpecs":[
          {
            "name":"DaysSinceEpoch",
            "dataType":"INT",
            "format":"1:DAYS:EPOCH",
            "granularity":"1:DAYS"
          },
          {
            "name":"ts",
            "dataType":"TIMESTAMP",
            "format":"1:MILLISECONDS:TIMESTAMP",
            "granularity":"1:SECONDS"
          },
          {
            "name":"tsRaw",
            "dataType":"TIMESTAMP",
            "format":"1:MILLISECONDS:TIMESTAMP",
            "granularity":"1:SECONDS"
          }
      ],
      "schemaName":"airlineStats"
      }
```
