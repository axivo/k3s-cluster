---
title: Cloudflare
prev: /wiki/guide/configuration/roles
next: /wiki/guide/configuration/roles/kured
---

The role performs various tasks related to [Cloudflare](https://www.cloudflare.com) DNS configuration, as well the `external-dns` Helm chart deployment, reset and validation.

<!--more-->

## Role Settings

See the related role settings listed below, defined into [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cloudflare/defaults/main.yaml) defaults file.

{{% steps %}}

### `cloudflare_vars.kubernetes`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `kubernetes.acme`

- Default value: `null`

{{% steps %}}

##### `acme.server`

- Default value: `string`, [`staging`](https://letsencrypt.org/docs/staging-environment/), optional `production`

See the Let's Encrypt [rate limits](https://letsencrypt.org/docs/rate-limits/) documentation, for more details.

{{% /steps %}}

#### `kubernetes.api`

- Default value: `null`

{{% steps %}}

##### `api.token`

- Default value: `null`

Read the [API Token](/k3s-cluster/tutorials/handbook/cloudflare/#api-token) tutorial, for more details.

{{% steps %}}

###### `token.key`

- Default value: `string`, `token`

###### `token.name`

- Default value: `string`, `cloudflare-api-token`

###### `token.value`

- Default value: `string`

Encrypt the variable with [`ansible-vault`](/k3s-cluster/tutorials/handbook/ansible/#vault).

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.helm`

- Default value: `null`

{{% steps %}}

##### `helm.chart`

- Default value: `null`

{{% steps %}}

###### `chart.name`

- Default value: `string`, `external-dns`

###### `chart.version`

- Default value: `string`

Visit [`kubernetes-sigs/external-dns`](https://github.com/kubernetes-sigs/external-dns/releases), for latest `external-dns-helm-chart` release version.

{{% /steps %}}

##### `helm.repository`

- Default value: `null`

{{% steps %}}

###### `repository.name`

- Default value: `string`, `external-dns`

###### `repository.org`

- Default value: `string`, `kubernetes-sigs`

###### `repository.url`

- Default value: `string`, `https://kubernetes-sigs.github.io`

{{% /steps %}}

{{% /steps %}}

#### `kubernetes.gateway`

- Default value: `null`

Read the [Gateway API](/k3s-cluster/tutorials/handbook/cilium/#gateway-api) tutorial, for more details.

{{% steps %}}

##### `gateway.domain`

- Default value: `string`, `domain.com`, optional `disabled`

{{% /steps %}}

#### `kubernetes.namespace`

- Default value: `string`, `kube-system`

#### `kubernetes.policy`

- Default value: `string`, `sync`

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

#### `kubernetes.secret`

- Default value: `null`

{{% steps %}}

##### `secret.key`

- Default value: `string`, `token`

##### `secret.name`

- Default value: `string`, `cloudflare-api-token`

{{% /steps %}}

#### `kubernetes.tls`

- Default value: `null`

{{% steps %}}

##### `tls.cluster_issuer`

- Default value: `null`

{{% steps %}}

###### `cluster_issuer.name`

- Default value: `string`, `cloudflare-cluster-issuer`

{{% /steps %}}

##### `tls.key_prefix`

- Default value: `string`, `cloudflare-tls`

{{% /steps %}}

{{% /steps %}}

{{% /steps %}}

## Role Tasks

See the related role tasks, listed below.

{{% steps %}}

### Facts

Ansible facts, see [`facts.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cloudflare/tasks/facts.yaml) for details.

### Main

Main role related tasks, see [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cloudflare/tasks/main.yaml) for details.

### Reset

Reset related tasks, see [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cloudflare/tasks/reset.yaml) for details.

### Validation

Validation related tasks, see [`validation.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cloudflare/tasks/validation.yaml) for details.

{{% /steps %}}

## Role Templates

See the related role templates, listed below.

{{% steps %}}

### Helm Chart

Helm chart values template, see [`values.j2`](https://{{< param variables.repository >}}/blob/main/roles/cloudflare/templates/values.j2) for details.

### API Token

Kubernetes `Secret` template, see [`api_token.j2`](https://{{< param variables.repository >}}/blob/main/roles/cloudflare/templates/api_token.j2) for details.

### Cluster Issuer

Kubernetes `ClusterIssuer` template, see [`cluster_issuer.j2`](https://{{< param variables.repository >}}/blob/main/roles/cloudflare/templates/cluster_issuer.j2) for details.

{{% /steps %}}
