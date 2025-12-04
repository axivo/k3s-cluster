# cilium

![Version: 1.18.2](https://img.shields.io/badge/Version-1.18.2-informational?style=flat-square)

The role performs various tasks related to `cilium` [chart](https://github.com/cilium/cilium/tree/v1.18.2/install/kubernetes/cilium) deployment, reset and validation. Review the [documentation](https://axivo.com/k3s-cluster/wiki/guide/configuration/roles/cilium), for additional details.

## Role Dependencies

See the installed role dependencies listed below, defined into [main.yaml](./defaults/main.yaml) `release` collection.

| Repository | Name | Version |
|------------|------|---------|
| https://github.com/cilium/cilium-cli | cilium-cli | 0.18.6 |
| https://github.com/cilium/hubble | hubble | 1.18.0 |
| https://github.com/kubernetes-sigs/gateway-api | gateway-api | 1.4.1 |

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file. Advanced user role variables are defined into [facts.yaml](./tasks/facts.yaml) `cilium_map` collection.

> [!TIP]
> - Use [Renovate](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#renovate), to automate the release pull requests and keep dependencies up-to-date
> - Use [Robusta KRR](https://axivo.com/k3s-cluster/tutorials/handbook/tools/#robusta-krr), to optimize the cluster resources allocation

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| cilium_vars.kubernetes.agent.resources.limits.cpu | string | `nil` |  |
| cilium_vars.kubernetes.agent.resources.limits.memory | string | `"256Mi"` |  |
| cilium_vars.kubernetes.agent.resources.requests.cpu | string | `"10m"` |  |
| cilium_vars.kubernetes.agent.resources.requests.memory | string | `"256Mi"` |  |
| cilium_vars.kubernetes.bpf.clock_probe | bool | `true` |  |
| cilium_vars.kubernetes.bpf.datapath_mode | string | `"netkit"` |  |
| cilium_vars.kubernetes.bpf.external_access | bool | `false` |  |
| cilium_vars.kubernetes.bpf.masquerade | bool | `true` |  |
| cilium_vars.kubernetes.bpf.monitor.aggregation | string | `"maximum"` | Available options are `none`, `low`, `medium` and `maximum` |
| cilium_vars.kubernetes.bpf.monitor.interval | string | `"15s"` |  |
| cilium_vars.kubernetes.bpf.preallocate_maps | bool | `true` | If `true`, memory usage is increased and latency reduced |
| cilium_vars.kubernetes.bpf.tproxy | bool | `true` |  |
| cilium_vars.kubernetes.bpf.vlan_bypass_ids | list | `[1,4]` | `1` for Longhorn CIFS backup, `4` for Cilium IP pool |
| cilium_vars.kubernetes.cgroup.resources.limits.cpu | string | `nil` |  |
| cilium_vars.kubernetes.cgroup.resources.limits.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.cgroup.resources.requests.cpu | string | `"10m"` |  |
| cilium_vars.kubernetes.cgroup.resources.requests.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.client.rate_limit.burst | int | `100` |  |
| cilium_vars.kubernetes.client.rate_limit.qps | int | `50` |  |
| cilium_vars.kubernetes.cni.resources.limits.cpu | string | `nil` |  |
| cilium_vars.kubernetes.cni.resources.limits.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.cni.resources.requests.cpu | string | `"10m"` |  |
| cilium_vars.kubernetes.cni.resources.requests.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.dashboards.enabled | bool | `true` |  |
| cilium_vars.kubernetes.envoy.resources.limits.cpu | string | `nil` |  |
| cilium_vars.kubernetes.envoy.resources.limits.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.envoy.resources.requests.cpu | string | `"10m"` |  |
| cilium_vars.kubernetes.envoy.resources.requests.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.helm.chart.name | string | `"cilium"` |  |
| cilium_vars.kubernetes.helm.chart.version | string | `"v1.18.2"` |  |
| cilium_vars.kubernetes.helm.repository.name | string | `"cilium"` |  |
| cilium_vars.kubernetes.helm.repository.org | string | `"cilium"` |  |
| cilium_vars.kubernetes.helm.repository.url | string | `"https://helm.cilium.io"` |  |
| cilium_vars.kubernetes.hubble.metrics[0] | string | `"dns:query;ignoreAAAA"` |  |
| cilium_vars.kubernetes.hubble.metrics[1] | string | `"drop"` |  |
| cilium_vars.kubernetes.hubble.metrics[2] | string | `"flow"` |  |
| cilium_vars.kubernetes.hubble.metrics[3] | string | `"httpV2"` |  |
| cilium_vars.kubernetes.hubble.metrics[4] | string | `"icmp"` |  |
| cilium_vars.kubernetes.hubble.metrics[5] | string | `"port-distribution"` |  |
| cilium_vars.kubernetes.hubble.metrics[6] | string | `"tcp"` |  |
| cilium_vars.kubernetes.hubble.relay.enabled | bool | `true` | See [documentation](https://docs.cilium.io/en/stable/observability/hubble/setup/), for details |
| cilium_vars.kubernetes.hubble.relay.replicas | int | `1` |  |
| cilium_vars.kubernetes.hubble.relay.resources.limits.cpu | string | `nil` |  |
| cilium_vars.kubernetes.hubble.relay.resources.limits.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.hubble.relay.resources.requests.cpu | string | `"10m"` |  |
| cilium_vars.kubernetes.hubble.relay.resources.requests.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.hubble.relay.retry_timeout | string | `"10s"` |  |
| cilium_vars.kubernetes.hubble.tls.auto.method | string | `"certmanager"` | Available options are `certmanager` and `helm` |
| cilium_vars.kubernetes.hubble.ui.backend.resources.limits.cpu | string | `nil` |  |
| cilium_vars.kubernetes.hubble.ui.backend.resources.limits.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.hubble.ui.backend.resources.requests.cpu | string | `"10m"` |  |
| cilium_vars.kubernetes.hubble.ui.backend.resources.requests.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.hubble.ui.enabled | bool | `true` | See [documentation](https://docs.cilium.io/en/stable/observability/hubble/setup/), for details |
| cilium_vars.kubernetes.hubble.ui.frontend.resources.limits.cpu | string | `nil` |  |
| cilium_vars.kubernetes.hubble.ui.frontend.resources.limits.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.hubble.ui.frontend.resources.requests.cpu | string | `"10m"` |  |
| cilium_vars.kubernetes.hubble.ui.frontend.resources.requests.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.hubble.ui.gateway.service | string | `"hubble-ui"` |  |
| cilium_vars.kubernetes.hubble.ui.gateway.subdomain | string | `"hubble"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/externaldns/#front-ends), for details |
| cilium_vars.kubernetes.hubble.ui.replicas | int | `1` | Related to [cilium/cilium#33109](https://github.com/cilium/cilium/issues/33109) |
| cilium_vars.kubernetes.ingress_controller.loadbalancer.mode | string | `"shared"` | Available options are `dedicated` and `shared` |
| cilium_vars.kubernetes.ingress_controller.service.ip | string | `"192.168.4.20"` | Assign the `CiliumLoadBalancerIPPool` blocks start address |
| cilium_vars.kubernetes.ip_masq_agent.enabled | bool | `false` |  |
| cilium_vars.kubernetes.ip_masq_agent.non_masquerade_cidrs[0] | string | `"10.0.0.0/8"` |  |
| cilium_vars.kubernetes.ip_masq_agent.non_masquerade_cidrs[1] | string | `"192.168.0.0/16"` |  |
| cilium_vars.kubernetes.ipam.operator.cluster_pool | string | `"10.42.0.0/16"` |  |
| cilium_vars.kubernetes.kube_proxy.bind.address | string | `"0.0.0.0"` |  |
| cilium_vars.kubernetes.kube_proxy.bind.port | int | `10256` |  |
| cilium_vars.kubernetes.loadbalancer.algorithm | string | `"maglev"` |  |
| cilium_vars.kubernetes.loadbalancer.ip_pool.blocks.start | string | `"192.168.4.20"` | `CiliumLoadBalancerIPPool` blocks start address |
| cilium_vars.kubernetes.loadbalancer.ip_pool.blocks.stop | string | `"192.168.4.100"` | `CiliumLoadBalancerIPPool` blocks stop address |
| cilium_vars.kubernetes.loadbalancer.ip_pool.name | string | `"cilium-ip-pool"` |  |
| cilium_vars.kubernetes.loadbalancer.l2_announcement_policy.name | string | `"cilium-l2-announcement-policy"` |  |
| cilium_vars.kubernetes.loadbalancer.table_size | int | `16381` |  |
| cilium_vars.kubernetes.log_options.level | string | `"WARNING"` | Available options are `INFO`, `WARNING`, `ERROR` and `FATAL` |
| cilium_vars.kubernetes.namespace | string | `"kube-system"` |  |
| cilium_vars.kubernetes.operator.resources.limits.cpu | string | `nil` |  |
| cilium_vars.kubernetes.operator.resources.limits.memory | string | `"128Mi"` |  |
| cilium_vars.kubernetes.operator.resources.requests.cpu | string | `"10m"` |  |
| cilium_vars.kubernetes.operator.resources.requests.memory | string | `"128Mi"` |  |
| cilium_vars.release.cli.file | string | `"cilium-linux-arm64.tar.gz"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/server/#hardware), for details |
| cilium_vars.release.cli.repository.name | string | `"cilium-cli"` |  |
| cilium_vars.release.cli.repository.org | string | `"cilium"` |  |
| cilium_vars.release.cli.version | string | `"v0.18.6"` |  |
| cilium_vars.release.gateway_api.file | string | `"experimental-install.yaml"` | See [documentation](https://docs.cilium.io/en/stable/network/servicemesh/gateway-api/gateway-api/), for details |
| cilium_vars.release.gateway_api.repository.name | string | `"gateway-api"` |  |
| cilium_vars.release.gateway_api.repository.org | string | `"kubernetes-sigs"` |  |
| cilium_vars.release.gateway_api.version | string | `"v1.4.1"` |  |
| cilium_vars.release.hubble.file | string | `"hubble-linux-arm64.tar.gz"` | See [documentation](https://axivo.com/k3s-cluster/tutorials/handbook/server/#hardware), for details |
| cilium_vars.release.hubble.repository.name | string | `"hubble"` |  |
| cilium_vars.release.hubble.repository.org | string | `"cilium"` |  |
| cilium_vars.release.hubble.version | string | `"v1.18.0"` |  |
