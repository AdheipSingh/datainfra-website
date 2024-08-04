---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Tenants
slug: /concepts/tenants
---

## Tenants

In BaaZ, tenant is a primary concept. Before creating tenants, the necessary tenant infrastructure must be provisioned. This requires the creation of a dataplane as a prerequisite. Each tenant represents a kubernetes namespace.

- In case of shared dataplanes, multiple customer apps can exist on the same dataplane.
- Only logical isolation is present in such cases. However, leveraging certain scheduling strategies, each tenant can have its own phyiscal infrastructure even within a shared SaaS. However, the network will be shared.

<div style={{ textAlign: 'left' }}>
  <img src={require('../../../static/img/ti.png').default} alt="Tenants" style={{ width: '50%', height: 'auto' }} />
</div>

## Mapping SaaS Application Flow to SaaS Backend Flow

In SaaS, subscription plans have a limit on the number of workspaces/projects a user can create, depending upon the plan. A typical SaaS user onboarding flow consists of Org signup, create workspace and deploy apps. 

<div style={{ textAlign: 'left' }}>
  <img src={require('../../../static/img/saasflow.png').default} alt="saasflow" style={{ height: 'auto' }} />
</div>

Workspace is logical concept which is at the product layer, at the infrastructure each logical concept has a physical mapping. In BaaZ, each workspace at the product layer maps to a namespace at the kubernetes level.
