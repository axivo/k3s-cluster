---
title: Configuration
prev: /wiki/guide
next: /wiki/guide/configuration/inventory
sidebar:
  open: true
---

The configuration guides present in this section allow you to configure the K3s cluster, matching your hardware and software requirements.

<!--more-->

{{< callout type="info" >}}
  Prior adjusting any settings, [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) the [`k3s-cluster`](https://{{< param variables.repository >}}) repository.
{{< /callout >}}

## OS Installation

Each cluster node must have Ubuntu Server LTS `{{< param variables.os.version >}}+` (64-bits) OS installed, which is a requirement for [Cilium](https://cilium.io). The required `apt` package dependencies changed also, compared to previous Ubuntu Server LTS release.

{{< callout type="info" >}}
  Read the [OS installation](/k3s-cluster/tutorials/handbook/server) tutorial, on a Raspberry Pi.
{{< /callout >}}

## Ansible Vault

All sensitive data stored in this public repository (passwords, emails, etc.) is safely encrypted, using [Ansible Vault](https://docs.ansible.com/ansible/latest/cli/ansible-vault.html).

{{< callout type="warning" >}}
  Use the **same global password** for various encrypted settings, in your configuration files. See an [example](/k3s-cluster/tutorials/handbook/ansible/#vault), to understand the logic behind.
{{< /callout >}}
