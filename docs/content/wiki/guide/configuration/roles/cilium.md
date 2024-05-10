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

{{% /steps %}}

{{% /steps %}}
