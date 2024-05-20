---
title: Cloudflare
prev: /tutorials/handbook
next: /tutorials/handbook/kured
---

This repository uses [Cloudflare](https://www.cloudflare.com) combined with `external-dns`, to maintain the public DNS records and generate valid Let's Encrypt certificates.

<!--more-->

## API Token

Generate the domain [API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/), with following permissions:

{{< filetree/container >}}
  {{< filetree/folder name="AXIVO" >}}
    {{< filetree/folder name="noty.cc - Zone:Read, DNS:Edit" state="closed" >}}
    {{< /filetree/folder >}}
  {{< /filetree/folder >}}
{{< /filetree/container >}}

Encrypt the `token.value` with [`ansible-vault`](/k3s-cluster/tutorials/handbook/ansible/#vault) and insert it into 
[`main.yaml`](https://{{< param variables.repository >}}/blob/main/roles/cloudflare/defaults/main.yaml) defaults file.
