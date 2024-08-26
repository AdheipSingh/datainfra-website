---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Customers
slug: /api/customers
---
import PostmanButton from '@site/src/components/PostmanButton';

## Customers

In BaaZ, customers is first principal concept. Customer can be any organisation onboarded to the SaaS platform. 

- Customer are registered within baaz control plane.
- Multiple customers can be added on a shared dataplane.
- Each customer in baaz has a ```saas_type``` ie ```shared```, ```dedicated``` or ```private```.
- In SaaS, each customer subscribes to subscription plan

<PostmanButton postmanUrl="https://god.gw.postman.com/run-collection/37749754-398dc426-1e2b-45f6-8503-bad62f930463?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D37749754-398dc426-1e2b-45f6-8503-bad62f930463%26entityType%3Dcollection%26workspaceId%3Df3e23974-3a4e-4469-9c82-e695b8701d40" align="left" />