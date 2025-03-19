# argo-cd

![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![Version: 7.8.12](https://img.shields.io/badge/Version-7.8.12-informational?style=flat-square)

The role performs various tasks related to `argo-cd` [chart](https://github.com/argoproj/argo-helm/tree/argo-cd-7.8.12/charts/argo-cd) deployment, reset and validation. Review the [documentation](https://axivo.com/k3s-cluster/wiki/guide/configuration/roles/argocd), for additional details.

## Role Dependencies

See the installed role dependencies listed below, defined into [main.yaml](./defaults/main.yaml) `release` collection.

| Repository | Name | Version |
|------------|------|---------|
| https://github.com/argoproj/argo-cd | argocd | 2.14.6 |

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `argocd_map` collection.

> [!TIP]
> - Use [Renovate](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#renovate), to automate the release pull requests and keep dependencies up-to-date
> - Use [Robusta KRR](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#robusta-krr), to optimize the cluster resources allocation

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| argocd_vars.kubernetes.application_set.replicas | int | `1` |  |
| argocd_vars.kubernetes.application_set.resources.limits.cpu | string | `nil` |  |
| argocd_vars.kubernetes.application_set.resources.limits.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.application_set.resources.requests.cpu | string | `"10m"` |  |
| argocd_vars.kubernetes.application_set.resources.requests.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.configs.cm.admin.enabled | bool | `false` |  |
| argocd_vars.kubernetes.configs.cm.exec.enabled | bool | `true` |  |
| argocd_vars.kubernetes.configs.cm.status_badge.enabled | bool | `false` | See [documentation](https://argo-cd.readthedocs.io/en/stable/user-guide/status-badge/), for details |
| argocd_vars.kubernetes.configs.params.application.namespaces | list | `["kube-system"]` | Namespaces where `Application` resources may be created |
| argocd_vars.kubernetes.configs.params.applicationsetcontroller.git.new_file_globbing.enabled | bool | `true` | See [documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/Generators-Git-File-Globbing/), for details |
| argocd_vars.kubernetes.configs.params.applicationsetcontroller.git.submodule.enabled | bool | `true` | Enable git submodule support |
| argocd_vars.kubernetes.configs.params.applicationsetcontroller.log_level | string | `"warn"` | Available options are `debug`, `info', `warn` and `error` |
| argocd_vars.kubernetes.configs.params.applicationsetcontroller.progressive_syncs.enabled | bool | `true` | Enable use of Progressive Syncs |
| argocd_vars.kubernetes.configs.params.controller.log_level | string | `"warn"` | Available options are `debug`, `info', `warn` and `error` |
| argocd_vars.kubernetes.configs.params.controller.sharding.algorithm | string | `"consistent-hashing"` | Available options are `legacy`, `round-robin` and `consistent-hashing`, see [documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/high_availability/) for details |
| argocd_vars.kubernetes.configs.params.dexserver.log_level | string | `"warn"` | Available options are `debug`, `info', `warn` and `error` |
| argocd_vars.kubernetes.configs.params.notificationscontroller.log_level | string | `"warn"` | Available options are `debug`, `info', `warn` and `error` |
| argocd_vars.kubernetes.configs.params.reposerver.log_level | string | `"warn"` | Available options are `debug`, `info', `warn` and `error` |
| argocd_vars.kubernetes.configs.params.server.insecure | bool | `true` | If `true`, HTTPRoute is used, otherwise Ingress |
| argocd_vars.kubernetes.configs.params.server.log_level | string | `"warn"` | Available options are `debug`, `info', `warn` and `error` |
| argocd_vars.kubernetes.controller.dynamic_cluster_distribution.enabled | bool | `true` | See [documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/dynamic-cluster-distribution), for details |
| argocd_vars.kubernetes.controller.replicas | int | `1` |  |
| argocd_vars.kubernetes.controller.resources.limits.cpu | string | `nil` |  |
| argocd_vars.kubernetes.controller.resources.limits.memory | string | `"512Mi"` |  |
| argocd_vars.kubernetes.controller.resources.requests.cpu | string | `"10m"` |  |
| argocd_vars.kubernetes.controller.resources.requests.memory | string | `"512Mi"` |  |
| argocd_vars.kubernetes.dex.resources.limits.cpu | string | `nil` |  |
| argocd_vars.kubernetes.dex.resources.limits.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.dex.resources.requests.cpu | string | `"10m"` |  |
| argocd_vars.kubernetes.dex.resources.requests.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.global.logging.level | string | `"warn"` | Available options are `debug`, `info', `warn` and `error` |
| argocd_vars.kubernetes.haproxy.resources.limits.cpu | string | `nil` |  |
| argocd_vars.kubernetes.haproxy.resources.limits.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.haproxy.resources.requests.cpu | string | `"10m"` |  |
| argocd_vars.kubernetes.haproxy.resources.requests.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.helm.chart.name | string | `"argo-cd"` |  |
| argocd_vars.kubernetes.helm.chart.version | string | `"v7.8.12"` |  |
| argocd_vars.kubernetes.helm.repository.name | string | `"argo-helm"` |  |
| argocd_vars.kubernetes.helm.repository.org | string | `"argoproj"` |  |
| argocd_vars.kubernetes.helm.repository.url | string | `"https://argoproj.github.io"` |  |
| argocd_vars.kubernetes.namespace | string | `"kube-system"` |  |
| argocd_vars.kubernetes.notifications.resources.limits.cpu | string | `nil` |  |
| argocd_vars.kubernetes.notifications.resources.limits.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.notifications.resources.requests.cpu | string | `"10m"` |  |
| argocd_vars.kubernetes.notifications.resources.requests.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.redis.ha.enabled | bool | `false` | Redis HA requires at least 3 worker nodes |
| argocd_vars.kubernetes.redis.ha.storage.access_modes[0] | string | `"ReadWriteOnce"` |  |
| argocd_vars.kubernetes.redis.ha.storage.class | string | `"longhorn"` |  |
| argocd_vars.kubernetes.redis.ha.storage.enabled | bool | `false` |  |
| argocd_vars.kubernetes.redis.ha.storage.size | string | `"10Gi"` |  |
| argocd_vars.kubernetes.redis.resources.limits.cpu | string | `nil` |  |
| argocd_vars.kubernetes.redis.resources.limits.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.redis.resources.requests.cpu | string | `"10m"` |  |
| argocd_vars.kubernetes.redis.resources.requests.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.repo_server.autoscaling.enabled | bool | `true` | If `false`, `replicas` value is set from `min_replicas` value |
| argocd_vars.kubernetes.repo_server.autoscaling.max_replicas | int | `3` |  |
| argocd_vars.kubernetes.repo_server.autoscaling.min_replicas | int | `1` |  |
| argocd_vars.kubernetes.repo_server.autoscaling.target.utilization_percentage.cpu | string | `nil` |  |
| argocd_vars.kubernetes.repo_server.autoscaling.target.utilization_percentage.memory | int | `80` |  |
| argocd_vars.kubernetes.repo_server.resources.limits.cpu | string | `nil` |  |
| argocd_vars.kubernetes.repo_server.resources.limits.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.repo_server.resources.requests.cpu | string | `"10m"` |  |
| argocd_vars.kubernetes.repo_server.resources.requests.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.server.autoscaling.enabled | bool | `true` | If `false`, `replicas` value is set from `min_replicas` value |
| argocd_vars.kubernetes.server.autoscaling.max_replicas | int | `3` |  |
| argocd_vars.kubernetes.server.autoscaling.min_replicas | int | `1` |  |
| argocd_vars.kubernetes.server.autoscaling.target.utilization_percentage.cpu | string | `nil` |  |
| argocd_vars.kubernetes.server.autoscaling.target.utilization_percentage.memory | int | `80` |  |
| argocd_vars.kubernetes.server.credentials.admin.password | string | Set value into [all.yaml](../../inventory/cluster/group_vars/all.yaml) `credentials` collection | ArgoCD UI admin password, set at global level |
| argocd_vars.kubernetes.server.credentials.user.name | string | Set value into [all.yaml](../../inventory/cluster/group_vars/all.yaml) `credentials` collection | ArgoCD UI user name, set at global level |
| argocd_vars.kubernetes.server.credentials.user.password | string | Set value into [all.yaml](../../inventory/cluster/group_vars/all.yaml) `credentials` collection | ArgoCD UI user password, set at global level |
| argocd_vars.kubernetes.server.gateway.service | string | `"argo-cd-argocd-server"` |  |
| argocd_vars.kubernetes.server.gateway.subdomain | string | `"argocd"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| argocd_vars.kubernetes.server.resources.limits.cpu | string | `nil` |  |
| argocd_vars.kubernetes.server.resources.limits.memory | string | `"128Mi"` |  |
| argocd_vars.kubernetes.server.resources.requests.cpu | string | `"10m"` |  |
| argocd_vars.kubernetes.server.resources.requests.memory | string | `"128Mi"` |  |
| argocd_vars.release.checksum | string | `"cli_checksums.txt"` |  |
| argocd_vars.release.file | string | `"argocd-linux-arm64"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/server/#hardware), for details |
| argocd_vars.release.repository.name | string | `"argo-cd"` |  |
| argocd_vars.release.repository.org | string | `"argoproj"` |  |
| argocd_vars.release.version | string | `"v2.14.6"` |  |
