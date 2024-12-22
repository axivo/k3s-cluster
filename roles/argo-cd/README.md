# argo-cd

![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![Version: 7.7.11](https://img.shields.io/badge/Version-7.7.11-informational?style=flat-square)

The role performs various tasks related to `argo-cd` [chart](https://github.com/argoproj/argo-helm/tree/argo-cd-7.7.11/charts/argo-cd) deployment, reset and validation.

## Role Dependencies

See the installed role dependencies listed below, defined into [main.yaml](./defaults/main.yaml) `release` collection.

| Repository | Name | Version |
|------------|------|---------|
| https://github.com/argoproj/argo-cd | argocd | 2.13.2 |

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `argocd_map` collection.

> [!TIP]
> - Use [Renovate](https://axivo.com/k3s-cluster/tutorials/handbook/renovate/), to automate new release pull requests
> - Use [Robusta KRR](https://github.com/robusta-dev/krr), to optimize your cluster resources allocation

