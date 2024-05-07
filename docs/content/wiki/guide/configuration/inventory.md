---
title: Inventory
prev: /wiki/guide/configuration
next: /wiki/guide/configuration/user
weight: 1
---

Ansible automates tasks on managed nodes (also named *hosts*) in cluster infrastructure, using a list or group of lists, known as [inventory](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html). 

<!--more-->

## Important Settings

There are two important configuration settings, influencing how the cluster will be deployed.

{{% steps %}}

### `k3s_vars.server.controlplane.tainted`

The setting allows the end-user to control where the Kubernetes pods will be deployed. In a scenario where there is only a single or no `agent` type nodes deployed, setting the value to `false` will allow pods to be deployed into any cluster node type.

### `k3s_vars.server.loadbalancer.enabled`

The setting allows the end-user to control the HAProxy load balancer feature, which requires a minium of 2 `server` type nodes to be deployed. The setting is also indirectly related to K3s `tls-san` feature, which requires a minimum of 3 `server` type nodes to be deployed.

{{< callout type="warning" >}}
  A validation is implemented, disabling the HAProxy load balancer feature, if the minimum number of `server` type nodes is less than 2.
{{< /callout >}}

{{% /steps %}}

{{< callout type="info" >}}
  Update the settings into K3s role [`main.yaml`]({{< param variables.github.url >}}/blob/main/roles/k3s/defaults/main.yaml) variables file.
{{< /callout >}}

## Configuration

The [`hosts.yaml`]({{< param variables.github.url >}}/blob/main/inventory/cluster/hosts.yaml) inventory file contains the list of `server` and `agent` cluster node types.

{{< callout type="info" >}}
  Please review the [K3s Architecture](https://docs.k3s.io/architecture), for further details.
{{< /callout >}}

{{% steps %}}

### High Availability

The minimum combined total of nodes for a [High Availability](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/) cluster is 3. Ideally, a cluster should have a starting point of 6 nodes, 3 tainted `server` type nodes (running control-plane and datastore components) and 3 `agent` type nodes (where Kubernetes pods are deployed).

Example of a HA cluster inventory with 4 nodes:

{{% details title="Inventory Details" closed="true" %}}

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

{{< callout type="info" >}}
  Update the [`hosts.yaml`]({{< param variables.github.url >}}/blob/main/inventory/cluster/hosts.yaml) inventory file, with the above detailed configuration.
{{< /callout >}}

{{% /details %}}

{{< callout type="warning" >}}
  The above detailed configuration will introduce a SPOF (single point of failure), since Kubernetes pods are deployed to a single `agent` type node.
{{< /callout >}}

To address this issue, set the `k3s_vars.server.controlplane.tainted` option to `false`, allowing Kubernetes pods to be deployed into all cluster nodes.

Example of a HA cluster inventory with 3 nodes:

{{% details title="Inventory Details" closed="true" %}}

```yaml
server:
  hosts:
    apollo:
    boreas:
    cerus:

agent:
  hosts:

cluster:
  children:
    server:
    agent:
```

{{< callout type="info" >}}
  Update the [`hosts.yaml`]({{< param variables.github.url >}}/blob/main/inventory/cluster/hosts.yaml) inventory file, with the above detailed configuration.
{{< /callout >}}

{{% /details %}}

{{< callout type="warning" >}}
  The above detailed configuration will enable the HAProxy load balancer and K3s `tls-san` HA features, since there are 3 `server` type nodes deployed.
{{< /callout >}}

### Non High Availability

If the targeted cluster has less than 3 `server` type nodes, the [Provisioning](/k3s-cluster/wiki/guide/playbooks/provisioning) playbook will automatically disable all related HA features.

Example of a Non HA cluster inventory with 2 nodes:

{{% details title="Inventory Details" closed="true" %}}

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

{{< callout type="info" >}}
  Update the [`hosts.yaml`]({{< param variables.github.url >}}/blob/main/inventory/cluster/hosts.yaml) inventory file, with the above detailed configuration.
{{< /callout >}}

{{% /details %}}

{{< callout type="warning" >}}
  The above detailed configuration will enable the HAProxy load balancer, since there are 2 `server` type nodes deployed.
{{< /callout >}}

{{% /steps %}}
