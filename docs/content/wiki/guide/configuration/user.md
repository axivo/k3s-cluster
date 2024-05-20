---
title: User
prev: /wiki/guide/configuration
next: /wiki/guide/configuration/roles
weight: 2
---

The Ansible user is used to remotely execute various deployment tasks into cluster nodes.

<!--more-->

{{% steps %}}

### User Name

Set the [`ansible_user`](https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html) variable into [`all.yaml`](https://{{< param variables.repository >}}/blob/main/inventory/cluster/group_vars/all.yaml) global configuration file.

{{< callout type="warning" >}}
  Use the `username` value defined into [OS General Settings](/k3s-cluster/tutorials/handbook/server/#os-general-settings) server installation, to set the `ansible_user` variable.
{{< /callout >}}

### User Password

Encrypt the `ansible_password` variable with [`ansible-vault`](/k3s-cluster/tutorials/handbook/ansible/#vault) and set the encrypted value into [`all.yaml`](https://{{< param variables.repository >}}/blob/main/inventory/cluster/group_vars/all.yaml) global configuration file.

### SSH Key

Generate the [SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent), which will be copied into each cluster node, while running the [Provisioning](/k3s-cluster/wiki/guide/playbooks/provisioning) playbook:

```shell
ssh-keygen -t ed25519 -C 'your_email@example.com'
```

{{< callout type="info" >}}
  The [Provisioning](/k3s-cluster/wiki/guide/playbooks/provisioning) playbook will look for the generated SSH key, into default `/Users/username/.ssh` location.
{{< /callout >}}

For a different storage location, update the [`cluster_vars.ssh.authorized_key`](/k3s-cluster/wiki/guide/configuration/roles/cluster/#sshauthorized_key) value into Cluster role [`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cluster/defaults/main.yaml) configuration file.

{{% /steps %}}
