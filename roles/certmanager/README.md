# cert-manager

![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![Version: 1.16.2](https://img.shields.io/badge/Version-1.16.2-informational?style=flat-square)

The role performs various tasks related to `cert-manager` [chart](https://github.com/cert-manager/cert-manager/tree/v1.16.2/deploy/charts/cert-manager) deployment, reset and validation.

## Role Dependencies

See the installed role dependencies listed below, defined into [main.yaml](./defaults/main.yaml) `release` collection.

| Repository | Name | Version |
|------------|------|---------|
| https://github.com/cert-manager/cmctl | cmctl | 2.1.1 |

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| certmanager_vars.kubernetes.cainjector.resources.limits.cpu | string | `nil` |  |
| certmanager_vars.kubernetes.cainjector.resources.limits.memory | string | `"128Mi"` |  |
| certmanager_vars.kubernetes.cainjector.resources.requests.cpu | string | `"10m"` |  |
| certmanager_vars.kubernetes.cainjector.resources.requests.memory | string | `"128Mi"` |  |
| certmanager_vars.kubernetes.controller.replicas | int | `2` |  |
| certmanager_vars.kubernetes.controller.resources.limits.cpu | string | `nil` |  |
| certmanager_vars.kubernetes.controller.resources.limits.memory | string | `"128Mi"` |  |
| certmanager_vars.kubernetes.controller.resources.requests.cpu | string | `"10m"` |  |
| certmanager_vars.kubernetes.controller.resources.requests.memory | string | `"128Mi"` |  |
| certmanager_vars.kubernetes.global.log_level | int | `2` |  |
| certmanager_vars.kubernetes.helm.chart.name | string | `"cert-manager"` |  |
| certmanager_vars.kubernetes.helm.chart.version | string | `"v1.16.2"` |  |
| certmanager_vars.kubernetes.helm.repository.name | string | `"cert-manager"` |  |
| certmanager_vars.kubernetes.helm.repository.org | string | `"jetstack"` |  |
| certmanager_vars.kubernetes.helm.repository.url | string | `"https://charts.jetstack.io"` |  |
| certmanager_vars.kubernetes.namespace | string | `"kube-system"` |  |
| certmanager_vars.kubernetes.webhook.resources.limits.cpu | string | `nil` |  |
| certmanager_vars.kubernetes.webhook.resources.limits.memory | string | `"128Mi"` |  |
| certmanager_vars.kubernetes.webhook.resources.requests.cpu | string | `"10m"` |  |
| certmanager_vars.kubernetes.webhook.resources.requests.memory | string | `"128Mi"` |  |
| certmanager_vars.release.checksum | string | `"checksums.txt"` |  |
| certmanager_vars.release.file | string | `"cmctl_linux_arm64"` |  |
| certmanager_vars.release.repository.name | string | `"cmctl"` |  |
| certmanager_vars.release.repository.org | string | `"cert-manager"` |  |
| certmanager_vars.release.version | string | `"v2.1.1"` |  |
