---
title: Cilium
prev: /wiki/guide/configuration/roles
next: /wiki/guide/configuration/roles/cloudflare
---

The role performs various tasks related to Helm chart deployment, reset and validation.

<!--more-->

## Role Settings

See the related role settings listed below, defined into [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cilium/defaults/main.yaml) defaults file.

{{% steps %}}

### `cilium_vars.kubernetes`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `kubernetes.client`

- Default value: `null`

{{% steps %}}

##### `client.rate_limit`

- Default value: `null`

{{% steps %}}

###### `rate_limit.burst`

- Default value: `integer`, `100`

###### `rate_limit.qps`

- Default value: `integer`, `50`

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.envoy`

- Default value: `null`

{{% steps %}}

##### `envoy.resources`

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

- Default value: `string`, `cilium`

###### `chart.version`

- Default value: `string`

Visit [`cilium/cilium`](https://github.com/cilium/cilium/releases), for latest release version.

{{% /steps %}}

##### `helm.repository`

- Default value: `null`

{{% steps %}}

###### `repository.name`

- Default value: `string`, `cilium`

###### `repository.org`

- Default value: `string`, `cilium`

###### `repository.url`

- Default value: `string`, `https://helm.cilium.io`

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.hubble`

- Default value: `null`

{{% steps %}}

##### `hubble.relay`

- Default value: `null`

{{% steps %}}

###### `relay.replicas`

- Default value: `integer`, `2`

###### `relay.resources`

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

###### `relay.retry_timeout`

- Default value: `string`, `10s`

{{% /steps %}}

##### `hubble.ui`

- Default value: `null`

{{% steps %}}

###### `ui.gateway`

- Default value: `null`

Read the [Gateway API](/k3s-cluster/tutorials/handbook/cilium/#gateway-api) tutorial, for more details.

{{% steps %}}

###### `gateway.service`

- Default value: `string`, `hubble-ui`

###### `gateway.subdomain`

- Default value: `string`, `hubble`

Sets the subdomain name for Hubble UI.

{{% /steps %}}

###### `ui.infrastructure`

- Default value: `null`

{{% steps %}}

###### `infrastructure.annotations`

- Default value: `map`

Sets the `infrastructure` [annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations).

{{% /steps %}}

{{% /steps %}}

##### `hubble.tls`

- Default value: `null`

{{% steps %}}

###### `tls.auto`

- Default value: `null`

{{% steps %}}

###### `auto.method`

- Default value: `string`, `certmanager`

{{% /steps %}}

###### `tls.certificate`

- Default value: `null`

{{% steps %}}

###### `certificate.common`

- Default value: `null`

{{% steps %}}

###### `common.name`

- Default value: `string`, `hubble-tls-certificate`

{{% /steps %}}

###### `certificate.root`

- Default value: `null`

{{% steps %}}

###### `root.name`

- Default value: `string`, `hubble-tls-root-certificate`

{{% /steps %}}

{{% /steps %}}

###### `tls.cluster_issuer`

- Default value: `null`

{{% steps %}}

###### `cluster_issuer.name`

- Default value: `string`, `hubble-cluster-issuer`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.ingress`

- Default value: `null`

{{% steps %}}

##### `ingress.controller`

- Default value: `null`

{{% steps %}}

###### `controller.service`

- Default value: `null`

{{% steps %}}

###### `service.loadbalancer`

- Default value: `null`

{{% steps %}}

###### `loadbalancer.ip`

- Default value: `string`, `192.168.4.17`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.ipam`

- Default value: `null`

{{% steps %}}

##### `ipam.operator`

- Default value: `null`

{{% steps %}}

###### `operator.cluster_pool`

- Default value: `string`, `10.42.0.0/16`

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.loadbalancer`

- Default value: `null`

{{% steps %}}

##### `loadbalancer.algorithm`

- Default value: `string`, `disabled`

##### `loadbalancer.ip_pool`

- Default value: `string`, `192.168.4.16/28`

##### `loadbalancer.table_size`

- Default value: `integer`, `16381`

{{% /steps %}}

#### `kubernetes.namespace`

- Default value: `string`, `kube-system`

#### `kubernetes.operator`

- Default value: `null`

{{% steps %}}

##### `operator.resources`

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

#### `kubernetes.routing_mode`

- Default value: `string`, `native`

{{% /steps %}}

### `cilium_vars.release`

- Default value: `null`

See the related child settings, listed below.

{{% steps %}}

#### `release.cli`

- Default value: `null`

Release details for `cilium-cli` binary.

{{% steps %}}

##### `cli.file`

- Default value: `string`, `cilium-linux-arm64.tar.gz`

##### `cli.repository`

- Default value: `null`

{{% steps %}}

###### `repository.name`

- Default value: `string`, `cilium-cli`

###### `repository.org`

- Default value: `string`, `cilium`

{{% /steps %}}

##### `cli.version`

- Default value: `string`

Visit [`cilium/cilium-cli`](https://github.com/cilium/cilium-cli/releases), for latest release version.

{{% /steps %}}

#### `release.gateway_api`

- Default value: `null`

Release details for `gateway-api` manifest.

{{% steps %}}

##### `gateway_api.file`

- Default value: `string`, `experimental-install.yaml`

##### `gateway_api.repository`

- Default value: `null`

{{% steps %}}

###### `repository.name`

- Default value: `string`, `gateway-api`

###### `repository.org`

- Default value: `string`, `kubernetes-sigs`

{{% /steps %}}

##### `gateway_api.version`

- Default value: `string`

Visit [`kubernetes-sigs/gateway-api`](https://github.com/kubernetes-sigs/gateway-api/releases), for latest release version.

{{% /steps %}}

#### `release.hubble`

- Default value: `null`

Release details for `hubble` binary.

{{% steps %}}

##### `hubble.file`

- Default value: `string`, `hubble-linux-arm64.tar.gz`

##### `hubble.repository`

- Default value: `null`

{{% steps %}}

###### `repository.name`

- Default value: `string`, `hubble`

###### `repository.org`

- Default value: `string`, `cilium`

{{% /steps %}}

##### `hubble.version`

- Default value: `string`

Visit [`cilium/hubble`](https://github.com/cilium/hubble/releases), for latest release version.

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

## Role Tasks

See the related role tasks, listed below.

{{% steps %}}

### Facts

Ansible facts, see [`facts.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cilium/tasks/facts.yaml) for details.

### Main

Main role related tasks, see [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cilium/tasks/main.yaml) for details.

### Reset

Reset related tasks, see [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cilium/tasks/reset.yaml) for details.

### Update

Update related tasks, see [`validation.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cilium/tasks/update.yaml) for details.

### Validation

Validation related tasks, see [`validation.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cilium/tasks/validation.yaml) for details.

{{% /steps %}}

## Role Templates

See the related role templates, listed below.

{{% steps %}}

### Helm Chart

Helm chart values template, see [`values.j2`](https://{{< param variables.repository >}}/blob/main/roles/cilium/templates/values.j2) for details.

### Certificate

Kubernetes `Certificate` template, see [`certificate.j2`](https://{{< param variables.repository >}}/blob/main/roles/cilium/templates/certificate.j2) for details.

### Cluster Issuer

Kubernetes `ClusterIssuer` template, see [`cluster_issuer.j2`](https://{{< param variables.repository >}}/blob/main/roles/cilium/templates/cluster_issuer.j2) for details.

### Gateway

Kubernetes `Gateway` template, see [`gateway.j2`](https://{{< param variables.repository >}}/blob/main/roles/cilium/templates/gateway.j2) for details.

### HTTP Route

{{% steps nested="true" %}}

#### Insecure Route

Kubernetes `HTTPRoute` template, see [`http_route.j2`](https://{{< param variables.repository >}}/blob/main/roles/cilium/templates/http_route.j2) for details.

#### Secure Route

Kubernetes `HTTPRoute` template, see [`https_route.j2`](https://{{< param variables.repository >}}/blob/main/roles/cilium/templates/https_route.j2) for details.

{{% /steps %}}

### L2 Announcement Policy

Kubernetes `CiliumL2AnnouncementPolicy` template, see [`l2_announcement_policy.j2`](https://{{< param variables.repository >}}/blob/main/roles/cilium/templates/l2_announcement_policy.j2) for details.

### Load Balancer

Kubernetes `Service` template, see [`loadbalancer.j2`](https://{{< param variables.repository >}}/blob/main/roles/cilium/templates/loadbalancer.j2) for details.

### Load Balancer IP Pool

Kubernetes `CiliumLoadBalancerIPPool` template, see [`loadbalancer_ip_pool.j2`](https://{{< param variables.repository >}}/blob/main/roles/cilium/templates/loadbalancer_ip_pool.j2) for details.

{{% /steps %}}
