# k3s-cluster

K3S high-availability cluster, deployed with Ansible.

![K3S: OpenLens](./images/k3s-openlens.png)

## Hardware

- 8 x Raspberry Pi 4B with 8GB RAM
- 8 x Samsung PM883 240GB SSD, connected to same USB port
- 8 x SLK Tech [Sata to USB cable](https://www.amazon.com/gp/product/B07S9CKV7X/)
- UniFi [UDM-SE](https://store.ui.com/us/en/collections/unifi-dream-machine/products/udm-se) cloud gateway, for dedicated network management
- UniFi [USW-Pro-24-POE](https://store.ui.com/us/en/collections/unifi-switching-pro-power-over-ethernet/products/usw-pro-24-poe) switch, powering the Raspberry Pi's

## Used Technologies

- [ArgoCD](https://argoproj.github.io/cd/)
- [Cilium](https://cilium.io)
- [Cloudflare](https://www.cloudflare.com) Let's Encrypt certificates deployed with [cert-manager](https://cert-manager.io)
- [External DNS](https://kubernetes-sigs.github.io/external-dns)
- [HAProxy](https://www.haproxy.org) load balancer for control-planes
- [K3S](https://k3s.io) production ready deployment
- [Kured](https://kured.dev)
- [Longhorn](https://longhorn.io)
- [Prometheus Stack](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack)
- [Renovate](https://github.com/renovatebot/renovate)
- [Ubuntu Server LTS](https://ubuntu.com/server) with unattended upgrades enabled

### TODO

- Automate the k3s cluster upgrades, chart upgrades are functional
- Update Renovate configuration, for automated version upgrades
- Finalize documentation

## Wiki

Visit the [Wiki](../../wiki), for detailed configuration instructions.
