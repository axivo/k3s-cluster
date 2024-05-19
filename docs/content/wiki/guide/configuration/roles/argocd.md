---
title: ArgoCD
prev: /wiki/guide/configuration/roles
next: /wiki/guide/configuration/roles/certmanager
---

The role performs various tasks related to Helm chart deployment, reset and validation.

<!--more-->

## Role Settings

See the related role settings listed below, defined into [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/argocd/defaults/main.yaml) defaults file.

{{% steps %}}

### `argocd_vars.kubernetes`

- Default value: `null`

See the related child settings, listed below.

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

Visit [`argoproj/argo-helm`](https://github.com/argoproj/argo-helm/releases), for latest release version.

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

#### `kubernetes.repo_server`

- Default value: `null`

{{% steps %}}

##### `repo_server.autoscaling`

- Default value: `null`

{{% steps %}}

###### `autoscaling.enabled`

- Default value: `boolean`, `true`

###### `autoscaling.min_replicas`

- Default value: `integer`, `2`

###### `autoscaling.target`

- Default value: `null`

{{% steps %}}

###### `target.cpu_percentage`

- Default value: `integer`, `60`

###### `target.memory_percentage`

- Default value: `integer`, `80`

{{% /steps %}}

{{% /steps %}}

##### `repo_server.resources`

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

#### `kubernetes.server`

- Default value: `null`

{{% steps %}}

##### `server.admin`

- Default value: `null`

Sets the `admin` user details for ArgoCD UI.

{{% steps %}}

###### `admin.password`

- Default value: `string`, `password`

Encrypt the variable with [`ansible-vault`](/k3s-cluster/tutorials/handbook/ansible/#vault).

{{% /steps %}}

##### `server.application`

- Default value: `null`

{{% steps %}}

###### `application.namespaces`

- Default value: `list`

{{% /steps %}}

##### `server.autoscaling`

- Default value: `null`

{{% steps %}}

###### `autoscaling.enabled`

- Default value: `boolean`, `true`

###### `autoscaling.min_replicas`

- Default value: `integer`, `2`

###### `autoscaling.min_replicas`

- Default value: `integer`, `2`

###### `autoscaling.target`

- Default value: `null`

{{% steps %}}

###### `target.cpu_percentage`

- Default value: `integer`, `60`

###### `target.memory_percentage`

- Default value: `integer`, `80`

{{% /steps %}}

{{% /steps %}}

##### `server.gateway`

- Default value: `null`

Read the [Gateway API](/k3s-cluster/tutorials/handbook/cilium/#gateway-api) tutorial, for more details.

{{% steps %}}

###### `gateway.service`

- Default value: `string`, `argo-cd-argocd-server`

###### `gateway.subdomain`

- Default value: `string`, `argocd`

Sets the subdomain name for ArgoCD UI.

{{% /steps %}}

##### `server.infrastructure`

- Default value: `null`

{{% steps %}}

###### `infrastructure.annotations`

- Default value: `map`

Sets the `infrastructure` [annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations).

{{% /steps %}}

##### `server.resources`

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

##### `server.user`

- Default value: `null`

Sets the additional user details for ArgoCD UI.

{{% steps %}}

##### `user.name`

- Default value: `string`, `username`

##### `user.password`

- Default value: `string`, `password`

Encrypt the variable with [`ansible-vault`](/k3s-cluster/tutorials/handbook/ansible/#vault).

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

### `argocd_vars.release`

- Default value: `null`

Release details for `argocd` binary. See the related child settings, listed below.

{{% steps %}}

#### `release.checksums`

- Default value: `string`, `cli_checksums.txt`

#### `release.file`

- Default value: `string`, `argocd-linux-arm64`

#### `release.repository`

- Default value: `null`

{{% steps %}}

##### `repository.name`

- Default value: `string`, `argo-cd`

##### `repository.org`

- Default value: `string`, `argoproj`

{{% /steps %}}

#### `release.version`

- Default value: `string`

Visit [`argoproj/argo-cd`](https://github.com/argoproj/argo-cd/releases), for latest release version.

{{% /steps %}}

{{% /steps %}}

## Role Tasks

See the related role tasks, listed below.

{{% steps %}}

### Facts

Ansible facts, see [`facts.yaml`](https://{{< param variables.repository >}}/blob/main/roles/argocd/tasks/facts.yaml) for details.

### Main

Main role related tasks, see [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/argocd/tasks/main.yaml) for details.

### Reset

Reset related tasks, see [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/roles/argocd/tasks/reset.yaml) for details.

### Validation

Validation related tasks, see [`validation.yaml`](https://{{< param variables.repository >}}/blob/main/roles/argocd/tasks/validation.yaml) for details.

{{% /steps %}}

## Role Templates

See the related role templates, listed below.

{{% steps %}}

### Helm Chart

Helm chart values template, see [`values.j2`](https://{{< param variables.repository >}}/blob/main/roles/argocd/templates/values.j2) for details.

### Gateway

Kubernetes `Gateway` template, see [`config.j2`](https://{{< param variables.repository >}}/blob/main/roles/argocd/templates/gateway.j2) for details.

### HTTP Route

{{% steps nested="true" %}}

#### Insecure Route

Kubernetes `HTTPRoute` template, see [`http_route.j2`](https://{{< param variables.repository >}}/blob/main/roles/argocd/templates/http_route.j2) for details.

#### Secure Route

Kubernetes `HTTPRoute` template, see [`https_route.j2`](https://{{< param variables.repository >}}/blob/main/roles/argocd/templates/https_route.j2) for details.

{{% /steps %}}

### Load Balancer

Kubernetes `Service` template, see [`loadbalancer.j2`](https://{{< param variables.repository >}}/blob/main/roles/argocd/templates/loadbalancer.j2) for details.

### User

{{% steps nested="true" %}}

#### Name

Kubernetes `ConfigMap` template, see [`username.j2`](https://{{< param variables.repository >}}/blob/main/roles/argocd/templates/username.j2) for details.

#### Password

Kubernetes `Secret` template, see [`password.j2`](https://{{< param variables.repository >}}/blob/main/roles/argocd/templates/password.j2) for details.

{{% /steps %}}

{{% /steps %}}
