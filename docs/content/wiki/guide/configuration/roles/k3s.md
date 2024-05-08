---
title: K3s
prev: /wiki/guide/configuration/roles
next: /wiki/guide/configuration/roles/argocd
weight: 2
---

The role performs various tasks related to OS configuration, K3s cluster deployment, reset and validation.

<!--more-->

## Role Settings

See the role settings listed below, defined into [`main.yaml`]({{< param variables.github.url >}}/blob/main/roles/k3s/defaults/main.yaml) defaults file.

{{% steps %}}

### `k3s_vars.agent`

- Default value: `null`

See below the related child settings, for additional details.

{{% steps nested="true" %}}

#### `k3s_vars.agent.service`

- Default value: `null`

{{% steps %}}

##### `k3s_vars.agent.service.args`

- Default value: `string`

Sets any additional `k3s-agent` service arguments.

{{% /steps %}}

{{% /steps %}}

### `k3s_vars.directory`

- Default value: `null`

See below the related child settings, for additional details.

{{% steps nested="true" %}}

#### `k3s_vars.directory.config`

- Default value: `string`, `/etc/rancher/k3s`

#### `k3s_vars.directory.kubeconfig`

- Default value: `string`, `/Users/username/.kube`

#### `k3s_vars.directory.lib`

- Default value: `string`, `/var/lib/rancher/k3s`

{{% /steps %}}

### `k3s_vars.network`

- Default value: `null`

See below the related child settings, for additional details.

{{% steps nested="true" %}}

#### `k3s_vars.network.interface`

- Default value: `string`, `eth0`

{{% /steps %}}

### `k3s_vars.release`

- Default value: `null`

See below the related child settings, for additional details.

{{% steps nested="true" %}}

#### `k3s_vars.release.k3s`

- Default value: `null`

{{% steps %}}

##### `k3s_vars.release.k3s.checksum`

- Default value: `string`, `sha256sum-arm64.txt`

##### `k3s_vars.release.k3s.file`

- Default value: `string`, `k3s-arm64`

##### `k3s_vars.release.k3s.repository`

- Default value: `null`

{{% steps %}}

###### `k3s_vars.release.k3s.repository.name`

- Default value: `string`, `k3s`

###### `k3s_vars.release.k3s.repository.org`

- Default value: `string`, `k3s-io`

{{% /steps %}}

##### `k3s_vars.release.k3s.version`

- Default value: `string`

{{% /steps %}}

#### `k3s_vars.release.k3s.rancher`

- Default value: `null`

{{% steps %}}

##### `k3s_vars.release.k3s.rancher.controller`

- Default value: `null`

{{% steps %}}

###### `k3s_vars.release.k3s.rancher.controller.version`

- Default value: `string`

{{% /steps %}}

##### `k3s_vars.release.k3s.rancher.kubectl`

- Default value: `null`

{{% steps %}}

###### `k3s_vars.release.k3s.rancher.kubectl.version`

- Default value: `string`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

### `k3s_vars.server`

- Default value: `null`

See below the related child settings, for additional details.

{{% steps nested="true" %}}

#### `k3s_vars.server.api`

- Default value: `null`

{{% steps %}}

##### `k3s_vars.server.api.host`

- Default value: `string`, `192.168.4.10`

##### `k3s_vars.server.api.port`

- Default value: `integer`, `6443`

{{% /steps %}}

#### `k3s_vars.server.cluster`

- Default value: `null`

{{% steps %}}

##### `k3s_vars.server.cluster.dns`

- Default value: `string`, `10.43.0.10`

##### `k3s_vars.server.cluster.domain`

- Default value: `string`, `cluster.local`

{{% /steps %}}

#### `k3s_vars.server.controlplane`

- Default value: `null`

{{% steps %}}

##### `k3s_vars.server.controlplane.tainted`

- Default value: `boolean`, `true`

{{% /steps %}}

#### `k3s_vars.server.kubeconfig`

- Default value: `null`

{{% steps %}}

##### `k3s_vars.server.kubeconfig.local`

- Default value: `boolean`, `true`

Copies the remote `/.kube/config` to local computer.

{{% /steps %}}

{{% /steps %}}

{{% steps nested="true" %}}

#### `k3s_vars.server.service`

- Default value: `null`

{{% steps %}}

##### `k3s_vars.server.service.args`

- Default value: `string`

Sets any additional `k3s` service arguments.

##### `k3s_vars.server.service.host`

- Default value: `string`, `127.0.0.1`

Kubernetes exposed local service host.

##### `k3s_vars.server.service.port`

- Default value: `integer`, `6444`

Kubernetes exposed local service port.

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

## Role Tasks

See the role tasks, listed below.

{{% steps %}}

### Facts

Ansible facts, see [`facts.yaml`]({{< param variables.github.url >}}/blob/main/roles/k3s/tasks/facts.yaml) tasks file, for details.

### Load Balancer

Load balancer related tasks,see [`firewall.yaml`]({{< param variables.github.url >}}/blob/main/roles/k3s/tasks/firewall.yaml) tasks file, for details.

### Main

Main role tasks, see [`main.yaml`]({{< param variables.github.url >}}/blob/main/roles/k3s/tasks/main.yaml) tasks file, for details.

### Reset

Reset related tasks, see [`reset.yaml`]({{< param variables.github.url >}}/blob/main/roles/k3s/tasks/reset.yaml) tasks file, for details.

### Validation

Validation related tasks, see [`validation.yaml`]({{< param variables.github.url >}}/blob/main/roles/k3s/tasks/validation.yaml) tasks file, for details.

{{% /steps %}}

## Role Templates

See the role templates, listed below.

{{% steps %}}

### Configuration

Cluster configuration template, see [`config.j2`]({{< param variables.github.url >}}/blob/main/roles/k3s/templates/config.j2) template file, for details.

### HAProxy

HAProxy configuration template, see [`haproxy.j2`]({{< param variables.github.url >}}/blob/main/roles/k3s/templates/haproxy.j2) template file, for details.

### KeepAlived

KeepAlived configuration template, see [`keepalived.j2`]({{< param variables.github.url >}}/blob/main/roles/k3s/templates/keepalived.j2) template file, for details.

### Registries

[Registries](https://docs.k3s.io/installation/registry-mirror) configuration template, see [`registries.j2`]({{< param variables.github.url >}}/blob/main/roles/k3s/templates/registries.j2) template file, for details.

### Service

Service configuration template, see [`service.j2`]({{< param variables.github.url >}}/blob/main/roles/k3s/templates/service.j2) template file, for details.

{{% /steps %}}
