# cluster

![Version: 24.04.2](https://img.shields.io/badge/Version-24.04.2-informational?style=flat-square)

The role performs various tasks related to Ubuntu LTS OS based [cluster](https://ubuntu.com/server) deployment, reset and validation. Review the [documentation](https://axivo.com/k3s-cluster/wiki/guide/configuration/roles/cluster), for additional details.

> [!IMPORTANT]
> Read the [Ubuntu Server](https://axivo.com/k3s-cluster/tutorials/handbook/server/) tutorial, on bare-metal infrastructure.

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `cluster_map` collection.

> [!TIP]
> - Use [Renovate](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#renovate), to automate the release pull requests and keep dependencies up-to-date

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| cluster_vars.device.enabled | bool | `true` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/server/#storage-devices), for details |
| cluster_vars.device.id | string | `"2:2"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/server/#deviceid), for details |
| cluster_vars.device.name | string | `"ASMedia Technology"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/server/#devicename), for details |
| cluster_vars.hardware.architecture | string | `"aarch64"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/server/#hardware), for details |
| cluster_vars.hardware.product | string | `"Raspberry Pi"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/server/#hardwareproduct), for details |
| cluster_vars.service.bluetooth.enabled | bool | `false` | By default, related `apt` packages are not installed |
| cluster_vars.service.cloud_init.enabled | bool | `false` |  |
| cluster_vars.service.postfix.enabled | bool | `true` |  |
| cluster_vars.service.postfix.protocols | string | `"ipv4"` |  |
| cluster_vars.service.postfix.relay.host | string | `"smtp.mail.me.com"` | iCloud mail server relay host |
| cluster_vars.service.postfix.relay.port | int | `587` |  |
| cluster_vars.service.postfix.user | string | Set values into [all.yaml](../../inventory/cluster/group_vars/all.yaml) `credentials` collection | Postfix user credentials, set at global level |
| cluster_vars.service.snapd.enabled | bool | `false` |  |
| cluster_vars.service.unattended_upgrades.enabled | bool | `true` | See [documentation](https://help.ubuntu.com/community/AutomaticSecurityUpdates), for details |
| cluster_vars.service.unattended_upgrades.mail_report | string | `"only-on-error"` | Available options are `always`, `on-change` and `only-on-error` |
| cluster_vars.service.unattended_upgrades.remove_deps | string | `"true"` |  |
| cluster_vars.service.wifi.enabled | bool | `false` | By default, related `apt` packages are not installed |
| cluster_vars.ssh.key | string | `"id_ed25519.pub"` | See [documentation](https://axivo.com/k3s-cluster/wiki/guide/configuration/user/#ssh-key), for details |
| cluster_vars.ssh.path | string | `"{{ lookup('ansible.builtin.env', 'HOME') + '/.ssh' }}"` | Full path to `.ssh` directory, a hardcoded value can be used |
