# Project Instructions

Ansible framework for deploying and managing production-ready K3s clusters on bare-metal and virtual machines. Built around specialized Ansible roles that handle every aspect of the cluster lifecycle.

- `/inventory` — Ansible inventory and host configuration
- `/roles` — Ansible roles
- `/provisioning.yaml` — Main playbook for cluster deployment
- `/upgrade.yaml` — Cluster upgrade playbook
- `/validation.yaml` — Post-deployment validation playbook
- `/reset.yaml` — Cluster teardown playbook

Each role has `defaults/main.yaml` for variables, `tasks/` for Ansible tasks, and `templates/values.j2` for Helm values — except `cluster`, `helm`, and `k3s` which have no Helm values template.

- `argo-cd` — GitOps CD, has redis-ha subchart
- `cert-manager` — TLS certificates via ACME/Let's Encrypt
- `cilium` — CNI, network policies, Gateway API, Hubble
- `cluster` — Ubuntu OS, firewall, users (no Helm chart)
- `coredns` — Cluster DNS
- `external-dns` — Automatic DNS records
- `helm` — Helm and plugins (no Helm chart)
- `k3s` — K3s server/agent, load balancer (no Helm chart)
- `kured` — Automated node reboot daemon
- `longhorn` — Distributed block storage
- `metrics-server` — Resource metrics for HPA/VPA
- `victoria-logs` — Log aggregation, has vector subchart
- `victoria-metrics` — Metrics/alerting stack, has operator/grafana/kube-state-metrics/prometheus-node-exporter subcharts

## Collaborator

- **Name:** Floren Munteanu
- **Work:** Engineering

### Personal Preferences

I’m a site reliability engineer specialized in:

- Advanced GitHub actions based on JS code
- Helm charts
- IaC for Kubernetes clusters
