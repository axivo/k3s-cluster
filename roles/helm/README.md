# helm

![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![Version: 3.16.2-1](https://img.shields.io/badge/Version-3.16.2--1-informational?style=flat-square)

The role performs various tasks related to `helm` [package](https://helm.baltorepo.com/stable/debian/packages/helm/releases/3.16.2-1) deployment, reset and validation.

## Helm Plugins

See the installed `helm` plugins listed below, defined into [main.yaml](./defaults/main.yaml) `plugins` collection.

| Repository | Name | Version |
|------------|------|---------|
| https://github.com/databus23/helm-diff | diff | 3.9.13 |

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `{{ template "role.map" . }}` collection.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| helm_vars.environment.HELM_NAMESPACE | string | `"default"` |  |
| helm_vars.plugins[0].enabled | bool | `true` |  |
| helm_vars.plugins[0].name | string | `"diff"` |  |
| helm_vars.plugins[0].packages[0] | string | `"python3-jsonpatch"` |  |
| helm_vars.plugins[0].repository.url | string | `"https://github.com/databus23/helm-diff"` |  |
| helm_vars.plugins[0].version | string | `"v3.9.13"` |  |
| helm_vars.release.distro.name | string | `"debian"` |  |
| helm_vars.release.distro.url | string | `"https://helm.baltorepo.com"` |  |
| helm_vars.release.key | string | `"helm-archive-keyring.gpg"` |  |
| helm_vars.release.repository.channel | string | `"stable"` |  |
| helm_vars.release.repository.key | string | `"signing.asc"` |  |
| helm_vars.release.repository.url | string | `"https://baltocdn.com/helm"` |  |
| helm_vars.release.version | string | `"v3.16.2-1"` |  |
