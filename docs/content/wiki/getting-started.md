---
title: Getting Started
---

All required local environment settings, installation commands and deployment instructions are performed from a MacOS based computer.

<!--more-->

## Network

Prior starting the cluster configuration, the end-user must determine if the intended [network](/k3s-cluster/tutorials/handbook/network) configuration can support **inbound load balancing**, with [external IP addresses](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address) assigned from a load balancer [IP pool](https://docs.cilium.io/en/stable/network/lb-ipam). Most retail routers do not offer this capability.

This guide uses the UniFi [UDM-SE](https://store.ui.com/us/en/collections/unifi-dream-machine/products/udm-se) cloud gateway for dedicated network management, combined with the UniFi [USW-Pro-24-POE](https://store.ui.com/us/en/collections/unifi-switching-pro-power-over-ethernet/products/usw-pro-24-poe) switch, powering the Raspberry Pi cluster nodes.

## Local Environment

Prior starting the cluster configuration, set the local environment for deployments.

{{< callout type="info" >}}
  [Homebrew](https://brew.sh) is used to install all deployment dependencies.
{{< /callout >}}

{{% steps %}}

### ansible

Install the `ansible` binary:

```shell
brew install ansible ansible-lint
```

### sshpass

Install the `sshpass` binary:

```shell
brew tap esolitos/ipa
brew install sshpass
```

### kubernetes.core

Upgrade the [`kubernetes.core`](https://github.com/ansible-collections/kubernetes.core/blob/main/docs/kubernetes.core.helm_module.rst) [collection](https://docs.ansible.com/ansible/latest/collections_guide/collections_installing.html):

```shell
ansible-galaxy collection install -U kubernetes.core
```

{{% /steps %}}

## Next

Dive right into the following section:

{{< cards >}}
  {{< card icon="adjustments" link="../guide" title="Guide" subtitle="Configure the cluster for deployments." >}}
{{< /cards >}}
