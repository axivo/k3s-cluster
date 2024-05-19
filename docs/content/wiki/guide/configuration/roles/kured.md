---
title: Kured
prev: /wiki/guide/configuration/roles
next: /wiki/guide/configuration/roles/longhorn
---

The role performs various tasks related to Helm chart deployment, reset and validation.

<!--more-->

## Role Settings

See the related role settings listed below, defined into [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/kured/defaults/main.yaml) defaults file.

{{% steps %}}

### `kured_vars.kubernetes`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `kubernetes.configuration`

- Default value: `null`

{{% steps %}}

##### `configuration.concurrency`

- Default value: `integer`, `1`

##### `configuration.log_format`

- Default value: `string`, `text`

##### `configuration.period`

- Default value: `string`, `15m`

##### `configuration.reboot_delay`

- Default value: `string`, `60s`

##### `configuration.slack`

- Default value: `null`

{{% steps %}}

###### `slack.enabled`

- Default value: `boolean`, `true`

###### `slack.messages`

- Default value: `null`

{{% steps %}}

###### `messages.enabled`

- Default value: `boolean`, `false`

###### `messages.drain`

- Default value: `string`

###### `messages.reboot`

- Default value: `string`

###### `messages.uncordon`

- Default value: `string`

{{% /steps %}}

###### `slack.notify_url`

- Default value: `string`, `slack://token`

Encrypt the variable with [`ansible-vault`](/k3s-cluster/tutorials/handbook/ansible/#vault).

{{% /steps %}}

##### `configuration.time`

- Default value: `null`

{{% steps %}}

###### `time.start`

- Default value: `string`, `04:00`

###### `time.end`

- Default value: `string`, `08:00`

###### `time.zone`

- Default value: `string`, `UTC`

{{% /steps %}}

#### `kubernetes.helm`

- Default value: `null`

{{% steps %}}

##### `helm.chart`

- Default value: `null`

{{% steps %}}

###### `chart.name`

- Default value: `string`, `kured`

###### `chart.org`

- Default value: `string`, `kubereboot`

###### `chart.version`

- Default value: `string`

Visit [`kubereboot/charts`](https://github.com/kubereboot/charts/releases), for latest release version.

{{% /steps %}}

##### `helm.repository`

- Default value: `null`

{{% steps %}}

###### `repository.name`

- Default value: `string`, `charts`

###### `repository.org`

- Default value: `string`, `kubereboot`

###### `repository.url`

- Default value: `string`, `https://kubereboot.github.io`

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.metrics`

- Default value: `null`

{{% steps %}}

##### `metrics.create`

- Default value: `string`, `true`

{{% /steps %}}

#### `kubernetes.namespace`

- Default value: `string`, `kube-system`

#### `kubernetes.resources`

- Default value: `null`

{{% steps %}}

##### `resources.limits`

- Default value: `null`

{{% steps %}}

##### `limits.cpu`

- Default value: `string`, `400m`

##### `limits.memory`

- Default value: `string`, `256Mi`

{{% /steps %}}

##### `resources.requests`

- Default value: `null`

{{% steps %}}

##### `requests.cpu`

- Default value: `string`, `100m`

##### `requests.memory`

- Default value: `string`, `64Mi`

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.service`

- Default value: `null`

{{% steps %}}

##### `service.annotations`

- Default value: `dictionary`

##### `service.create`

- Default value: `string`, `true`

##### `service.name`

- Default value: `string`, `kured`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

## Role Tasks

See the related role tasks, listed below.

{{% steps %}}

### Facts

Ansible facts, see [`facts.yaml`](https://{{< param variables.repository >}}/blob/main/roles/kured/tasks/facts.yaml) for details.

### Main

Main role related tasks, see [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/kured/tasks/main.yaml) for details.

### Reset

Reset related tasks, see [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/roles/kured/tasks/reset.yaml) for details.

### Validation

Validation related tasks, see [`validation.yaml`](https://{{< param variables.repository >}}/blob/main/roles/kured/tasks/validation.yaml) for details.

{{% /steps %}}

## Role Templates

See the related role templates, listed below.

{{% steps %}}

### Helm Chart

Helm chart values template, see [`values.j2`](https://{{< param variables.repository >}}/blob/main/roles/kured/templates/values.j2) for details.

{{% /steps %}}
