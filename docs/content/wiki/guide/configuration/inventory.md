---
title: Inventory
prev: /wiki/guide/configuration
next: /wiki/guide/configuration/user
weight: 1
---

Ansible automates tasks on managed nodes (also named *hosts*) in cluster infrastructure, using a list or group of lists, known as [inventory](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html). 

<!--more-->

## Important Settings

There are two key configuration settings, influencing how the cluster will be deployed.

{{% steps %}}

### Playbook Batch Size

Because K3s uses [tokens](https://docs.k3s.io/cli/token) to secure the node join process, a [`serial`](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_strategies.html#setting-the-batch-size-with-serial) must be defined, generating the token on first `cluster` type node. Next, the generated token is copied into additional nodes, while running the [Provisioning](/k3s-cluster/wiki/guide/playbooks/provisioning) playbook.

#### Batch Size Usage

Example of `serial` structure with 3 `server` type nodes and 5 `agent` type nodes, used into [Provisioning](/k3s-cluster/wiki/guide/playbooks/provisioning) playbook:

{{% details title="Provisioning Details" closed="true" %}}

```yaml
serial:
  - 1
  - 2
  - 5
```

The `serial` structure has the following pattern:

- `1`, first `server` type node, where the K3s token is generated
- `2`, two additional `server` type nodes, where the K3s token is copied into
- `5`, five additional `agent` type nodes, where the K3s token is copied into

{{% /details %}}

{{< callout type="info" >}}
  Update the `serial` structure into [`provisioning.yaml`](https://{{< param variables.repository >}}/blob/main/provisioning.yaml) playbook file.
{{< /callout >}}

Example of `serial` structure with 3 `server` type nodes and 5 `agent` type nodes, used into [Reset](/k3s-cluster/wiki/guide/playbooks/reset) playbook:

{{% details title="Reset Details" closed="true" %}}

```yaml
serial:
  - 3
  - 5
```

The `serial` structure has the following pattern:

- `3`, `server` type nodes are reset, first
- `5`, `agent` type nodes are reset

{{% /details %}}

{{< callout type="info" >}}
  Update the `serial` structure into [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/reset.yaml) playbook file.
{{< /callout >}}

### `k3s_vars.server.controlplane.tainted`

The setting allows the end-user to control where the Kubernetes pods will be deployed. In a scenario where there is only a single or no `agent` type nodes deployed, setting the value to `false` will allow pods to be deployed into any cluster node type.

{{< callout type="info" >}}
  Update the setting into K3s role [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/k3s/defaults/main.yaml) variables file.
{{< /callout >}}

{{% /steps %}}

## Configuration

The [`hosts.yaml`](https://{{< param variables.repository >}}/blob/main/inventory/cluster/hosts.yaml) inventory file contains the list of `server` and `agent` cluster node types.

{{< callout type="info" >}}
  Please review the [K3s Architecture](https://docs.k3s.io/architecture), for further details.
{{< /callout >}}

{{% steps %}}

### High Availability

The minimum number of `server` type nodes for a [HA cluster](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/) is 3. Ideally, a cluster should have a starting point of 6 nodes, 3 tainted `server` type nodes (running control-plane and datastore components) and 3 `agent` type nodes (where Kubernetes pods are deployed).

Example of a HA cluster inventory with 4 nodes:

{{% details title="Inventory Details" closed="true" %}}

Inventory, set into [`hosts.yaml`](https://{{< param variables.repository >}}/blob/main/inventory/cluster/hosts.yaml) inventory file:

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

Batch size, set into [`provisioning.yaml`](https://{{< param variables.repository >}}/blob/main/provisioning.yaml) playbook file:

```yaml
serial:
  - 1
  - 2
  - 1
```

Batch size, set into [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/reset.yaml) playbook file:

```yaml
serial:
  - 3
  - 1
```

{{% /details %}}

#### Single Point of Failure

{{< callout type="warning" >}}
  The above detailed configuration will introduce a SPOF, since Kubernetes pods are deployed to a single or no `agent` type nodes.
{{< /callout >}}

To address this issue, set the `k3s_vars.server.controlplane.tainted` option to `false` into K3s role [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/k3s/defaults/main.yaml) variables file.

### Non High Availability

The minimum number of server type nodes for a Non HA cluster is 1. By [K3s Architecture](https://docs.k3s.io/architecture) design, a cluster can have either 1, or 3+ `server` type nodes.

{{< callout type="warning" >}}
  If the targeted cluster has less than 3 `server` type nodes, the [Provisioning](/k3s-cluster/wiki/guide/playbooks/provisioning) playbook will automatically disable all related HA features. 
{{< /callout >}}

Example of a Non HA cluster inventory with 2 nodes:

{{% details title="Inventory Details" closed="true" %}}

Inventory, set into [`hosts.yaml`](https://{{< param variables.repository >}}/blob/main/inventory/cluster/hosts.yaml) inventory file:

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

Batch size, set into [`provisioning.yaml`](https://{{< param variables.repository >}}/blob/main/provisioning.yaml) playbook file:

```yaml
serial:
  - 1
```

Batch size, set into [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/reset.yaml) playbook file:

```yaml
serial:
  - 2
```

{{% /details %}}

{{% /steps %}}
