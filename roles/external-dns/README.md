# external-dns

![Version: 1.20.0](https://img.shields.io/badge/Version-1.20.0-informational?style=flat-square)

The role performs various tasks related to [Cloudflare](https://github.com/kubernetes-sigs/external-dns/blob/external-dns-helm-chart-1.20.0/docs/tutorials/cloudflare.md) based `external-dns` [chart](https://github.com/kubernetes-sigs/external-dns/tree/external-dns-helm-chart-1.20.0/charts/external-dns) deployment, reset and validation. Review the [documentation](https://axivo.com/k3s-cluster/wiki/guide/configuration/roles/externaldns), for additional details.

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `externaldns_map` collection.

> [!TIP]
> - Use [Renovate](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#renovate), to automate the release pull requests and keep dependencies up-to-date
> - Use [Robusta KRR](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#robusta-krr), to optimize the cluster resources allocation

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| externaldns_vars.cloudflare.acme.server | string | `"staging"` | Available options are [`production`](https://letsencrypt.org/docs/rate-limits/) and [`staging`](https://letsencrypt.org/docs/staging-environment/) |
| externaldns_vars.cloudflare.host.domain | string | `"noty.cc"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| externaldns_vars.cloudflare.prefix | string | `"cloudflare"` |  |
| externaldns_vars.kubernetes.helm.chart.name | string | `"external-dns"` |  |
| externaldns_vars.kubernetes.helm.chart.version | string | `"v1.20.0"` |  |
| externaldns_vars.kubernetes.helm.repository.name | string | `"external-dns"` |  |
| externaldns_vars.kubernetes.helm.repository.org | string | `"kubernetes-sigs"` |  |
| externaldns_vars.kubernetes.helm.repository.url | string | `"https://kubernetes-sigs.github.io"` |  |
| externaldns_vars.kubernetes.log_level | string | `"warning"` |  |
| externaldns_vars.kubernetes.namespace | string | `"kube-system"` |  |
| externaldns_vars.kubernetes.policy | string | `"sync"` |  |
| externaldns_vars.kubernetes.resources.limits.cpu | string | `nil` |  |
| externaldns_vars.kubernetes.resources.limits.memory | string | `"128Mi"` |  |
| externaldns_vars.kubernetes.resources.requests.cpu | string | `"10m"` |  |
| externaldns_vars.kubernetes.resources.requests.memory | string | `"128Mi"` |  |
