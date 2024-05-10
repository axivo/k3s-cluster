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

Read the [Gateway API](/k3s-cluster/tutorials/handbook/cilium/gateway) tutorial, for more details.

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

###### `operator.cluster`

- Default value: `null`

{{% steps %}}

###### `cluster.pool`

- Default value: `string`, `10.42.0.0/16`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}
