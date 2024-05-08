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

This repository uses a global password for all encrypted settings. This approach allows the end-user to securely input the global password during the playbook execution, which will implicitly decrypt all encrypted settings with Ansible Vault.

Example of `setting_value` variable encryption, with `ansible-vault`:

```shell
ansible-vault encrypt_string 'this-Is-Som3-paSsw0rd' --name 'setting_value'
```

Ansible Vault global password prompt:

```shell
New Vault password: my-Gl0bal-Passw0rd
Confirm New Vault password: my-Gl0bal-Passw0rd
```

Ansible Vault encrypted variable output:

```shell
Encryption successful
setting_value: !vault |
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

Insert the `setting_value` encrypted output into configuration file, while respecting the output indentation.

### Playbook Usage

Example of running a playbook, using the Ansible Vault global password:

```shell
ansible-playbook --ask-vault-pass provisioning.yaml
```

Ansible Vault global password prompt:

```shell
Vault password: my-Gl0bal-Passw0rd
```
