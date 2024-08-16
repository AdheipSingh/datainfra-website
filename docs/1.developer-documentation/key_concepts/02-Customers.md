---
sidebar_position: 1
pagination_next: null
hide_table_of_contents: true
custom_edit_url: null
hide_title: true
sidebar_label: Customers
---

## Customers

In BaaZ, customers is first principal concept. Customer can be any organisation onboarded to the SaaS platform. 

- Customer are registered within baaz control plane.
- Multiple customers can be added on a shared dataplane.
- Each customer in baaz has a ```saas_type``` ie ```shared```, ```dedicated``` or ```private```.
- In SaaS, each customer subscribes to subscription plan

<div style={{ textAlign: 'center' }}>
  <img src={require('../../../static/img/dataplane.png').default} alt="Dataplane" style={{ width: '50%', height: 'auto' }} />
</div>
