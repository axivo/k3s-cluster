---
title: Inventory
prev: /wiki/guide/configuration
next: /wiki/guide/configuration/user
weight: 1
---

Ansible automates tasks on managed nodes or *hosts* in cluster infrastructure, using a list or group of lists known as [inventory](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html). 

<!--more-->

## Inventory Configuration

The [`hosts`]({{< param variables.github.url >}}/blob/main/inventory/cluster/hosts) inventory file contains the list of `server` and `agent` cluster node types.

The minimum combined total of nodes for a high-availability cluster is 3, you can increment the number of nodes to your desired capacity. Ideally, you should have a starting point of 6 nodes, 3 tainted `server` type nodes (running control-plane and datastore components) and 3 `agent` type nodes (where Kubernetes pods are deployed). Please review the [K3S Architecture](https://docs.k3s.io/architecture), for further details.

Presuming you run a total number of 4 nodes, the cluster inventory [`hosts`]({{< param variables.github.url >}}/blob/main/inventory/cluster/hosts) file will be:

```yaml
server:
  hosts:
    apollo:
    boreas:
    cerus:

agent:
  hosts:
    chaos:

cluster:
  children:
    server:
    agent:
```
