# metrics-server

![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![Version: 3.12.2](https://img.shields.io/badge/Version-3.12.2-informational?style=flat-square)

The role performs various tasks related to `metrics-server` [chart](https://github.com/kubernetes-sigs/metrics-server/tree/metrics-server-helm-chart-3.12.2/charts/metrics-server) deployment, reset and validation.

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `role_map` collection.

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
