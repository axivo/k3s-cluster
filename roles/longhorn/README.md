# longhorn

![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![Version: 1.7.2](https://img.shields.io/badge/Version-1.7.2-informational?style=flat-square)

The role performs various tasks related to `longhorn` [chart](https://github.com/longhorn/charts/tree/longhorn-1.7.2/charts/longhorn) deployment, reset and validation. Review the [documentation](https://axivo.com/k3s-cluster/wiki/guide/configuration/roles/longhorn), for additional details.

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `longhorn_map` collection.

> [!TIP]
> - Use [Renovate](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#renovate), to automate the release pull requests and keep dependencies up-to-date
> - Use [Robusta KRR](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#robusta-krr), to optimize the cluster resources allocation

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| longhorn_vars.kubernetes.default_settings.backup.enabled | bool | `true` |  |
| longhorn_vars.kubernetes.default_settings.backup.target | string | `"cifs://192.168.1.8/backup"` | See Longhorn [documentation](https://longhorn.io/docs/latest/snapshots-and-backups/backup-and-restore/set-backup-target), for more details |
| longhorn_vars.kubernetes.default_settings.collect_usage_metrics | bool | `false` |  |
| longhorn_vars.kubernetes.default_settings.data_locality | string | `"strict-local"` |  |
| longhorn_vars.kubernetes.default_settings.log_level | string | `"Warn"` |  |
| longhorn_vars.kubernetes.default_settings.pod_deletion_policy | string | `"delete-both-statefulset-and-deployment-pod"` |  |
| longhorn_vars.kubernetes.default_settings.volume.replica_auto_balance | string | `"least-effort"` |  |
| longhorn_vars.kubernetes.default_settings.volume.replicas | int | `2` | Minimum replicas accepted value is `2` |
| longhorn_vars.kubernetes.frontend.gateway.service | string | `"longhorn-frontend"` |  |
| longhorn_vars.kubernetes.frontend.gateway.subdomain | string | `"longhorn"` |  |
| longhorn_vars.kubernetes.helm.chart.name | string | `"longhorn"` |  |
| longhorn_vars.kubernetes.helm.chart.version | string | `"v1.7.2"` |  |
| longhorn_vars.kubernetes.helm.repository.name | string | `"longhorn"` |  |
| longhorn_vars.kubernetes.helm.repository.org | string | `"longhorn"` |  |
| longhorn_vars.kubernetes.helm.repository.url | string | `"https://charts.longhorn.io"` |  |
| longhorn_vars.kubernetes.namespace | string | `"kube-system"` |  |
