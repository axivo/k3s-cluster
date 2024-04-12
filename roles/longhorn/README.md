# Longhorn

## Releases

- [ArtifactHUB](https://artifacthub.io/packages/helm/longhorn/longhorn)
- [GitHub](https://github.com/longhorn/longhorn/releases)

## Setup

Uninstall chart:

```shell
kubectl patch lhs deleting-confirmation-flag -n kube-system \
    -p '{"value": "true"}' --type=merge 
helm uninstall longhorn -n kube-system --wait
kubectl delete namespace kube-system
```
