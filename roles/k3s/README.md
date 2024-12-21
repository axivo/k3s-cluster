# k3s

![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![Version: 1.31.3+k3s1](https://img.shields.io/badge/Version-1.31.3+k3s1-informational?style=flat-square)

The role performs various tasks related to `k3s` [cluster](https://github.com/k3s-io/k3s/releases/tag/v1.31.3+k3s1) deployment, reset and validation.

## Role Dependencies

See the installed role dependencies listed below, defined into [main.yaml](./defaults/main.yaml) `release` collection.

| Repository | Name | Version |
|------------|------|---------|
| https://github.com/kubepug/kubepug | kubepug | 1.7.1 |

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `{{ template "role.map" . }}` collection.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| k3s_vars.cluster.controlplane.tainted | bool | `true` |  |
| k3s_vars.cluster.domain | string | `"cluster.local"` |  |
| k3s_vars.cluster.kubeconfig.local | bool | `true` |  |
| k3s_vars.cluster.kubeconfig.path | string | `"{{ lookup('ansible.builtin.env', 'HOME') + '/.kube' }}"` | Local `/.kube` directory path |
| k3s_vars.cluster.service.host | string | `"127.0.0.1"` |  |
| k3s_vars.cluster.service.port | int | `6444` |  |
| k3s_vars.cluster.tls_san | list | `["192.168.4.10"]` | Related to `server.api.host` key |
| k3s_vars.network.interface | string | `"eth0"` |  |
| k3s_vars.release.k3s.checksum | string | `"sha256sum-arm64.txt"` |  |
| k3s_vars.release.k3s.file | string | `"k3s-arm64"` |  |
| k3s_vars.release.k3s.name | string | `"k3s"` |  |
| k3s_vars.release.k3s.repository.name | string | `"k3s"` |  |
| k3s_vars.release.k3s.repository.org | string | `"k3s-io"` |  |
| k3s_vars.release.k3s.version | string | `"v1.31.3+k3s1"` |  |
| k3s_vars.release.kubepug.checksum | string | `"checksums.txt"` |  |
| k3s_vars.release.kubepug.file | string | `"kubepug_linux_arm64.tar.gz"` |  |
| k3s_vars.release.kubepug.name | string | `"kubepug"` |  |
| k3s_vars.release.kubepug.repository.name | string | `"kubepug"` |  |
| k3s_vars.release.kubepug.repository.org | string | `"kubepug"` |  |
| k3s_vars.release.kubepug.version | string | `"v1.7.1"` |  |
| k3s_vars.server.api.host | string | `"192.168.4.10"` | Related to `cluster.tls_san` key, used as frontend bind IP for Haproxy loadbalancer and populated into `/.kube/config` file |
| k3s_vars.server.api.port | int | `6443` |  |
| k3s_vars.service.debug | bool | `false` |  |
