# Cilium

Cilium is a networking, observability, and security solution with an eBPF-based dataplane.

## Releases

- [ArtifactHUB](https://artifacthub.io/packages/helm/cilium/cilium)
- [GitHub](https://github.com/cilium/cilium/releases)
- [Cilium CLI](https://github.com/cilium/cilium-cli/releases)
- [Cilium Hubble](https://github.com/cilium/hubble/releases)

## Chart Upgrade

```shell
ansible-playbook --ask-vault-pass --tags cilium upgrade.yaml
```

Validate the setup:

```shell
cilium status
kubectl -n kube-system exec ds/cilium -- cilium status --verbose
```
