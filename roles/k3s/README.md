# Lightweight Kubernetes

Production ready, easy to install, half the memory, all in a binary less than 100MB.

## Releases

- [k3s-io/k3s](https://github.com/k3s-io/k3s/releases)
- [rancher/kubectl](https://hub.docker.com/r/rancher/kubectl/tags)
- [rancher/upgrade-system-controller](https://github.com/rancher/upgrade-system-controller/releases)

## Package Dependencies

- `open-iscsi`, needed for Longhorn

## Service Status

See `journalctl` output:

```shell
$ journalctl -xeu k3s.service
```

## Traefik

To disable Traefik and use Cilium, add into `config.j2` template:

```yaml
disable:
  - local-storage
  - servicelb
  - traefik
```
