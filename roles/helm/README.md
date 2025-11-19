# helm

![Version: 3.19.0-1](https://img.shields.io/badge/Version-3.19.0--1-informational?style=flat-square)

The role performs various tasks related to `helm` [package](https://buildkite.com/organizations/helm-linux/packages/registries/helm-debian) deployment, reset and validation. Review the [documentation](https://axivo.com/k3s-cluster/wiki/guide/configuration/roles/helm), for additional details.

## Helm Plugins

See the installed `helm` plugins listed below, defined into [main.yaml](./defaults/main.yaml) `plugins` collection.

| Repository | Name | Version |
|------------|------|---------|
| https://github.com/databus23/helm-diff | diff | 3.14.1 |

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `helm_map` collection.

> [!TIP]
> - Use [Renovate](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#renovate), to automate the release pull requests and keep dependencies up-to-date

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| helm_vars.environment.HELM_NAMESPACE | string | `"default"` |  |
| helm_vars.plugins[0].enabled | bool | `true` |  |
| helm_vars.plugins[0].name | string | `"diff"` |  |
| helm_vars.plugins[0].packages[0] | string | `"python3-jsonpatch"` |  |
| helm_vars.plugins[0].repository.url | string | `"https://github.com/databus23/helm-diff"` |  |
| helm_vars.plugins[0].version | string | `"v3.14.1"` |  |
| helm_vars.release.helm.distro.channel | string | `"any"` |  |
| helm_vars.release.helm.distro.name | string | `"debian"` |  |
| helm_vars.release.helm.key | string | `"helm-archive-keyring.gpg"` |  |
| helm_vars.release.helm.repository.channel | string | `"stable"` |  |
| helm_vars.release.helm.repository.key | string | `"gpgkey"` |  |
| helm_vars.release.helm.repository.url | string | `"https://packages.buildkite.com/helm-linux/helm-debian"` |  |
| helm_vars.release.helm.version | string | `"v3.19.0-1"` |  |
