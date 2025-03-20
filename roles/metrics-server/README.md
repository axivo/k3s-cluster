# metrics-server

![Version: 3.12.2](https://img.shields.io/badge/Version-3.12.2-informational?style=flat-square)

The role performs various tasks related to `metrics-server` [chart](https://github.com/kubernetes-sigs/metrics-server/tree/metrics-server-helm-chart-3.12.2/charts/metrics-server) deployment, reset and validation. Review the [documentation](https://axivo.com/k3s-cluster/wiki/guide/configuration/roles/metricsserver), for additional details.

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `metricsserver_map` collection.

> [!TIP]
> - Use [Renovate](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#renovate), to automate the release pull requests and keep dependencies up-to-date
> - Use [Robusta KRR](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#robusta-krr), to optimize the cluster resources allocation

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| metricsserver_vars.kubernetes.helm.chart.name | string | `"metrics-server"` |  |
| metricsserver_vars.kubernetes.helm.chart.version | string | `"v3.12.2"` |  |
| metricsserver_vars.kubernetes.helm.repository.name | string | `"metrics-server"` |  |
| metricsserver_vars.kubernetes.helm.repository.org | string | `"kubernetes-sigs"` |  |
| metricsserver_vars.kubernetes.helm.repository.url | string | `"https://kubernetes-sigs.github.io"` |  |
| metricsserver_vars.kubernetes.namespace | string | `"kube-system"` |  |
| metricsserver_vars.kubernetes.replicas | int | `1` |  |
| metricsserver_vars.kubernetes.resources.limits.cpu | string | `nil` |  |
| metricsserver_vars.kubernetes.resources.limits.memory | string | `"128Mi"` |  |
| metricsserver_vars.kubernetes.resources.requests.cpu | string | `"10m"` |  |
| metricsserver_vars.kubernetes.resources.requests.memory | string | `"128Mi"` |  |
| metricsserver_vars.kubernetes.server.args | list | `["--v=1"]` | Additional server arguments, set log level [verbosity](https://google.github.io/glog/stable/logging/#verbose-logging) |
| metricsserver_vars.kubernetes.server.tls.type | string | `"cert-manager"` | Available options are `cert-manager`, `helm` and `metrics-server` |
