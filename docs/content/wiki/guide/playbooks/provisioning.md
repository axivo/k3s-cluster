---
title: Provisioning
prev: /wiki/guide/playbooks
---

The playbook allows the end-user to perform an initial cluster deployment, or a cluster re-deployment, after a performed [cluster reset](/k3s-cluster/wiki/guide/playbooks/reset).

<!--more-->

{{< callout type="info" >}}
  Refer to the Ansible [tutorial](/k3s-cluster/tutorials/handbook/ansible), for usage of encrypted variables and files.
{{< /callout >}}

## Execution

Example of playbook execution, using the Ansible Vault global password:

```shell
ansible-playbook --ask-vault-pass provisioning.yaml
```

Ansible Vault global password prompt:

```shell
Vault password: my-Gl0bal-Passw0rd
```

## Tags

The end-user can use Ansible tags, in order to re-deploy specific segments of playbook.

Example of re-deploying the `kubernetes` playbook segment:

```shell
ansible-playbook --ask-vault-pass --tags=kubernets,charts provisioning.yaml
```
