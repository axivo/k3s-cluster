---
title: Upgrade
prev: /wiki/guide/playbooks
---

The playbook allows the end-user to perform a cluster component upgrade, for example a specific Helm chart with a newly released version.

<!--more-->

{{< callout type="info" >}}
  Refer to the Ansible [tutorial](/k3s-cluster/tutorials/handbook/ansible), for usage of encrypted variables and files.
{{< /callout >}}

## Execution

Example of playbook execution, using the Ansible Vault global password:

```shell
ansible-playbook --ask-vault-pass --tags=helm upgrade.yaml
```

Ansible Vault global password prompt:

```shell
Vault password: my-Gl0bal-Passw0rd
```
