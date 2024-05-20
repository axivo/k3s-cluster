---
title: Reset
prev: /wiki/guide/playbooks
---

The playbook allows the end-user to perform a cluster reset, bringing the nodes to an initial pre-provisioning state.

<!--more-->

{{< callout type="info" >}}
  Refer to the Ansible [tutorial](/k3s-cluster/tutorials/handbook/ansible), for usage of encrypted variables and files.
{{< /callout >}}

## Execution

Example of playbook execution, using the Ansible Vault global password:

```shell
ansible-playbook --ask-vault-pass reset.yaml
```

Ansible Vault global password prompt:

```shell
Vault password: my-Gl0bal-Passw0rd
```

To faster re-deploy a cluster after reset, skip the removal of installed `apt` packages:

```shell
Remove installed apt packages? [Y/n] [n]:
```
