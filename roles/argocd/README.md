# ArgoCD

ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes.

## Role Tasks

- Install required binaries
- Install helm repository
- Install helm chart

## Releases

- [ArtifactHUB](https://artifacthub.io/packages/helm/argo/argo-cd)
- [GitHub](https://github.com/argoproj/argo-cd/releases)

## Chart Variables

Variables are located into `defaults/main.yaml` file:

```yaml
argocd_vars:
  server:
    admin:
      password: frontend admin user password
    loadbalancer:
      ip: frontend loadbalancer ip
  version:
    binary: binary version, see releases
    chart: chart version, see releases
```

Set frontend `admin` user password:

```shell
ansible-vault encrypt_string '<yourpassword>' --name 'argocd_vars.server.admin.password'
```

Update the `password` variable, into `defaults/main.yaml` file.

## Chart Upgrade

```shell
ansible-playbook --ask-vault-pass upgrade.yaml --tags argocd
```
