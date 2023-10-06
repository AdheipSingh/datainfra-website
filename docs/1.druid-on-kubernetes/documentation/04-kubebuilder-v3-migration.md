# Kubebuilder V3 Migration

Druid Operator project has started the move from operator SDK to Kubebuilder v2 framework.
In order to finish the project migration and to avoid the upgrade of Kubebuilder v3 in different time,
the project combines both in the following version.

There are now more components that are being deployed:
- permissions for controller leader election
- metrics
- proxy sidecar to the controller

These components are part of the standard Kubebuilder deployment and are being added in order
to stand with the best practices of Kubernetes and Kubebuilder.

This guide will help you go through the migration to Kubebuilder V3.
:::note
These guides assumes that the current operator is running in the `druid-operator` namespace.:::

## For Helm Managed Druid

Current Helm deployment is missing a `labelSelector` + `podSpec label` value: `control-plane: controller-manager`.
These fields cannot be updated in place on existing `Deployment`.
This section helps you to first add these fields to the `Deployment` and then will guide you
through the upgrade stage.

1. Get Druid Operator's deployment object
```
kubectl get deployments.apps -n druid-operator druid-operator -o yaml > druid-deployment-temp.yaml
```
2. Make the following changes:
- Add new label to `labelSelector` and to `labels`
- Change the deployment name to `druid-operator-temp`
- Remove the `kubectl.kubernetes.io/last-applied-configuration` annotation
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  ...
  name: druid-operator-temp # Name change
spec:
  ...
  selector:
    matchLabels:
      app.kubernetes.io/instance: druid-operator
      app.kubernetes.io/name: druid-operator
      control-plane: controller-manager # New label
  template:
    metadata:
      creationTimestamp: null
      labels:
        app.kubernetes.io/instance: druid-operator
        app.kubernetes.io/name: druid-operator
        control-plane: controller-manager # New label
    ...
```

3. Apply a second deployment
```shell
kubectl apply -f druid-deployment-temp
```

4. Delete original deployment
```
kubectl delete deployment -n druid-operator druid-operator
```

5. Edit `druid-deployment-temp.yaml` deployment's name back to original name:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  ...
  name: druid-operator # Back to original name
spec:
  ...
  selector:
    matchLabels:
      app.kubernetes.io/instance: druid-operator
      app.kubernetes.io/name: druid-operator
      control-plane: controller-manager # New label
  template:
    metadata:
      creationTimestamp: null
      labels:
        app.kubernetes.io/instance: druid-operator
        app.kubernetes.io/name: druid-operator
        control-plane: controller-manager # New label
    ...
```

6. Apply the updated original deployment
```shell
kubectl apply -f druid-deployment-temp
```

7. Delete temp deployment
```shell
kubectl delete deployment -n druid-operator druid-operator-temp
```

:::note
You should now have the original deployment with the new `labelSelector` and you are ready for moving into new deployment
:::

8. Apply the new helm chart with the same name and same namespace.


## For YAMLs Managed Druid
Kubebuilder is responsible for generating the deployment YAMLs. By default, the generated namespace is
`druid-operator-system`. The new deployment name of the operator is also changed to:
`druid-operator-controller-manager`.
Either way, you should look at the deployment YAMLs before you are deploying them.
Service account, role and role binding that will replace the current ones - all should be in the same name. 

There are two ways you can choose to deploy the new YAMLs:
### In Kubebuilder default namespace
1. Apply the new controller in the `druid-operator-system` namespace.  
:::note
Make sure this is a different namespace that the existing operator
:::
```
# Set the tag you want for the controller
cd config/manager
kustomize edit set image controller=datainfrahq/druid-operator:${IMG_TAG}
# Back to root and apply
cd ../../
kustomize build config/default | kubectl apply -f -
```
2. Remove the old namespace.
```shell
kubectl delete ns druid-operator
```

### In the current namespace
1. Edit Kustomize YAMLs
```
# Set the namespace you want for the controller
cd config/default
kustomize edit set namespace druid-operator
cd ../../
# Set the tag you want for the controller
cd config/manager
kustomize edit set image controller=datainfrahq/druid-operator:${IMG_TAG}
cd ../../
```
2. Apply the YAMLs
```
kustomize build config/default | kubectl apply -f -
```
3. Delete the old deployment
```shell
kubectl delete deployment -n druid-operator druid-operator
```
