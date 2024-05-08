---
title: Helm
prev: /wiki/guide/configuration/roles
next: /wiki/guide/configuration/roles/k3s
weight: 2
---

The Helm role installs [Balto](https://helm.baltorepo.com/stable/debian/packages/helm) stable Debian based repository, needed for `helm` package installation. The required [`diff`](https://github.com/databus23/helm-diff/releases) Helm plugin is also installed.

<!--more-->

## Role Tasks

See the role tasks, listed below.

{{% steps %}}

### Facts

Ansible facts, see [`facts.yaml`]({{< param variables.github.url >}}/blob/main/roles/helm/tasks/facts.yaml) tasks file, for details.

### Main

Main role tasks, see [`main.yaml`]({{< param variables.github.url >}}/blob/main/roles/helm/tasks/main.yaml) tasks file, for details.

### Reset

Reset related tasks, see [`reset.yaml`]({{< param variables.github.url >}}/blob/main/roles/helm/tasks/reset.yaml) tasks file, for details.

### Validation

Validation related tasks, see [`validation.yaml`]({{< param variables.github.url >}}/blob/main/roles/helm/tasks/validation.yaml) tasks file, for details.

{{% /steps %}}

## Role Settings

See the role settings listed below, defined into [`main.yaml`]({{< param variables.github.url >}}/blob/main/roles/helm/defaults/main.yaml) defaults file.

{{% steps %}}

### `helm_vars.release.helm`

- Default value: `null`

See below the related child settings, for additional details.

{{% steps %}}

#### `helm_vars.release.helm.distro`

- Default value: `string`, `debian`

#### `helm_vars.release.helm.key`

- Default value: `string`, `helm-archive-keyring.gpg`

#### `helm_vars.release.helm.repository`

- Default value: `null`

{{% steps %}}

##### `helm_vars.release.helm.repository.channel`

- Default value: `string`, `stable`

##### `helm_vars.release.helm.repository.key`

- Default value: `string`, `signing.asc`

##### `helm_vars.release.helm.repository.url`

- Default value: `string`, `https://baltocdn.com/helm`

{{% /steps %}}

{{% /steps %}}

### `helm_vars.release.plugin`

- Default value: `null`

See below the related child settings, for additional details.

{{% steps %}}

#### `helm_vars.release.plugin.name`

- Default value: `string`, `diff`

#### `helm_vars.release.plugin.repository`

- Default value: `null`

{{% steps %}}

##### `helm_vars.release.plugin.repository.name`

- Default value: `string`, `helm-diff`

##### `helm_vars.release.plugin.repository.org`

- Default value: `string`, `databus23`

{{% /steps %}}

#### `helm_vars.release.plugin.version`

- Default value: `string`

{{% /steps %}}

{{% /steps %}}
