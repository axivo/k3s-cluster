---
title: Validation
prev: /wiki/guide/playbooks
---

The playbook allows the end-user to perform an initial cluster components validation, to be executed prior cluster provisioning.

<!--more-->

{{< callout type="info" >}}
  Refer to the Ansible [tutorial](/k3s-cluster/tutorials/handbook/ansible), for usage of encrypted variables and files.
{{< /callout >}}

## Execution

Example of playbook execution, using the Ansible Vault global password:

```shell
ansible-playbook --ask-vault-pass validation.yaml
```

Ansible Vault global password prompt:

```shell
Vault password: my-Gl0bal-Passw0rd
