# victoria-metrics-k8s-stack

![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![Version: 0.38.3](https://img.shields.io/badge/Version-0.38.3-informational?style=flat-square)

The role performs various tasks related to `victoria-metrics-k8s-stack` [chart](https://github.com/VictoriaMetrics/helm-charts/tree/victoria-metrics-k8s-stack-0.38.3/charts/victoria-metrics-k8s-stack) deployment, reset and validation. Review the [documentation](https://axivo.com/k3s-cluster/wiki/guide/configuration/roles/victoriametrics), for additional details.

## Role Dependencies

See the installed role dependencies listed below, defined into [main.yaml](./defaults/main.yaml) `kubernetes.helm.chart` collection.

| Repository | Name | Version |
|------------|------|---------|
| https://prometheus-community.github.io/helm-charts | prometheus-operator-crds | 18.0.1 |

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `victoriametricsk8sstack_map` collection.

> [!TIP]
> - Use [Renovate](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#renovate), to automate the release pull requests and keep dependencies up-to-date
> - Use [Robusta KRR](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#robusta-krr), to optimize the cluster resources allocation

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| victoriametrics_vars.kubernetes.alertmanager.config.route.group_interval | string | `"5m"` |  |
| victoriametrics_vars.kubernetes.alertmanager.config.route.group_wait | string | `"30s"` |  |
| victoriametrics_vars.kubernetes.alertmanager.config.route.repeat_interval | string | `"12h"` |  |
| victoriametrics_vars.kubernetes.alertmanager.config_reloader.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.alertmanager.config_reloader.resources.limits.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.alertmanager.config_reloader.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.alertmanager.config_reloader.resources.requests.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.alertmanager.ingress.enabled | bool | `true` |  |
| victoriametrics_vars.kubernetes.alertmanager.ingress.subdomain | string | `"alertmanager"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| victoriametrics_vars.kubernetes.alertmanager.log_level | string | `"WARN"` |  |
| victoriametrics_vars.kubernetes.alertmanager.replicas | int | `2` | Minimum accepted value is `2` |
| victoriametrics_vars.kubernetes.alertmanager.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.alertmanager.resources.limits.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.alertmanager.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.alertmanager.resources.requests.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.alertmanager.storage.access_modes[0] | string | `"ReadWriteOnce"` |  |
| victoriametrics_vars.kubernetes.alertmanager.storage.class | string | `"longhorn"` |  |
| victoriametrics_vars.kubernetes.alertmanager.storage.enabled | bool | `false` |  |
| victoriametrics_vars.kubernetes.alertmanager.storage.size | string | `"5Gi"` |  |
| victoriametrics_vars.kubernetes.default_dashboards.timezone | string | `"utc"` |  |
| victoriametrics_vars.kubernetes.grafana.ingress.enabled | bool | `true` |  |
| victoriametrics_vars.kubernetes.grafana.ingress.subdomain | string | `"grafana"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| victoriametrics_vars.kubernetes.grafana.log_level | string | `"WARN"` |  |
| victoriametrics_vars.kubernetes.grafana.replicas | int | `1` |  |
| victoriametrics_vars.kubernetes.grafana.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.grafana.resources.limits.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.grafana.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.grafana.resources.requests.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.grafana.sidecar.log_level | string | `"WARN"` |  |
| victoriametrics_vars.kubernetes.grafana.sidecar.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.grafana.sidecar.resources.limits.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.grafana.sidecar.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.grafana.sidecar.resources.requests.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.grafana.user.name | string | Set value into [all.yaml](../../inventory/cluster/group_vars/all.yaml) `credentials` collection | User name used to access Grafana UI |
| victoriametrics_vars.kubernetes.grafana.user.password | string | Set value into [all.yaml](../../inventory/cluster/group_vars/all.yaml) `credentials` collection | User password used to access Grafana UI |
| victoriametrics_vars.kubernetes.helm.chart.prometheus.name | string | `"prometheus-operator-crds"` |  |
| victoriametrics_vars.kubernetes.helm.chart.prometheus.version | string | `"v18.0.0"` |  |
| victoriametrics_vars.kubernetes.helm.chart.victoriametrics.alias | string | `"vmks"` |  |
| victoriametrics_vars.kubernetes.helm.chart.victoriametrics.name | string | `"victoria-metrics-k8s-stack"` |  |
| victoriametrics_vars.kubernetes.helm.chart.victoriametrics.version | string | `"v0.38.3"` |  |
| victoriametrics_vars.kubernetes.helm.repository.grafana.name | string | `"helm-charts"` |  |
| victoriametrics_vars.kubernetes.helm.repository.grafana.org | string | `"grafana"` |  |
| victoriametrics_vars.kubernetes.helm.repository.grafana.url | string | `"https://grafana.github.io"` |  |
| victoriametrics_vars.kubernetes.helm.repository.prometheus.name | string | `"helm-charts"` |  |
| victoriametrics_vars.kubernetes.helm.repository.prometheus.org | string | `"prometheus-community"` |  |
| victoriametrics_vars.kubernetes.helm.repository.prometheus.url | string | `"https://prometheus-community.github.io"` |  |
| victoriametrics_vars.kubernetes.helm.repository.victoriametrics.name | string | `"helm-charts"` |  |
| victoriametrics_vars.kubernetes.helm.repository.victoriametrics.org | string | `"VictoriaMetrics"` |  |
| victoriametrics_vars.kubernetes.helm.repository.victoriametrics.url | string | `"https://victoriametrics.github.io"` |  |
| victoriametrics_vars.kubernetes.kube_state_metrics.replicas | int | `1` |  |
| victoriametrics_vars.kubernetes.kube_state_metrics.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.kube_state_metrics.resources.limits.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.kube_state_metrics.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.kube_state_metrics.resources.requests.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.namespace | string | `"kube-system"` |  |
| victoriametrics_vars.kubernetes.prometheus_node_exporter.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.prometheus_node_exporter.resources.limits.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.prometheus_node_exporter.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.prometheus_node_exporter.resources.requests.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.victoria_metrics_operator.log_level | string | `"error"` | Available options are `info` and `error` |
| victoriametrics_vars.kubernetes.victoria_metrics_operator.replicas | int | `1` |  |
| victoriametrics_vars.kubernetes.victoria_metrics_operator.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.victoria_metrics_operator.resources.limits.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.victoria_metrics_operator.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.victoria_metrics_operator.resources.requests.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.vmagent.config_reloader.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.vmagent.config_reloader.resources.limits.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.vmagent.config_reloader.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.vmagent.config_reloader.resources.requests.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.vmagent.ingress.enabled | bool | `true` |  |
| victoriametrics_vars.kubernetes.vmagent.ingress.subdomain | string | `"agent"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| victoriametrics_vars.kubernetes.vmagent.log_level | string | `"WARN"` |  |
| victoriametrics_vars.kubernetes.vmagent.replicas | int | `1` |  |
| victoriametrics_vars.kubernetes.vmagent.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.vmagent.resources.limits.memory | string | `"1024Mi"` |  |
| victoriametrics_vars.kubernetes.vmagent.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.vmagent.resources.requests.memory | string | `"1024Mi"` |  |
| victoriametrics_vars.kubernetes.vmagent.storage.access_modes[0] | string | `"ReadWriteOnce"` |  |
| victoriametrics_vars.kubernetes.vmagent.storage.class | string | `"longhorn"` |  |
| victoriametrics_vars.kubernetes.vmagent.storage.enabled | bool | `false` |  |
| victoriametrics_vars.kubernetes.vmagent.storage.size | string | `"5Gi"` |  |
| victoriametrics_vars.kubernetes.vmalert.config_reloader.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.vmalert.config_reloader.resources.limits.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.vmalert.config_reloader.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.vmalert.config_reloader.resources.requests.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.vmalert.ingress.enabled | bool | `true` |  |
| victoriametrics_vars.kubernetes.vmalert.ingress.subdomain | string | `"alert"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| victoriametrics_vars.kubernetes.vmalert.log_level | string | `"WARN"` |  |
| victoriametrics_vars.kubernetes.vmalert.replicas | int | `1` |  |
| victoriametrics_vars.kubernetes.vmalert.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.vmalert.resources.limits.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.vmalert.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.vmalert.resources.requests.memory | string | `"128Mi"` |  |
| victoriametrics_vars.kubernetes.vmcluster.enabled | bool | `false` | If false, `vmsingle` settings are used |
| victoriametrics_vars.kubernetes.vmcluster.replication_factor | int | `2` |  |
| victoriametrics_vars.kubernetes.vmcluster.retention_period | string | `"72h"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.hpa.enabled | bool | `true` |  |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.hpa.max_replicas | int | `4` |  |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.hpa.min_replicas | int | `2` |  |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.hpa.resource.name | string | `"memory"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.hpa.resource.target.utilization | int | `80` |  |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.ingress.enabled | bool | `false` |  |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.ingress.subdomain | string | `"insert"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.log_level | string | `"WARN"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.resources.limits.memory | string | `"512Mi"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vminsert.resources.requests.memory | string | `"512Mi"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.hpa.enabled | bool | `true` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.hpa.max_replicas | int | `4` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.hpa.min_replicas | int | `2` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.hpa.resource.name | string | `"memory"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.hpa.resource.target.utilization | int | `80` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.ingress.enabled | bool | `true` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.ingress.subdomain | string | `"metrics"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.log_level | string | `"WARN"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.resources.limits.memory | string | `"512Mi"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.resources.requests.memory | string | `"512Mi"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.storage.access_modes[0] | string | `"ReadWriteOnce"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.storage.class | string | `"longhorn"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.storage.enabled | bool | `false` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmselect.storage.size | string | `"5Gi"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.ingress.enabled | bool | `false` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.ingress.subdomain | string | `"storage"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.log_level | string | `"WARN"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.replicas | int | `1` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.resources.limits.memory | string | `"2560Mi"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.resources.requests.memory | string | `"2560Mi"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.storage.access_modes[0] | string | `"ReadWriteOnce"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.storage.class | string | `"longhorn"` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.storage.enabled | bool | `true` |  |
| victoriametrics_vars.kubernetes.vmcluster.vmstorage.storage.size | string | `"50Gi"` |  |
| victoriametrics_vars.kubernetes.vmsingle.ingress.enabled | bool | `true` |  |
| victoriametrics_vars.kubernetes.vmsingle.ingress.subdomain | string | `"metrics"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| victoriametrics_vars.kubernetes.vmsingle.log_level | string | `"WARN"` |  |
| victoriametrics_vars.kubernetes.vmsingle.replicas | int | `1` |  |
| victoriametrics_vars.kubernetes.vmsingle.resources.limits.cpu | string | `nil` |  |
| victoriametrics_vars.kubernetes.vmsingle.resources.limits.memory | string | `"2560Mi"` |  |
| victoriametrics_vars.kubernetes.vmsingle.resources.requests.cpu | string | `"10m"` |  |
| victoriametrics_vars.kubernetes.vmsingle.resources.requests.memory | string | `"2560Mi"` |  |
| victoriametrics_vars.kubernetes.vmsingle.retention_period | string | `"72h"` |  |
| victoriametrics_vars.kubernetes.vmsingle.storage.access_modes[0] | string | `"ReadWriteOnce"` |  |
| victoriametrics_vars.kubernetes.vmsingle.storage.class | string | `"longhorn"` |  |
| victoriametrics_vars.kubernetes.vmsingle.storage.enabled | bool | `true` |  |
| victoriametrics_vars.kubernetes.vmsingle.storage.size | string | `"50Gi"` |  |
