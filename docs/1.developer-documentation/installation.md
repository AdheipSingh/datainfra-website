---
sidebar_position: 3
sidebar_label: Installation
hide_title: true
---

<Installation>

Install BaaZ Control Plane for <Purple>SaaS</Purple>

```
helm repo add datainfra https://charts.datainfra.io
helm upgrade --install --namespace pinot-control-plane --create-namespace pinot-control-plane datainfra/pinot-control-plane
```

</Installation>
