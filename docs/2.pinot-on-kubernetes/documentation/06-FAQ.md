---
sidebar_position: 1
description: Frequently Asked Questions
---

# FAQ

### Is this project a k8s operator or a control plane ?

- This project is based on the Kubernetes operator pattern, but it is not exclusively limited to this pattern. Given the complexity of Pinot, relying solely on Kubernetes operators may or may not be sufficient to effectively manage its operations. Our vision for the project is to create a comprehensive set of tools and utilities that enable seamless deployment and operation of Pinot on Kubernetes.

### Helm Vs Operator

- Helm is configuration management tool, it does not maintain the state of the application. When building controllers, there is clear abstraction and concern on:

    - who is responsible for applying configuration ?
    - who is responsible for reconciling configuration ?

Helm can template out any yaml, in our case its CR's/operator deployment etc. Once configs are applied its the responsibility of the underlying controllers to reconcile the configuration to achieve desired state.

### Is this project based on state machines ?

The underlying controllers are based on conditions and NOT state machines. The status of objects is constructable by observation. This project is solely built on observed state, the underlying functions follow the k8s native pattern of CreateOrUpdate. Each resource whether k8s native or in this case of pinot specific resources ie schema/table/tenant, is checked for existense, if not existed created else check for updates and updated. States taken into consideration are orginal, desired and current.