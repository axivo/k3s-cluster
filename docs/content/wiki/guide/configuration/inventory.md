---
title: Inventory
prev: /wiki/guide/configuration
next: /wiki/guide/configuration/user
weight: 1
---

Ansible automates tasks on managed nodes or *hosts* in cluster infrastructure, using a list or group of lists known as [inventory](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html). 

<!--more-->

## Inventory Configuration

The [`hosts.yaml`]({{< param variables.github.url >}}/blob/main/inventory/cluster/hosts.yaml) inventory file contains the list of `server` and `agent` cluster node types.

{{% steps %}}

### High Availability

The minimum combined total of nodes for a [High Availability](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/) cluster is 3. Ideally, a cluster should have a starting point of 6 nodes, 3 tainted `server` type nodes (running control-plane and datastore components) and 3 `agent` type nodes (where Kubernetes pods are deployed).

{{< callout type="info" >}}
  Please review the [K3s Architecture](https://docs.k3s.io/architecture), for further details.
{{< /callout >}}

Example of a HA cluster inventory with 4 nodes:

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

### Non High Availability

If the targeted cluster has less than 3 `server` type nodes, the [Provisioning](/k3s-cluster/wiki/guide/playbooks/provisioning) playbook will automatically disable all related HA features, like the HAProxy load balancer and K3s `tls-san`.

Example of a Non HA cluster inventory with 2 nodes:

```yaml
server:
  hosts:
    apollo:

agent:
  hosts:
    chaos:

cluster:
  children:
    server:
    agent:
```

{{% /steps %}}
