---
title: Ansible
prev: /tutorials/handbook
next: /tutorials/handbook/server
weight: 1
---

[Ansible](https://docs.ansible.com) is an open-source software application written in Python, automating the management of remote systems and controlling their desired state.

<!--more-->

## Vault

[Ansible Vault](https://docs.ansible.com/ansible/latest/vault_guide/vault.html) encrypts variables, in order to protect sensitive content such as passwords or keys, rather than leaving it visible as plaintext into configuration files.

{{< callout type="info" >}}
  Refer to the Ansible [documentation](https://docs.ansible.com/ansible/latest/vault_guide/vault_using_encrypted_content.html), for usage of encrypted variables and files.
{{< /callout >}}

This repository uses a global password for all encrypted settings, allowing the end-user to securely input the global password during the playbook execution, which will implicitly decrypt all encrypted settings with Ansible Vault.

### Encryption

Example of `ansible_password` variable encryption, with `ansible-vault` command:

```shell
ansible-vault encrypt_string 'this-Is-Som3-paSsw0rd' --name 'ansible_password'
```

Ansible Vault encrypted variable output:

```shell
New Vault password: my-Gl0bal-Passw0rd
Confirm New Vault password: my-Gl0bal-Passw0rd
Encryption successful
ansible_password: !vault |
          $ANSIBLE_VAULT;1.1;AES256
          32313062343462356565373964653464623266323538373864383063333232393833336163343436
          3631326537313236613737353037393564623230353936380a643161633533626236376630353864
          35323639343039386465363233303239386535376630656637346333643563613536366631373466
          3461636432363861610a336232313535333433643737636236376236313334656138336335616262
          36613833363662323261373266333565633430643639366435303061313039643637
```

{{< callout type="warning" >}}
  Use the above defined `my-Gl0bal-Passw0rd` global password example, for all encrypted settings, into your configuration files.
{{< /callout >}}

Insert the `ansible_password` encrypted output into [`all.yaml`](https://{{< param variables.repository >}}/blob/main/inventory/cluster/group_vars/all.yaml) configuration file, while respecting the output indentation.

### Decryption

{{< callout type="info" >}}
  The `@` symbol defined into `-e` (short definition for `--extra-vars`) option represents the `filename` root location.
{{< /callout >}}

Example of `ansible_password` variable decryption, with `ansible` command:

```shell
ansible localhost --ask-vault-pass -m debug \
  -a 'var=ansible_password' \
  -e '@inventory/cluster/group_vars/all.yaml'
```

Ansible Vault decrypted variable output:

```shell
Vault password: my-Gl0bal-Passw0rd
localhost | SUCCESS => {
    "ansible_password": "this-Is-Som3-paSsw0rd"
}
```

Example of `notify_url` variable decryption, with `ansible` command:

```shell
ansible localhost --ask-vault-pass -m debug \
  -a 'var=kured_vars.kubernetes.configuration.slack.notify_url' \
  -e '@roles/kured/defaults/main.yaml'
```

Ansible Vault decrypted variable output:

```shell
Vault password: my-Gl0bal-Passw0rd
localhost | SUCCESS => {
    "kured_vars.kubernetes.configuration.slack.notify_url": "slack://token"
}
```

### Playbook Usage

Example of playbook execution, using the Ansible Vault global password:

```shell
ansible-playbook --ask-vault-pass provisioning.yaml
```

Ansible Vault global password prompt:

```shell
Vault password: my-Gl0bal-Passw0rd
```
