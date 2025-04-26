# AXIVO K3s Cluster

<a href="https://axivo.com/k3s-cluster">
  <img align="right" width="250" height="250" style="margin: 0 0 0 10px;" src="https://raw.githubusercontent.com/axivo/k3s-cluster/main/docs/images/logo-services.svg" alt="AXIVO K3s high-availability cluster, deployed with Ansible" />
<a/>

[![Ubuntu](https://img.shields.io/badge/Ubuntu-LTS-orange?style=flat&logo=ubuntu&logoColor=white)](https://ubuntu.com/)
[![Helm](https://img.shields.io/badge/Helm-v3-0F1689?style=flat&logo=helm&logoColor=white)](https://helm.sh)
[![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=flat&logo=kubernetes&logoColor=white)](https://kubernetes.io)
[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg?style=flat&logo=opensourceinitiative&logoColor=white)](https://github.com/axivo/k3s-cluster/blob/main/LICENSE)

### Introduction

This project provides a comprehensive framework for deploying and managing production-ready Kubernetes clusters on bare-metal and virtual machines. It leverages Ansible automation to create resilient, fully automated K3s environments with minimal configuration effort.

The automation is built around a collection of specialized Ansible roles that handle every aspect of the cluster lifecycle - from initial deployment and configuration to ongoing maintenance and upgrades. Each role is designed with flexibility in mind, allowing for customization while enforcing operational best practices.

### Key Features

- **Core Infrastructure**: Fully automated K3s installation on Ubuntu LTS with embedded `etcd` for high availability and HAProxy with Keepalived for Kubernetes API server load balancing
- **Advanced Networking**: Cilium CNI for eBPF-based networking, replacing `kube-proxy` with optimized service load balancing and Gateway API for ingress
- **DNS Management**: CoreDNS for internal cluster DNS resolution and External-DNS for automatic external DNS record synchronization
- **Package Management**: Helm for simplified application deployment and management
- **Security**: TLS certificate management via `cert-manager` with automatic renewal and integration with external DNS providers
- **Storage**: Distributed block storage with Longhorn providing volume replication and backup capabilities
- **Observability**: Complete monitoring stack with Metrics Server for core resource metrics, VictoriaMetrics for advanced metrics collection, AlertManager for alert handling and routing, VictoriaLogs for centralized logging, and Grafana for visualization
- **GitOps**: ArgoCD for declarative application deployment following GitOps principles
- **Maintenance**: Coordinated node updates with Kured for minimizing disruption during system maintenance

This cluster implementation is designed for both `arm64` and `amd64` architectures, with optimizations for Raspberry Pi and regular server hardware.

### Documentation

Visit the [Wiki](https://axivo.com/k3s-cluster) (powered by [Hextra](https://github.com/imfing/hextra)), for detailed configuration instructions.
