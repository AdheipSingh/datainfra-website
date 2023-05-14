---
sidebar_position: 3
sidebar_label: Installation
hide_title: true
---

<Installation>

Install Control Plane For <Purple>Pinot</Purple>

```
helm repo add datainfra https://charts.datainfra.io
helm upgrade --install druid-operator
```

```
kustomize repo add datainfra https://charts.datainfra.io
kustomize upgrade --install druid-operator
```

```
kubectl repo add datainfra https://charts.datainfra.io
kubectl upgrade --install druid-operator
```

</Installation>
