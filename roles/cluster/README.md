# cluster

![Type: distribution](https://img.shields.io/badge/Type-distribution-informational?style=flat-square) ![Version: 24.04](https://img.shields.io/badge/Version-24.04-informational?style=flat-square)

The role performs various tasks related to Ubuntu LTS OS based [cluster](https://ubuntu.com/server) deployment, reset and validation.

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| cluster_vars.device.enabled | bool | `true` |  |
| cluster_vars.device.id | string | `"2:2"` |  |
| cluster_vars.device.name | string | `"ASMedia Technology"` |  |
| cluster_vars.hardware.architecture | string | `"aarch64"` |  |
| cluster_vars.hardware.product | string | `"Raspberry Pi"` |  |
| cluster_vars.service.bluetooth.enabled | bool | `false` |  |
| cluster_vars.service.cloud_init.enabled | bool | `false` |  |
| cluster_vars.service.postfix.enabled | bool | `true` |  |
| cluster_vars.service.postfix.protocols | string | `"ipv4"` |  |
| cluster_vars.service.postfix.relay.host | string | `"smtp.mail.me.com"` |  |
| cluster_vars.service.postfix.relay.port | int | `587` |  |
| cluster_vars.service.postfix.user | string | Set values into [all.yaml](../../inventory/cluster/group_vars/all.yaml) `credentials` collection | Postfix user credentials, set at global level |
| cluster_vars.service.snapd.enabled | bool | `false` |  |
| cluster_vars.service.unattended_upgrades.enabled | bool | `true` |  |
| cluster_vars.service.unattended_upgrades.mail_report | string | `"only-on-error"` |  |
| cluster_vars.service.unattended_upgrades.remove_deps | string | `"true"` |  |
| cluster_vars.service.wifi.enabled | bool | `false` |  |
| cluster_vars.ssh.key | string | `"id_ed25519.pub"` |  |
| cluster_vars.ssh.path | string | `"{{ lookup('ansible.builtin.env', 'HOME') + '/.ssh' }}"` |  |
