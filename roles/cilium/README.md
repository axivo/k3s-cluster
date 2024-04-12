# Cilium

Cilium is a networking, observability, and security solution with an eBPF-based dataplane.

## Releases

- [ArtifactHUB](https://artifacthub.io/packages/helm/cilium/cilium)
- [GitHub](https://github.com/cilium/cilium/releases)
- [Cilium CLI](https://github.com/cilium/cilium-cli/releases)
- [Cilium Hubble](https://github.com/cilium/hubble/releases)

## Chart Variables

Variables are located into `defaults/main.yaml` file:

```yaml
cilium_vars:
  hubble_ui:
    loadbalancer:
      ip: hubble ui loadbalancer ip
  ingress_controller:
    loadbalancer:
      ip: ingress controller loadbalancer ip
      mode: dedicated
  ipam:
    operator:
      cluster:
        pool: ipam operator cluster pool, k3s related
  kubernetes:
    gateway_api:
      version: v1.0.0
  loadbalancer:
    ip:
      pool: loadbalancer ip pool, see CiliumLoadBalancerIPPool
  version:
    chart: chart version, see releases
    cli: binary cilium-cli version, see releases
    hubble: binary hubble version, see releases
```

## Chart Upgrade

```shell
ansible-playbook --ask-vault-pass upgrade.yaml --tags cilium
```

Validate the setup:

```shell
kubectl -n kube-system exec ds/cilium -- cilium status --verbose
```
