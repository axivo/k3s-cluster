---
linkTitle: Documentation
title: Introduction
cascade:
  type: docs
---

The documentation is presented as a learning tool, allowing the end-user to understand all configuration and deployment aspects of a bare-metal based K3s cluster.

<!--more-->

## Cluster Hardware

The following hardware was used to deploy the cluster:

- 8 x Raspberry Pi 4B with 8GB RAM
- 8 x Samsung PM883 240GB SSD, connected to same USB port
- 8 x SLK Tech [Sata to USB cable](https://www.amazon.com/gp/product/B07S9CKV7X/)
- UniFi [UDM-SE](https://store.ui.com/us/en/collections/unifi-dream-machine/products/udm-se) cloud gateway, for dedicated network management
- UniFi [USW-Pro-24-POE](https://store.ui.com/us/en/collections/unifi-switching-pro-power-over-ethernet/products/usw-pro-24-poe) switch, powering the Raspberry Pi's

## Help

{{< callout emoji="❓" >}}
  Deployment problems? Feel free to [open an issue](https://github.com/axivo/k3s-cluster/issues). For general questions or feedback, please use the [discussions](https://github.com/axivo/k3s-cluster/discussions).
{{< /callout >}}

## Next

Dive right into the following section, to get started:

{{< cards >}}
  {{< card icon="adjustments" link="getting-started" title="Getting Started" subtitle="Set the local deployment environment." >}}
{{< /cards >}}
