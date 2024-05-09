---
title: ArgoCD
prev: /wiki/guide/configuration/roles
next: /wiki/guide/configuration/roles/certmanager
---

The role performs various tasks related to Helm chart deployment, reset and validation.

<!--more-->

## Role Settings

See the role settings listed below, defined into [`main.yaml`](https://github.com/{{< param variables.github.repository >}}/blob/main/roles/argocd/defaults/main.yaml) defaults file.

{{% steps %}}

### `argocd_vars.kubernetes`

- Default value: `null`

See below the related child settings, for additional details.

{{% steps nested="true" %}}

#### `kubernetes.application_set`

- Default value: `null`

{{% steps %}}

##### `application_set.replicas`

- Default value: `integer`, `2`

##### `application_set.resources`

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

#### `kubernetes.configs`

- Default value: `null`

{{% steps %}}

##### `configs.cm`

- Default value: `null`

{{% steps %}}

###### `cm.exec`

- Default value: `null`

{{% steps %}}

###### `exec.enabled`

- Default value: `boolean`, `true`

{{% /steps %}}

{{% /steps %}}

##### `configs.params`

- Default value: `null`

{{% steps %}}

###### `params.server`

- Default value: `null`

{{% steps %}}

###### `server.insecure`

- Default value: `boolean`, `true`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.controller`

- Default value: `null`

{{% steps %}}

###### `controller.resources`

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

- Default value: `string`, `128Mi`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.dex`

- Default value: `null`

{{% steps %}}

###### `dex.resources`

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

- Default value: `string`, `argo-cd`

###### `chart.org`

- Default value: `string`, `argoproj`

###### `chart.version`

- Default value: `string`

Visit [argoproj/argo-helm](https://github.com/argoproj/argo-helm/releases), for latest release version.

{{% /steps %}}

##### `helm.repository`

- Default value: `null`

{{% steps %}}

###### `repository.name`

- Default value: `string`, `argo-helm`

###### `repository.org`

- Default value: `string`, `argoproj`

###### `repository.url`

- Default value: `string`, `https://argoproj.github.io`

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.namespace`

- Default value: `string`, `kube-system`

#### `kubernetes.notifications`

- Default value: `null`

{{% steps %}}

##### `notifications.resources`

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

#### `kubernetes.redis`

- Default value: `null`

{{% steps %}}

##### `redis.high_availability`

- Default value: `null`

{{% steps %}}

###### `high_availability.enabled`

- Default value: `boolean`, `true`

{{% /steps %}}

##### `redis.resources`

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

- Default value: `string`, `200m`

###### `requests.memory`

- Default value: `string`, `128Mi`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

### `argocd_vars.release`

- Default value: `null`

See below the related child settings, for additional details.

{{% /steps %}}
