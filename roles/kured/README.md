# Kured

Kured (KUbernetes REboot Daemon) is a Kubernetes daemonset that performs safe automatic node reboots when the need to do so is indicated by the package management system of the underlying OS.

## Releases

- [ArtifactHUB](https://artifacthub.io/packages/helm/kured/kured)
- [GitHub](https://github.com/kubereboot/charts/tree/main/charts/kured)

## Chart Upgrade

```shell
ansible-playbook --ask-vault-pass --tags kured upgrade.yaml
```
