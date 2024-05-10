---
title: Cluster
prev: /wiki/guide/configuration/roles
next: /wiki/guide/configuration/roles/helm
weight: 1
---

The role performs various tasks related to OS configuration, reset and validation.

<!--more-->

## Role Settings

See the related role settings listed below, defined into [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cluster/defaults/main.yaml) defaults file.

{{% steps %}}

### `cluster_vars.device`

- Default value: `null`

If a SSD device is attached to hardware through USB cable, there is a validation step making sure the same device id and name related to cable adapter chipset is present into all cluster nodes. Validate the USB storage device values attached to nodes, by running the `lsusb` command:

```shell
lsusb
```

Command output:

```shell
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 002: ID 174c:55aa ASMedia Technology Inc. ASM1051E SATA 6Gb/s bridge, ASM1053E SATA 6Gb/s bridge, ASM1153 SATA 3Gb/s bridge, ASM1153E SATA 6Gb/s bridge
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 2109:3431 VIA Labs, Inc. Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

For example, connecting the SSD device with different USB cable models might result in a different `device.name`. Similarly, connecting the SSD device to a different USB port will result in a different `device.id`.

{{< callout type="info" >}}
  Run the [Validation](/k3s-cluster/wiki/guide/playbooks/validation) playbook, to validate the USB storage device values.
{{< /callout >}}

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `device.id`

- Default value: `string`, `2:2`

The SSD device attached with a cable adapter to hardware is identified as `Bus 002 Device 002`, which sets the `device.id` to `2:2`. To test if the value is correct, run:

```shell
lsusb -s '2:2'
```

Command output:

```shell
Bus 002 Device 002: ID 174c:55aa ASMedia Technology Inc. ASM1051E SATA 6Gb/s bridge, ASM1053E SATA 6Gb/s bridge, ASM1153 SATA 3Gb/s bridge, ASM1153E SATA 6Gb/s bridge
```

#### `device.name`

- Default value: `string`, `ASMedia Technology`

The SSD device cable adapter chipset is identified as `ASMedia Technology Inc. bridge`, which sets the `device.name` to `ASMedia Technology`. To test if the value is correct, run:

```shell
lsusb -s '2:2' | grep 'ASMedia Technology'
```

Command output:

```shell
Bus 002 Device 002: ID 174c:55aa ASMedia Technology Inc. ASM1051E SATA 6Gb/s bridge, ASM1053E SATA 6Gb/s bridge, ASM1153 SATA 3Gb/s bridge, ASM1153E SATA 6Gb/s bridge
```

#### `device.transport`

- Default value: `string`, `usb`

Setting the value to `sata` will disable any validation and configuration settings related to SSD devices with `usb` transport type. The [Provisioning](/k3s-cluster/wiki/guide/playbooks/provisioning) playbook will assume the OS was deployed prior, to a properly formatted internal disk.

{{% /steps %}}

### `cluster_vars.hardware`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `hardware.architecture`

- Default value: `string`, `aarch64`

Hardware architecture used to identify the cluster node hardware architecture. To determine the hardware architecture, run:

```shell
arch
```

Command output:

```shell
aarch64
```

#### `hardware.product`

- Default value: `string`, `Raspberry Pi`

Hardware product, used to identify the cluster node hardware model. To determine the hardware product, run:

```shell
lshw -class system -quiet | grep product
```

Command output:

```shell
product: Raspberry Pi 4 Model B Rev 1.5
```

{{% /steps %}}

### `cluster_vars.service`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `service.bluetooth`

- Default value: `null`

Setup Bluetooth service, on Raspberry Pi hardware. By default, Ubuntu Server LTS `{{< param variables.os.version >}}` does not installs the related `apt` packages.

{{% steps %}}

##### `bluetooth.enabled`

- Default value: `boolean`, `false`

{{% /steps %}}

#### `service.cloud_init`

- Default value: `null`

Setup Cloud Init service.

{{% steps %}}

##### `cloud_init.enabled`

- Default value: `boolean`, `false`

{{% /steps %}}

#### `service.postfix`

- Default value: `null`

Setup Postfix service, with iCloud mail servers.

{{% steps %}}

##### `postfix.enabled`

- Default value: `boolean`, `true`

##### `postfix.protocols`

- Default value: `string`, `ipv4`

##### `postfix.relay`

- Default value: `null`

{{% steps %}}

###### `relay.host`

- Default value: `string`, `smtp.mail.me.com`

###### `relay.port`

- Default value: `integer`, `587`

{{% /steps %}}

##### `postfix.user`

- Default value: `null`

{{% steps %}}

###### `user.alias`

- Default value: `string`, [`alias@domain.com`](https://support.apple.com/guide/icloud/add-and-manage-email-aliases-mm6b1a490a/icloud)

Mail sent by `root` user will use this email address.

###### `user.name`

- Default value: `string`, [`username@domain.com`](https://appleid.apple.com)

Used for login into iCloud servers.

###### `user.password`

- Default value: `string`, [`password`](https://support.apple.com/102654)

Encrypt the variable with [`ansible-vault`](/k3s-cluster/tutorials/handbook/ansible/#vault).

{{% /steps %}}

{{% /steps %}}

#### `service.snapd`

- Default value: `null`

Setup Snapd service.

{{% steps %}}

##### `snapd.enabled`

- Default value: `boolean`, `false`

{{% /steps %}}

#### `service.unattended_upgrades`

- Default value: `null`

Setup Unattended Upgrades service.

{{% steps %}}

##### `unattended_upgrades.enabled`

- Default value: `boolean`, `true`

##### `unattended_upgrades.mail_report`

- Default value: `string`, `on-change`

##### `unattended_upgrades.remove_deps`

- Default value: `string`, `true`

{{% /steps %}}

#### `service.wifi`

- Default value: `null`

Setup WiFi service, on Raspberry Pi hardware. By default, Ubuntu Server LTS `{{< param variables.os.version >}}` does not installs the related `apt` packages.

{{% steps %}}

##### `wifi.enabled`

- Default value: `boolean`, `false`

{{% /steps %}}

{{% /steps %}}

### `cluster_vars.ssh`

- Default value: `null`

See the related child settings, listed below.

{{% steps nested="true" %}}

#### `ssh.authorized_key`

- Default value: `string`, `/Users/username/.ssh/id_ed25519.pub`

Example of setting a different storage location:

```yaml
cluster_vars:
  ssh:
    authorized_key: /Users/username/keys/id_ed25519.pub
```

{{% /steps %}}

{{% /steps %}}

## Role Tasks

See the related role tasks, listed below.

{{% steps %}}

### Configuration

OS configuration related tasks, see [`configuration.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cluster/tasks/configuration.yaml) for details.

### Facts

Ansible facts, see [`facts.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cluster/tasks/facts.yaml) for details.

### Firewall

Firewall related tasks, can be used to also configure specific firewall rules. See [`firewall.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cluster/tasks/firewall.yaml) for details.

### Main

Main role related tasks, see [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cluster/tasks/main.yaml) for details.

### Reset

Reset related tasks, see [`reset.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cluster/tasks/reset.yaml) for details.

### Upgrade

OS upgrade related tasks, see [`upgrade.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cluster/tasks/upgrade.yaml) for details.

### User

User related tasks, see [`user.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cluster/tasks/user.yaml) for details.

### Validation

Validation related tasks, see [`validation.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cluster/tasks/validation.yaml) for details.

{{% /steps %}}
