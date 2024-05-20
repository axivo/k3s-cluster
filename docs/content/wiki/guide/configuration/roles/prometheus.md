---
title: Prometheus
prev: /wiki/guide/configuration/roles
next: /wiki/guide/playbooks
---

The role performs various tasks related to OS configuration, chart deployment, reset and validation.

<!--more-->

## Role Settings

See the related role settings listed below, defined into [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/defaults/main.yaml) defaults file.

{{% steps %}}

### `prometheus_vars.kubernetes`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `kubernetes.alertmanager`

- Default value: `null`

{{% steps %}}

##### `alertmanager.gateway`

- Default value: `null`

Read the [Gateway API](/k3s-cluster/tutorials/handbook/prometheus/#gateway-api) tutorial, for more details.

{{% steps %}}

###### `gateway.service`

- Default value: `string`, `monitoring-kube-prometheus-alertmanager`

###### `gateway.subdomain`

- Default value: `string`, `alertmanager`

Sets the subdomain name for Alert Manager UI.

{{% /steps %}}

##### `alertmanager.infrastructure`

- Default value: `null`

{{% steps %}}

###### `infrastructure.annotations`

- Default value: `map`

Sets the `infrastructure` [annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations).

{{% /steps %}}

##### `alertmanager.replicas`

- Default value: `integer`, `2`

##### `alertmanager.resources`

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

##### `alertmanager.storage`

- Default value: `string`, `5gi`

{{% /steps %}}

#### `kubernetes.helm`

- Default value: `null`

{{% steps %}}

##### `helm.chart`

- Default value: `null`

{{% steps %}}

###### `chart.name`

- Default value: `string`, `kube-prometheus-stack`

###### `chart.prefix`

- Default value: `string`, `monitoring`

###### `chart.version`

- Default value: `string`

Visit [`prometheus-community/helm-charts`](https://github.com/prometheus-community/helm-charts/releases), for latest release version.

{{% /steps %}}

##### `helm.repository`

- Default value: `null`

{{% steps %}}

###### `repository.name`

- Default value: `string`, `helm-charts`

###### `repository.org`

- Default value: `string`, `prometheus-community`

###### `repository.url`

- Default value: `string`, `https://prometheus-community.github.io`

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.grafana`

- Default value: `null`

{{% steps %}}

##### `grafana.gateway`

- Default value: `null`

Read the [Gateway API](/k3s-cluster/tutorials/handbook/prometheus/#gateway-api) tutorial, for more details.

{{% steps %}}

###### `gateway.service`

- Default value: `string`, `monitoring-grafana`

###### `gateway.subdomain`

- Default value: `string`, `grafana`

Sets the subdomain name for Grafana UI.

{{% /steps %}}

##### `grafana.infrastructure`

- Default value: `null`

{{% steps %}}

###### `infrastructure.annotations`

- Default value: `map`

Sets the `infrastructure` [annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations).

{{% /steps %}}

##### `grafana.secret`

- Default value: `null`

{{% steps %}}

###### `secret.name`

- Default value: `string`, `grafana-credentials`

{{% /steps %}}

##### `grafana.user`

- Default value: `null`

{{% steps %}}

###### `user.name`

- Default value: `string`, `admin`

###### `user.password`

- Default value: `string`

Encrypt the variable with [`ansible-vault`](/k3s-cluster/tutorials/handbook/ansible/#vault).

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.namespace`

- Default value: `string`, `kube-system`

#### `kubernetes.prometheus`

- Default value: `null`

{{% steps %}}

##### `prometheus.gateway`

- Default value: `null`

Read the [Gateway API](/k3s-cluster/tutorials/handbook/prometheus/#gateway-api) tutorial, for more details.

{{% steps %}}

###### `gateway.service`

- Default value: `string`, `monitoring-kube-prometheus-prometheus`

###### `gateway.subdomain`

- Default value: `string`, `prometheus`

Sets the subdomain name for Prometheus UI.

{{% /steps %}}

##### `prometheus.infrastructure`

- Default value: `null`

{{% steps %}}

###### `infrastructure.annotations`

- Default value: `map`

Sets the `infrastructure` [annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations).

{{% /steps %}}

##### `prometheus.resources`

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

##### `prometheus.storage`

- Default value: `string`, `50Gi`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

## Role Tasks

See the related role tasks, listed below.

{{% steps %}}

### Facts

Ansible facts, see [`facts.yaml`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/tasks/facts.yaml) for details.

### Main

Main role related tasks, see [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/tasks/main.yaml) for details.

### Reset

Reset related tasks, see [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/tasks/reset.yaml) for details.

### Validation

Validation related tasks, see [`validation.yaml`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/tasks/validation.yaml) for details.

{{% /steps %}}

## Role Templates

See the related role templates, listed below.

{{% steps %}}

### Helm Chart

Helm chart values template, see [`values.j2`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/templates/values.j2) for details.

### Alert Manager

{{% steps nested="true" %}}

#### Gateway

Kubernetes `Gateway` template, see [`alertmanager_gateway.j2`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/templates/alertmanager_gateway.j2) for details.

#### HTTP Route

{{% steps %}}

##### Insecure Route

Kubernetes `HTTPRoute` template, see [`alertmanager_http_route.j2`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/templates/alertmanager_http_route.j2) for details.

##### Secure Route

Kubernetes `HTTPRoute` template, see [`alertmanager_https_route.j2`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/templates/alertmanager_https_route.j2) for details.

{{% /steps %}}

{{% /steps %}}

### Grafana

{{% steps nested="true" %}}

#### Credentials

Kubernetes `Secret` template, see [`grafana_credentials.j2`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/templates/grafana_credentials.j2) for details.

#### Gateway

Kubernetes `Gateway` template, see [`grafana_gateway.j2`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/templates/grafana_gateway.j2) for details.

#### HTTP Route

{{% steps %}}

##### Insecure Route

Kubernetes `HTTPRoute` template, see [`grafana_http_route.j2`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/templates/grafana_http_route.j2) for details.

##### Secure Route

Kubernetes `HTTPRoute` template, see [`grafana_https_route.j2`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/templates/grafana_https_route.j2) for details.

{{% /steps %}}

{{% /steps %}}

### Prometheus

{{% steps nested="true" %}}

#### Gateway

Kubernetes `Gateway` template, see [`prometheus_gateway.j2`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/templates/prometheus_gateway.j2) for details.

#### HTTP Route

{{% steps %}}

##### Insecure Route

Kubernetes `HTTPRoute` template, see [`prometheus_http_route.j2`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/templates/prometheus_http_route.j2) for details.

##### Secure Route

Kubernetes `HTTPRoute` template, see [`prometheus_https_route.j2`](https://{{< param variables.repository >}}/blob/main/roles/prometheus/templates/prometheus_https_route.j2) for details.

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}
