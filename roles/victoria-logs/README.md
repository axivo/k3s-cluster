# victoria-logs-single

![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![Version: 0.8.13](https://img.shields.io/badge/Version-0.8.13-informational?style=flat-square)

The role performs various tasks related to `victoria-logs-single` [chart](https://github.com/VictoriaMetrics/helm-charts/tree/victoria-logs-single-0.8.13/charts/victoria-logs-single) deployment, reset and validation. Review the [documentation](https://axivo.com/k3s-cluster/wiki/guide/configuration/roles/victorialogs), for additional details.

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `victorialogs_map` collection.

> [!TIP]
> - Use [Renovate](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#renovate), to automate the release pull requests and keep dependencies up-to-date
> - Use [Robusta KRR](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#robusta-krr), to optimize the cluster resources allocation

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| victorialogs_vars.kubernetes.helm.chart.alias | string | `"vls"` |  |
| victorialogs_vars.kubernetes.helm.chart.name | string | `"victoria-logs-single"` |  |
| victorialogs_vars.kubernetes.helm.chart.version | string | `"v0.8.13"` |  |
| victorialogs_vars.kubernetes.helm.repository.name | string | `"helm-charts"` |  |
| victorialogs_vars.kubernetes.helm.repository.org | string | `"VictoriaMetrics"` |  |
| victorialogs_vars.kubernetes.helm.repository.url | string | `"https://victoriametrics.github.io"` |  |
| victorialogs_vars.kubernetes.namespace | string | `"kube-system"` |  |
| victorialogs_vars.kubernetes.server.ingress.enabled | bool | `true` |  |
| victorialogs_vars.kubernetes.server.ingress.subdomain | string | `"logs"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| victorialogs_vars.kubernetes.server.log_level | string | `"WARN"` |  |
| victorialogs_vars.kubernetes.server.replicas | int | `1` |  |
| victorialogs_vars.kubernetes.server.resources.limits.cpu | string | `nil` |  |
| victorialogs_vars.kubernetes.server.resources.limits.memory | string | `"256Mi"` |  |
| victorialogs_vars.kubernetes.server.resources.requests.cpu | string | `"10m"` |  |
| victorialogs_vars.kubernetes.server.resources.requests.memory | string | `"256Mi"` |  |
| victorialogs_vars.kubernetes.server.retention_period | string | `"7d"` |  |
| victorialogs_vars.kubernetes.server.storage.access_modes[0] | string | `"ReadWriteOnce"` |  |
| victorialogs_vars.kubernetes.server.storage.class | string | `"longhorn"` |  |
| victorialogs_vars.kubernetes.server.storage.enabled | bool | `true` |  |
| victorialogs_vars.kubernetes.server.storage.size | string | `"5Gi"` |  |
| victorialogs_vars.kubernetes.vector.autoscaling.enabled | bool | `true` | If `false`, `replicas` value is set from `min_replicas` value |
| victorialogs_vars.kubernetes.vector.autoscaling.max_replicas | int | `3` |  |
| victorialogs_vars.kubernetes.vector.autoscaling.min_replicas | int | `1` |  |
| victorialogs_vars.kubernetes.vector.autoscaling.target.utilization_percentage.cpu | string | `nil` |  |
| victorialogs_vars.kubernetes.vector.autoscaling.target.utilization_percentage.memory | int | `80` |  |
| victorialogs_vars.kubernetes.vector.enabled | bool | `true` |  |
| victorialogs_vars.kubernetes.vector.log_level | string | `"warn"` |  |
| victorialogs_vars.kubernetes.vector.resources.limits.cpu | string | `nil` |  |
| victorialogs_vars.kubernetes.vector.resources.limits.memory | string | `"128Mi"` |  |
| victorialogs_vars.kubernetes.vector.resources.requests.cpu | string | `"10m"` |  |
| victorialogs_vars.kubernetes.vector.resources.requests.memory | string | `"128Mi"` |  |
