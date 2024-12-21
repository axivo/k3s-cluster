# coredns

![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![Version: 1.37.0](https://img.shields.io/badge/Version-1.37.0-informational?style=flat-square)

The role performs various tasks related to `coredns` [chart](https://github.com/coredns/helm/tree/coredns-1.37.0/charts/coredns) deployment, reset and validation.

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `role_map` collection.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| coredns_vars.kubernetes.deployment.legacy | bool | `false` | Legacy deployment, using `kube-dns` label selectors |
| coredns_vars.kubernetes.helm.chart.name | string | `"coredns"` |  |
| coredns_vars.kubernetes.helm.chart.version | string | `"v1.37.0"` |  |
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
