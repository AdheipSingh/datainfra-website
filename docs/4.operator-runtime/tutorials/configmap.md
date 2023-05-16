---
sidebar_position: 1
description: Create and Trigger Reconcile configmap
---

# Reconcile Configmap Objects


- Operator builder exposes k8s objects, these objects can be built and passed to the NewBuilder. Example:
```
	getOwnerRef := makeOwnerRef(
		env.APIVersion,
		env.Kind,
		env.Name,
		env.UID,
	)

	cm := makeEnvConfigMap(env, client, getOwnerRef, env.Spec)

	build := builder.NewBuilder(
		builder.ToNewBuilderConfigMap([]builder.BuilderConfigMap{*cm}),
		builder.ToNewBuilderRecorder(builder.BuilderRecorder{Recorder: record, ControllerName: "envoperator"}),
		builder.ToNewBuilderContext(builder.BuilderContext{Context: ctx}),
		builder.ToNewBuilderStore(
			*builder.NewStore(client, map[string]string{"app": env.Name}, env.Namespace, env),
		),
	)

	resp, err := build.ReconcileConfigMap()
	if err != nil {
		return err
	}
```

- Construct a configmap and owner ref function

```
func makeEnvConfigMap(
	env *v1.Environment,
	client client.Client,
	ownerRef *metav1.OwnerReference,
	data interface{},
) *builder.BuilderConfigMap {

	dataByte, err := json.Marshal(data)
	if err != nil {
		fmt.Println(err)
	}

	configMap := &builder.BuilderConfigMap{
		CommonBuilder: builder.CommonBuilder{
			ObjectMeta: metav1.ObjectMeta{
				Name:      env.GetName(),
				Namespace: env.GetNamespace(),
			},
			Client:   client,
			CrObject: env,
			OwnerRef: *ownerRef,
		},
		Data: map[string]string{
			"data": string(dataByte),
		},
	}

	return configMap
}

// create owner ref ie parseable tenant controller
func makeOwnerRef(apiVersion, kind, name string, uid types.UID) *metav1.OwnerReference {
	controller := true

	return &metav1.OwnerReference{
		APIVersion: apiVersion,
		Kind:       kind,
		Name:       name,
		UID:        uid,
		Controller: &controller,
	}
}

```

