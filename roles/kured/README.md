# kured

![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![Version: 5.5.2](https://img.shields.io/badge/Version-5.5.2-informational?style=flat-square)

The role performs various tasks related to `kured` [chart](https://github.com/kubereboot/charts/tree/kured-5.5.2/charts/kured) deployment, reset and validation.

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `kured_map` collection.

> [!TIP]
> This repository uses [Renovate](https://docs.renovatebot.com), to automate new release pull requests. See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/renovate/), for more details.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| kured_vars.kubernetes.configuration.concurrency | int | `1` |  |
| kured_vars.kubernetes.configuration.period | string | `"15m"` |  |
| kured_vars.kubernetes.configuration.reboot_delay | string | `"60s"` |  |
| kured_vars.kubernetes.configuration.slack.enabled | bool | `true` |  |
| kured_vars.kubernetes.configuration.slack.messages.drain | string | `""` |  |
| kured_vars.kubernetes.configuration.slack.messages.enabled | bool | `false` |  |
| kured_vars.kubernetes.configuration.slack.messages.reboot | string | `""` |  |
| kured_vars.kubernetes.configuration.slack.messages.uncordon | string | `""` |  |
| kured_vars.kubernetes.configuration.slack.notify_url | string | Set value into [all.yaml](../../inventory/cluster/group_vars/all.yaml) `credentials` collection | Slack notifications, see [documentation](https://kured.dev/docs/configuration/#notifications) for details |
| kured_vars.kubernetes.configuration.time.end | string | `"08:00"` |  |
| kured_vars.kubernetes.configuration.time.start | string | `"04:00"` |  |
| kured_vars.kubernetes.configuration.time.zone | string | `"UTC"` |  |
| kured_vars.kubernetes.helm.chart.name | string | `"kured"` |  |
| kured_vars.kubernetes.helm.chart.version | string | `"v5.5.2"` |  |
| kured_vars.kubernetes.helm.repository.name | string | `"charts"` |  |
| kured_vars.kubernetes.helm.repository.org | string | `"kubereboot"` |  |
| kured_vars.kubernetes.helm.repository.url | string | `"https://kubereboot.github.io"` |  |
| kured_vars.kubernetes.namespace | string | `"kube-system"` |  |
| kured_vars.kubernetes.resources.limits.cpu | string | `nil` |  |
| kured_vars.kubernetes.resources.limits.memory | string | `"128Mi"` |  |
| kured_vars.kubernetes.resources.requests.cpu | string | `"10m"` |  |
| kured_vars.kubernetes.resources.requests.memory | string | `"128Mi"` |  |
