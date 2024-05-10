---
title: Helm
prev: /wiki/guide/configuration/roles
next: /wiki/guide/configuration/roles/k3s
weight: 2
---

The role performs various tasks related to OS configuration, reset and validation. It installs the [Balto](https://helm.baltorepo.com/stable/debian/packages/helm) stable Debian based repository needed for `helm` package, as well the related [`diff`](https://github.com/databus23/helm-diff/releases) Helm plugin.

<!--more-->

## Role Settings

See the related role settings listed below, defined into [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/helm/defaults/main.yaml) defaults file.

{{% steps %}}

### `helm_vars.release`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `release.helm`

- Default value: `null`

{{% steps %}}

##### `helm.distro`

- Default value: `string`, `debian`

##### `helm.key`

- Default value: `string`, `helm-archive-keyring.gpg`

##### `helm.repository`

- Default value: `null`

{{% steps %}}

###### `repository.channel`

- Default value: `string`, `stable`

###### `repository.key`

- Default value: `string`, `signing.asc`

###### `repository.url`

- Default value: `string`, `https://baltocdn.com/helm`

{{% /steps %}}

{{% /steps %}}

#### `release.plugin`

- Default value: `null`

{{% steps %}}

##### `plugin.name`

- Default value: `string`, `diff`

##### `plugin.repository`

- Default value: `null`

{{% steps %}}

###### `repository.name`

- Default value: `string`, `helm-diff`

###### `repository.org`

- Default value: `string`, `databus23`

{{% /steps %}}

##### `plugin.version`

- Default value: `string`

Visit [`databus23/helm-diff`](https://github.com/databus23/helm-diff/releases), for latest release version.

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

## Role Tasks

See the related role tasks, listed below.

{{% steps %}}

### Facts

Ansible facts, see [`facts.yaml`](https://{{< param variables.repository >}}/blob/main/roles/helm/tasks/facts.yaml) for details.

### Main

Main role tasks, see [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/helm/tasks/main.yaml) for details.

### Reset

Reset related tasks, see [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/roles/helm/tasks/reset.yaml) for details.

### Validation

Validation related tasks, see [`validation.yaml`](https://{{< param variables.repository >}}/blob/main/roles/helm/tasks/validation.yaml) for details.

{{% /steps %}}