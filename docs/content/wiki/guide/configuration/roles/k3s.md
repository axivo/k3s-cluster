---
title: K3s
prev: /wiki/guide/configuration/roles
next: /wiki/guide/configuration/roles/argocd
weight: 2
---

The role performs various tasks related to OS configuration, K3s cluster deployment, reset and validation.

<!--more-->

## Role Settings

See the related role settings listed below, defined into [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/k3s/defaults/main.yaml) defaults file.

{{% steps %}}

### `k3s_vars.directory`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `directory.bin`

- Default value: `string`, `/usr/local/bin`

#### `directory.config`

- Default value: `string`, `/etc/rancher/k3s`

#### `directory.kubeconfig`

- Default value: `string`, `/Users/username/.kube`

#### `directory.lib`

- Default value: `string`, `/var/lib/rancher/k3s`

{{% /steps %}}

### `k3s_vars.network`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `network.interface`

- Default value: `string`, `eth0`

{{% /steps %}}

### `k3s_vars.release`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `release.checksum`

- Default value: `string`, `sha256sum-arm64.txt`

#### `release.file`

- Default value: `string`, `k3s-arm64`

#### `release.repository`

- Default value: `null`

{{% steps %}}

##### `repository.name`

- Default value: `string`, `k3s`

##### `repository.org`

- Default value: `string`, `k3s-io`

{{% /steps %}}

#### `release.version`

- Default value: `string`

Visit [`k3s-io/k3s`](https://github.com/k3s-io/k3s/releases), for latest release version.

{{% /steps %}}

### `k3s_vars.server`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `server.api`

- Default value: `null`

{{% steps %}}

##### `api.host`

- Default value: `string`, `192.168.4.10`

##### `api.port`

- Default value: `integer`, `6443`

{{% /steps %}}

#### `server.cluster`

- Default value: `null`

{{% steps %}}

##### `cluster.dns`

- Default value: `string`, `10.43.0.10`

##### `cluster.domain`

- Default value: `string`, `cluster.local`

{{% /steps %}}

#### `server.controlplane`

- Default value: `null`

{{% steps %}}

##### `controlplane.tainted`

- Default value: `boolean`, `true`

{{% /steps %}}

#### `server.kubeconfig`

- Default value: `null`

{{% steps %}}

##### `kubeconfig.local`

- Default value: `boolean`, `true`

Copies the remote `/.kube/config` to local computer.

{{% /steps %}}

{{% /steps %}}

{{% steps nested="true" %}}

#### `server.loadbalancer`

- Default value: `null`

{{% steps %}}

##### `loadbalancer.host`

- Default value: `string`, `127.0.0.1`

Host for `apiserver` client load-balancer.

##### `loadbalancer.port`

- Default value: `integer`, `6444`

Port for `apiserver` client load-balancer.

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

{{% steps nested="true" %}}

### `k3s_vars.tolerations`

- Default value: `list`

{{% /steps %}}

## Role Tasks

See the related role tasks, listed below.

{{% steps %}}

### Facts

Ansible facts, see [`facts.yaml`](https://{{< param variables.repository >}}/blob/main/roles/k3s/tasks/facts.yaml) for details.

### Load Balancer

Load balancer related tasks, see [`loadbalancer.yaml`](https://{{< param variables.repository >}}/blob/main/roles/k3s/tasks/loadbalancer.yaml) for details.

### Main

Main role related tasks, see [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/k3s/tasks/main.yaml) for details.

### Reset

Reset related tasks, see [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/roles/k3s/tasks/reset.yaml) for details.

### Validation

Validation related tasks, see [`validation.yaml`](https://{{< param variables.repository >}}/blob/main/roles/k3s/tasks/validation.yaml) for details.

{{% /steps %}}

## Role Templates

See the related role templates, listed below.

{{% steps %}}

### Configuration

Cluster configuration template, see [`config.j2`](https://{{< param variables.repository >}}/blob/main/roles/k3s/templates/config.j2) for details.

### HAProxy

HAProxy configuration template, see [`haproxy.j2`](https://{{< param variables.repository >}}/blob/main/roles/k3s/templates/haproxy.j2) for details.

### KeepAlived

KeepAlived configuration template, see [`keepalived.j2`](https://{{< param variables.repository >}}/blob/main/roles/k3s/templates/keepalived.j2) for details.

### Registries

[Registries](https://docs.k3s.io/installation/registry-mirror) configuration template, see [`registries.j2`](https://{{< param variables.repository >}}/blob/main/roles/k3s/templates/registries.j2) for details.

### Service

Service configuration template, see [`service.j2`](https://{{< param variables.repository >}}/blob/main/roles/k3s/templates/service.j2) for details.

{{% /steps %}}
