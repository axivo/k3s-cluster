# CertManager

cert-manager adds certificates and certificate issuers as resource types in Kubernetes clusters, and simplifies the process of obtaining, renewing and using those certificates.

## Role Tasks

- Install helm repository
- Install helm chart

## Releases

- [ArtifactHUB](https://artifacthub.io/packages/helm/cert-manager/cert-manager)
- [GitHub](https://github.com/cert-manager/cert-manager/releases)

## Chart Variables

```yaml
certmanager_vars:
  version:
    chart: chart version, see releases
```

## Chart Upgrade

```shell
ansible-playbook --ask-vault-pass --tags certmanager upgrade.yaml
```
