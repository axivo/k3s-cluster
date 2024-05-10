---
title: Guide
sidebar:
  open: true
---

The cluster inventory, user, role configuration settings and provisioning playbooks allow you to deploy the K3s cluster, matching your hardware and software requirements.

<!--more-->

{{< callout type="info" >}}
  Prior adjusting any settings, [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) the [`k3s-cluster`](https://{{< param variables.repository >}}) repository.
{{< /callout >}}

## Next

Dive right into the following sections:

{{< cards >}}
  {{< card icon="adjustments" link="configuration" title="Configuration" subtitle="Configure the cluster for deployment." >}}
  {{< card icon="folder" link="playbooks" title="Playbooks" subtitle="Configure the Ansible playbooks." >}}
{{< /cards >}}
