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

Set the `ansible_user` [variable](https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html), into [`all.yaml`]({{< param variables.github.url >}}/blob/main/inventory/cluster/group_vars/all.yaml) configuration file.

{{< callout type="info" >}}
  Use the `username` value you defined into [OS General Settings](/k3s-cluster/tutorials/handbook/server/#os-general-settings), to set the `ansible_user` variable.
{{< /callout >}}

### User Password

Encrypt the `ansible_password` variable with [`ansible-vault`](https://docs.ansible.com/ansible/latest/vault_guide/vault_managing_passwords.html):

```shell
ansible-vault encrypt_string 'this-Is-Som3-paSsw0rd' --name 'ansible_password'
```

Set the Ansible Vault global password:

```shell
New Vault password: my-Gl0bal-Passw0rd
Confirm New Vault password: my-Gl0bal-Passw0rd
Encryption successful
ansible_password: !vault |
          $ANSIBLE_VAULT;1.1;AES256
          66643330666431313331386538333366653631363466663937306261316335363739343866393364
          3931653862343333643136666466656230663830376630610a363531373736313565653332643561
          65666163383661313236646339626262336662353261373537393631643832653662366164373263
          6237653933363764330a633136316363616537373930356462363164663363323865376339636166
          37666462383031663964366561666630393535373661636335323963383034623763
```

{{< callout type="warning" >}}
  Use the above `my-Gl0bal-Passw0rd` password example for all encrypted settings, into your configuration files.
{{< /callout >}}

### Setting Value

Set the encrypted `ansible_password` value, into [`all.yaml`]({{< param variables.github.url >}}/blob/main/inventory/cluster/group_vars/all.yaml) configuration file.

### SSH Key

Generate the [SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent), which will be copied into each server node, while running the [Provisioning](../../playbooks/provisioning) playbook:

```shell
ssh-keygen -t ed25519 -C 'your_email@example.com'
```

{{< callout type="info" >}}
  The [Provisioning](../../playbooks/provisioning) playbook will look for the generated SSH key, into default `/Users/username/.ssh` location.
{{< /callout >}}

If you choose to use a different storage location, update the `cluster_vars.ssh.authorized_key` value into [`main.yaml`]({{< param variables.github.url >}}/blob/main/roles/cluster/defaults/main.yaml) configuration file:

```yaml
cluster_vars:
  ssh:
    authorized_key: /Users/username/Downloads/keys/id_ed25519.pub
```

{{% /steps %}}
