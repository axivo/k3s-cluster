# coredns

![Version: 1.45.2](https://img.shields.io/badge/Version-1.45.2-informational?style=flat-square)

The role performs various tasks related to `coredns` [chart](https://github.com/coredns/helm/tree/coredns-1.45.2/charts/coredns) deployment, reset and validation. Review the [documentation](https://axivo.com/k3s-cluster/wiki/guide/configuration/roles/coredns), for additional details.

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `coredns_map` collection.

> [!TIP]
> - Use [Renovate](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#renovate), to automate the release pull requests and keep dependencies up-to-date
> - Use [Robusta KRR](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#robusta-krr), to optimize the cluster resources allocation

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| coredns_vars.kubernetes.deployment.legacy | bool | `false` | Legacy deployment, using `kube-dns` label selectors |
| coredns_vars.kubernetes.helm.chart.name | string | `"coredns"` |  |
| coredns_vars.kubernetes.helm.chart.version | string | `"v1.45.2"` |  |
| coredns_vars.kubernetes.helm.repository.name | string | `"helm"` |  |
| coredns_vars.kubernetes.helm.repository.org | string | `"coredns"` |  |
| coredns_vars.kubernetes.helm.repository.url | string | `"https://coredns.github.io"` |  |
| coredns_vars.kubernetes.hpa.enabled | bool | `true` | If `false`, `replicas` value is set from `min_replicas` value |
| coredns_vars.kubernetes.hpa.max_replicas | int | `3` |  |
| coredns_vars.kubernetes.hpa.min_replicas | int | `1` |  |
| coredns_vars.kubernetes.hpa.resource.name | string | `"memory"` |  |
| coredns_vars.kubernetes.hpa.resource.target.utilization | int | `80` | Average utilization percentage |
| coredns_vars.kubernetes.namespace | string | `"kube-system"` |  |
| coredns_vars.kubernetes.resources.limits.cpu | string | `nil` |  |
| coredns_vars.kubernetes.resources.limits.memory | string | `"128Mi"` |  |
| coredns_vars.kubernetes.resources.requests.cpu | string | `"10m"` |  |
| coredns_vars.kubernetes.resources.requests.memory | string | `"128Mi"` |  |
