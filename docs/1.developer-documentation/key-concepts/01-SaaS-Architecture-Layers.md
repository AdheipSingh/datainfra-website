---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Architecture Layers
slug: /concepts/saas-architecture-layers
---

# SaaS Architecture Layers

<div style={{ textAlign: 'center' }}>
  <img src={require('../../../static/img/saasarch.png').default} alt="SaaS Architecture Layers" />
</div>

<!--truncate-->
### Product Layer
The product layer includes UI/UX design, onboarding workflows, and user management. It is focused on providing a seamless user experience, customized to meet the specific needs of each application. Workflows within this layer can map a single organization to one or multiple workspaces.

:::info
Product Layer is managed by product teams. This layer will change as your product evolves. BaaZ platform helps you focus and built the product layer. It provides abstractions and API's for the product layer to consume.
:::

### Data Integration Layer
The data integration layer handles data persistence in relational databases, authentication, and other data-related operations. It ensures efficient data management and integration, acting as a middleware.

:::info
Data Integration Layer is managed by application teams. This layer enscapulates buisness logic from the product layer. It is very much aware of what is an org, user onboarding process etc. This layer stores the metadata for the SaaS.
:::

### Service Provisioning Layer
The service provisioning layer oversees the lifecycle management of applications and, in many cases, the data planes themselves. This involves tasks such as application deployment, scaling, monitoring, and health checks.

:::info
Service Provisioning Layer is managed by platform teams. This layer is an abstracted layer which is not aware of any product buisness logics, so as your product evolves the way you provision a service should not change.
:::