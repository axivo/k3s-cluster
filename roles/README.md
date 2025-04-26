# Roles

This directory contains all the Ansible roles used for provisioning and managing the K3s Kubernetes cluster. Each role has a specific purpose in the overall architecture. This document provides details about role functionality to enable accurate understanding of the cluster provisioning system. Visit the [Wiki](https://axivo.com/k3s-cluster/wiki/guide/configuration/roles), for detailed configuration instructions.

## Core Infrastructure Roles

### `cluster`

- **Purpose**: Manages the base system configuration and hardware optimization
- **Key Functions**:
  - Hardware validation for Raspberry Pi systems (validates hardware_product fact)
  - OS optimization (disabling unnecessary services: bluetooth, wifi, cloud-init, snapd)
  - Storage optimization with fstrim for SSDs and USB device trim configuration
  - Postfix mail system configuration for notifications with iCloud SMTP relay
  - SSH key deployment and user configuration
  - Kernel module loading (br_netfilter, overlay) for Kubernetes networking
  - Disabling firewall (ufw) service
  - Setting noatime mount options in fstab for better performance
  - Setting hostname and hosts file configuration
  - Configuring unattended upgrades with email notifications

### `k3s`

- **Purpose**: Handles the core Kubernetes installation and configuration
- **Key Functions**:
  - Installing and configuring K3s binary
  - Setting up server nodes (control plane) and agent nodes (workers)
  - Configuring high availability with embedded etcd and cluster-init on first server
  - Implementing HAProxy + Keepalived load balancer for the API server (tasks/loadbalancer.yaml)
  - Setting up node taints and labels (including control plane taints)
  - Disabling default components (coredns, local-storage, servicelb, traefik)
  - Disabling kube-proxy, cloud-controller and network policy in favor of Cilium
  - Configuring flannel-backend to 'none' for Cilium compatibility
  - Customizing kubelet arguments with specific resource configurations
  - Managing cluster token and TLS certificates with tls-san configuration
  - Creating and managing systemd service files
  - Setting up the Kubernetes API endpoint
  - Configuring the kubeconfig file for kubectl access

### `helm`

- **Purpose**: Provides Helm package management for Kubernetes
- **Key Functions**:
  - Installing and configuring Helm CLI with specific version control
  - Adding Helm GPG keys and repository configuration for secure installation
  - Setting up environment variables for Helm operation
  - Installing required packages (apt-transport-https, python3-kubernetes)
  - Setting up multiple Helm repositories for different components
  - Installing Helm plugins (helm-diff for comparing releases)
  - Creating a systemd timer service for Helm cache updates
  - Implementing automated Helm cache refresh
  - Handling architecture-specific installations (aarch64/ARM64)
  - Validating Helm installation and configuration

## Networking Roles

### `cilium`

- **Purpose**: Implements advanced container networking
- **Key Functions**:
  - Replacing K3s default CNI (Flannel) and kube-proxy with Cilium
  - Installing cilium and hubble CLI tools for management
  - Configuring eBPF-based networking with specific optimizations
  - Setting up service load balancing with DSR (Direct Server Return) mode
  - Implementing Gateway API for ingress (including deployment of Gateway CRDs)
  - Configuring Hubble for network observability and UI access
  - Creating network policies for pod isolation
  - Setting up L2 announcements (CiliumL2AnnouncementPolicy) for LoadBalancer services
  - Configuring LoadBalancer IP pools (CiliumLoadBalancerIPPool)
  - Managing TLS certificates for Hubble Relay
  - Handling upgrade and migration scenarios
  - Creating Gateways and HTTPRoutes for Hubble UI
  - Setting appropriate resource limits and requests
  - Configuring proper tolerations for DaemonSet components

### `coredns`

- **Purpose**: Provides DNS services for the cluster
- **Key Functions**:
  - Replacing default K3s CoreDNS with a customized deployment
  - Configuring DNS resolution for cluster services and pods
  - Setting up horizontal pod autoscaling (HPA) based on memory utilization
  - Configuring resource limits and requests
  - Managing CoreDNS Corefile configuration
  - Setting up cluster domain name resolution
  - Configuring pod DNS policy
  - Supporting either legacy (kube-dns) or modern deployment modes
  - Configuring proper replica counts based on cluster size
  - Setting up proper health checks and readiness probes
  - Managing priority class for DNS services
  - Applying proper node affinity and tolerations

### `external-dns`

- **Purpose**: Integrates Kubernetes services with external DNS providers
- **Key Functions**:
  - Cloudflare DNS integration with secure API token configuration
  - Automatic DNS record management for services, ingresses, and gateways
  - Creating secrets for storing Cloudflare API credentials
  - TLS certificate DNS validation support for cert-manager
  - Configuration of DNS zones and records based on annotations
  - Setting up ClusterIssuer for ACME certificate issuance
  - Implementing a 'sync' policy for keeping DNS records in sync
  - Configuring logging level and verbosity
  - Setting appropriate resource limits and requests
  - Supporting different DNS record types (A, CNAME, TXT)
  - Managing DNS record TTL settings
  - Configuring service account and RBAC permissions
  - Handling Cloudflare-specific settings like proxying configuration

## Security Roles

### `cert-manager`

- **Purpose**: Manages TLS certificates for the cluster
- **Key Functions**:
  - Installing and configuring cert-manager components (controller, webhook, cainjector)
  - Creating self-signed ClusterIssuer for certificate generation
  - Installing cmctl CLI tool for certificate management
  - Setting up certificate resources and requests
  - Automating TLS certificate lifecycle (issuance, renewal, revocation)
  - Integrating with external DNS for DNS-01 challenge validation
  - Configuring proper replica counts for high availability
  - Setting webhook configurations and validations
  - Managing CRDs (CustomResourceDefinitions) for certificate resources
  - Configuring appropriate resource limits and requests
  - Setting up proper leader election for HA deployments
  - Creating kubectl plugin symlink (kubectl-cert_manager)
  - Configuring logging levels for components

## Storage Role

### `longhorn`

- **Purpose**: Provides distributed block storage
- **Key Functions**:
  - Installing and configuring Longhorn distributed storage system
  - Installing longhornctl CLI tool for management
  - Setting up volume replicas (2 replicas by default) for data redundancy
  - Configuring backup to CIFS targets (network attached storage)
  - Creating backup credentials secret for authentication
  - Managing default Longhorn StorageClass for PVCs
  - Setting up the Longhorn admin UI with Gateway API or Ingress
  - Configuring HTTPRoutes for UI access
  - Setting data locality options (best-effort) for performance
  - Configuring volume auto-balance for even distribution
  - Setting node drain policy for proper evacuation
  - Configuring pod deletion policy for node failures
  - Disabling usage metrics collection
  - Setting concurrent engine upgrade limits
  - Managing resource limits and requests
  - Configuring log levels (Warn)

## Application Management Roles

### `argo-cd`

- **Purpose**: Implements GitOps for application deployment
- **Key Functions**:
  - Installing and configuring ArgoCD with specific version control
  - Installing argocd CLI tool for management
  - Setting up RBAC with specific user permissions
  - Configuring admin and user authentication with password management
  - Setting up Redis (HA configuration when multiple agent nodes exist)
  - Exposing the UI through Gateway API and HTTPRoutes
  - Creating secure and insecure routes for access
  - Managing application controller configuration
  - Configuring repo server with autoscaling capabilities
  - Setting up applicationset controller
  - Configuring dex for authentication (optional)
  - Creating service accounts and role bindings
  - Setting resource limits and requests for components
  - Implementing PodDisruptionBudgets for availability
  - Setting up proper health checks and readiness probes
  - Configuring metrics collection and ServiceMonitors
  - Setting up proper node affinity and anti-affinity rules
  - Supporting TLS certificates through cert-manager

### `kured`

- **Purpose**: Manages coordinated node reboots for updates
- **Key Functions**:
  - Installing and configuring Kured (KUbernetes REboot Daemon)
  - Setting specific maintenance windows (04:00-08:00 UTC by default)
  - Configuring Slack notifications for reboot events
  - Managing node draining and cordoning before reboots
  - Setting reboot concurrency (1 node at a time by default)
  - Configuring reboot delay settings (60s)
  - Coordinating updates across the cluster for minimal disruption
  - Setting up polling interval (15m)
  - Managing lock configuration to prevent concurrent reboots
  - Configuring proper RBAC permissions for node management
  - Setting resource limits and requests
  - Handling unattended upgrades coordination
  - Supporting notification hooks for monitoring systems
  - Configuring proper DaemonSet settings for deployment

## Observability Roles

### `metrics-server`

- **Purpose**: Provides resource metrics for the Kubernetes API
- **Key Functions**:
  - Installing and configuring Metrics Server (replacing K3s default)
  - Setting up TLS with cert-manager integration
  - Configuring metrics collection intervals
  - Setting resource requests and limits
  - Configuring kubelet certificate authentication
  - Setting up proper replica count (1 by default)
  - Configuring metrics resolution and scrape interval
  - Setting server arguments for verbosity level
  - Implementing proper RBAC for metrics access
  - Supporting metrics API endpoints for HPA and kubectl top
  - Configuring proper service account
  - Setting up proper health checks and readiness probes
  - Supporting different TLS configuration types (cert-manager, helm, metrics-server)
  - Managing pod anti-affinity for HA deployments

### `victoria-logs`

- **Purpose**: Implements centralized logging
- **Key Functions**:
  - Installing and configuring VictoriaLogs for centralized log storage
  - Setting up Vector agents as DaemonSet for log collection from all nodes
  - Configuring log retention period (7 days by default)
  - Setting up persistent storage for logs with Longhorn (5Gi)
  - Exposing the logs UI through Gateway API and HTTPRoutes
  - Configuring log level for components (WARN by default)
  - Setting resource limits and requests for server and agents
  - Implementing autoscaling for Vector components
  - Configuring proper tolerations for node components
  - Setting storage class and access modes for persistence
  - Managing log parsing and transformation rules
  - Configuring proper service accounts and RBAC
  - Setting up ingress configuration for UI access
  - Implementing proper replica count (1 for server by default)

### `victoria-metrics`

- **Purpose**: Provides metrics collection and monitoring
- **Key Functions**:
  - Installing and configuring VictoriaMetrics for metrics storage
  - Supporting both single-node (vmsingle) and cluster (vmcluster) deployments
  - Setting up Grafana for dashboards with authentication
  - Installing Prometheus CRDs as dependencies
  - Configuring AlertManager for alerting with routing and grouping
  - Setting up ServiceMonitors for metrics collection from components
  - Implementing persistent storage for metrics with Longhorn (50Gi)
  - Exposing multiple UIs through Gateway API (Grafana, AlertManager, vmagent, vmalert)
  - Configuring proper retention periods (72h by default)
  - Setting up Prometheus node exporter for host metrics
  - Configuring kube-state-metrics for Kubernetes state
  - Setting up default dashboards with timezone configuration
  - Managing Grafana user credentials
  - Setting resource limits and requests for all components
  - Configuring proper RBAC for metrics collection
  - Setting up sidecars for dashboard discovery
  - Managing replicas and high-availability configurations
  - Setting log levels for all components (WARN by default)

## Role Structure

Each role typically follows this structure:

- `defaults/main.yaml`: Default variables with specific role-prefixed structure (e.g., `<role>_vars`)
- `tasks/main.yaml`: Main tasks entry point with role validation and provisioning logic
- `tasks/validation.yaml`: Validation checks to ensure prerequisites are met
- `tasks/facts.yaml`: Fact gathering for role-specific data
- `templates/`: Jinja2 templates for generating configuration files (values.yaml, etc.)
- `handlers/`: Handlers for service management and restarts
- `tasks/postinstall.yaml`: Post-installation tasks run after the main deployment
- `tasks/upgrade.yaml`: Upgrade procedures for version updates
- `tasks/reset.yaml`: Cleanup and reset procedures for removing components
- `Chart.yaml`: Info for roles that deploy applications
- `README.md`: Documentation for the role

## Provisioning Workflow

The roles are applied in this general order:

1. `cluster`: Base system setup
2. `k3s`: Kubernetes installation
3. `helm`: Package manager setup
4. Networking: `cilium` → `coredns` → `external-dns`
5. Security: `cert-manager`
6. Storage: `longhorn`
7. Observability: `metrics-server` → `victoria-logs` → `victoria-metrics`
8. Application Management: `argo-cd` → `kured`

## Configuration Patterns

The roles follow these common patterns:

- Variables defined in `defaults/main.yaml` with specific structure using `<role>_vars` namespace
- Facts and computed values in `<role>_map` and `<role>_project` variables
- Templates for generating role `values.yaml` and Kubernetes manifests
- Run-once tasks with `run_once: true` for cluster-wide operations (usually on first server)
- Conditional execution based on node types (`when: inventory_hostname in k3s_map.server.hosts`)
- Dependencies between roles indicated with imports or includes
- Validation checks before installation with `any_errors_fatal: true`
- Idempotent operations with proper change detection and status checking
- Retry logic for network operations with `delay`, `retries`, and `until` parameters
- Handlers for service management using `notify` directive
- Secret management with no_log: true for sensitive operations
- Proper error handling with informative failure messages
- Wait conditions for ensuring services are ready
- Use of Helm for package management with specific chart versions
- Kubernetes manifest application using k8s module
- Templating with complex Jinja2 conditionals and filters
