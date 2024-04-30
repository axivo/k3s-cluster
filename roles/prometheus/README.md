# Prometheus

## Releases

- [ArtifactHUB](https://artifacthub.io/packages/helm/prometheus-community/kube-prometheus-stack)
- [GitHub](https://github.com/prometheus-community/helm-charts/releases)

## Chart

Set Grafana password:

```shell
ansible-vault encrypt_string '<yourpassword>' --name 'prometheus_vars.kubernetes.grafana.user.password'
```

Upgrade chart:

```shell
ansible-playbook --ask-vault-pass --tags prometheus upgrade.yaml
```

Uninstall chart:

```shell
helm uninstall monitoring -n kube-system --wait
kubectl delete crd alertmanagerconfigs.monitoring.coreos.com
kubectl delete crd alertmanagers.monitoring.coreos.com
kubectl delete crd podmonitors.monitoring.coreos.com
kubectl delete crd probes.monitoring.coreos.com
kubectl delete crd prometheuses.monitoring.coreos.com
kubectl delete crd prometheusrules.monitoring.coreos.com
kubectl delete crd servicemonitors.monitoring.coreos.com
kubectl delete crd thanosrulers.monitoring.coreos.com
kubectl delete secret grafana-credentials -n kube-system
kubectl delete namespace kube-system
```
