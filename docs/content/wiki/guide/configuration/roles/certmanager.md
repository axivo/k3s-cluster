---
title: CertManager
prev: /wiki/guide/configuration/roles
next: /wiki/guide/configuration/roles/cilium
---

The role performs various tasks related to Helm chart deployment, reset and validation.

<!--more-->

## Role Settings

See the related role settings listed below, defined into [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/certmanager/defaults/main.yaml) defaults file.

{{% steps %}}

### `certmanager_vars.kubernetes`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `kubernetes.cainjector`

- Default value: `null`

{{% steps %}}

##### `cainjector.resources`

- Default value: `null`

{{% steps %}}

###### `resources.limits`

- Default value: `null`

{{% steps %}}

###### `limits.cpu`

- Default value: `string`, `400m`

###### `limits.memory`

- Default value: `string`, `256Mi`

{{% /steps %}}

###### `resources.requests`

- Default value: `null`

{{% steps %}}

###### `requests.cpu`

- Default value: `string`, `100m`

###### `requests.memory`

- Default value: `string`, `64Mi`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.controller`

- Default value: `null`

{{% steps %}}

##### `controller.resources`

- Default value: `null`

{{% steps %}}

###### `resources.limits`

- Default value: `null`

{{% steps %}}

###### `limits.cpu`

- Default value: `string`, `400m`

###### `limits.memory`

- Default value: `string`, `256Mi`

{{% /steps %}}

###### `resources.requests`

- Default value: `null`

{{% steps %}}

###### `requests.cpu`

- Default value: `string`, `100m`

###### `requests.memory`

- Default value: `string`, `64Mi`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.helm`

- Default value: `null`

{{% steps %}}

##### `helm.chart`

- Default value: `null`

{{% steps %}}

###### `chart.name`

- Default value: `string`, `cert-manager`

###### `chart.org`

- Default value: `string`, `cert-manager`

###### `chart.version`

- Default value: `string`

Visit [`cert-manager/cert-manager`](https://github.com/cert-manager/cert-manager/releases), for latest release version.

{{% /steps %}}

##### `helm.repository`

- Default value: `null`

{{% steps %}}

###### `repository.name`

- Default value: `string`, `cert-manager`

###### `repository.org`

- Default value: `string`, `jetstack`

###### `repository.url`

- Default value: `string`, `https://charts.jetstack.io`

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.namespace`

- Default value: `string`, `kube-system`

#### `kubernetes.tls`

- Default value: `null`

{{% steps %}}

##### `tls.cluster_issuer`

- Default value: `null`

{{% steps %}}

##### `cluster_issuer.name`

- Default value: `string`, `certmanager-cluster-issuer`

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.webhook`

- Default value: `null`

{{% steps %}}

##### `webhook.resources`

- Default value: `null`

{{% steps %}}

###### `resources.limits`

- Default value: `null`

{{% steps %}}

###### `limits.cpu`

- Default value: `string`, `400m`

###### `limits.memory`

- Default value: `string`, `256Mi`

{{% /steps %}}

###### `resources.requests`

- Default value: `null`

{{% steps %}}

###### `requests.cpu`

- Default value: `string`, `100m`

###### `requests.memory`

- Default value: `string`, `64Mi`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

## Role Tasks

See the related role tasks, listed below.

{{% steps %}}

### Facts

Ansible facts, see [`facts.yaml`](https://{{< param variables.repository >}}/blob/main/roles/certmanager/tasks/facts.yaml) for details.

### Main

Main role related tasks, see [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/certmanager/tasks/main.yaml) for details.

### Reset

Reset related tasks, see [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/roles/certmanager/tasks/reset.yaml) for details.

### Validation

Validation related tasks, see [`validation.yaml`](https://{{< param variables.repository >}}/blob/main/roles/certmanager/tasks/validation.yaml) for details.

{{% /steps %}}

## Role Templates

See the related role templates, listed below.

{{% steps %}}

### Helm Chart

Helm chart values template, see [`values.j2`](https://{{< param variables.repository >}}/blob/main/roles/certmanager/templates/values.j2) for details.

### Cluster Issuer

Kubernetes `ClusterIssuer` template, see [`cluster_issuer.j2`](https://{{< param variables.repository >}}/blob/main/roles/certmanager/templates/cluster_issuer.j2) for details.

{{% /steps %}}
