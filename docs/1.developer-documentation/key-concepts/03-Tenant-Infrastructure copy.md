---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Tenant Infrastructure
slug: /concepts/tenant-infra
---

## Tenant Infrastructure

In BaaZ, tenant infrastructure is a primary concept. Before creating tenants, the necessary tenant infrastructure must be provisioned. This requires the creation of a dataplane as a prerequisite. Each tenant infra represents a group of kubernetes nodepools.

<div style={{ textAlign: 'left' }}>
  <img src={require('../../../static/img/ti.png').default} alt="Dataplane" style={{ width: '50%', height: 'auto' }} />
</div>

## Mapping Subscribtion Plans to Dataplanes to Tenant Infrastructure

Each subscription plan/tier has resource allocation. Based on resource allocation we assign dataplanes and categorize tenant infra.

- Customers subscribe to plans or tiers.
- A free tier customer apps are deployed on shared dataplane on small infra. A free tier user pays less than startup and buisness tier.
- A buisness tier customer apps are deployed on dedicated dataplane on large infra. A buisness tier user pays more, the plan/tier offers a dedicated infrastructure.

If you recollect SaaS Architectures, we make sure the service provisioning layer is agnostic of any buisness logic but at the same time we have first class objects which help in map logical buisness logic to physical infrastructure. 

<div style={{ textAlign: 'center' }}>
  <img src={require('../../../static/img/dataplane-ti-map.png').default} alt="Dataplane" style={{ height: 'auto' }} />
</div>

:::info
In BaaZ, tenant infrastructure is kubernetes nodepools/nodegroups. A dataplane can consist of N no of tenant infrastructure. Tenant infrastructure is abstracted based on application type and not on each tenant.
What this basically means is BaaZ does not create tenant infra for each tenant. Example: If you are building Postgres as a Service, we create tenant infra ie pg-small-tenant-infra which a single nodepool. 
Free tier User > Shared Dataplane > Pg-Small-Tenant-Infra Nodepool.
:::