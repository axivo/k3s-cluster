The role performs various tasks related to VictoriaMetrics
[chart](https://github.com/VictoriaMetrics/helm-charts/tree/master/charts/victoria-metrics-k8s-stack) deployment, reset and validation.

## Role Tasks

See the related role tasks, listed below.

- Ansible facts, see [facts.yaml](./tasks/facts.yaml)
- Main role related tasks, see [main.yaml](./tasks/main.yaml)
- Reset related tasks, see [reset.yaml](./tasks/reset.yaml)
- Validation related tasks, see [validation.yaml](./tasks/validation.yaml)

## Role Variables

See the related role variables listed below, defined into [main.yaml](./defaults/main.yaml) defaults file.

<table>
	<thead>
		<th>Key</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</thead>
	<tbody>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.config.route.group_interval</td>
			<td>string</td>
			<td><pre lang="json">
"5m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.config.route.group_wait</td>
			<td>string</td>
			<td><pre lang="json">
"30s"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.config.route.repeat_interval</td>
			<td>string</td>
			<td><pre lang="json">
"12h"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.config_reloader.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.config_reloader.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.config_reloader.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.config_reloader.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.infrastructure.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
false
</pre>
</td>
			<td>If disabled, a random IP address will be assigned</td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.infrastructure.loadbalancer.ip</td>
			<td>string</td>
			<td><pre lang="json">
"192.168.4.30"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.ingress.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
true
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.ingress.subdomain</td>
			<td>string</td>
			<td><pre lang="json">
"alertmanager"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.log_level</td>
			<td>string</td>
			<td><pre lang="json">
"WARN"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.replicas</td>
			<td>int</td>
			<td><pre lang="json">
2
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.storage.access_modes[0]</td>
			<td>string</td>
			<td><pre lang="json">
"ReadWriteOnce"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.storage.class</td>
			<td>string</td>
			<td><pre lang="json">
"longhorn"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.storage.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
false
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.alertmanager.storage.size</td>
			<td>string</td>
			<td><pre lang="json">
"5Gi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.default_dashboards.timezone</td>
			<td>string</td>
			<td><pre lang="json">
"utc"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.ingress.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
true
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.ingress.subdomain</td>
			<td>string</td>
			<td><pre lang="json">
"grafana"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.log_level</td>
			<td>string</td>
			<td><pre lang="json">
"WARN"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.sidecar.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.sidecar.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.sidecar.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.sidecar.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.user.name</td>
			<td>string</td>
			<td><pre lang="">
Set value into <a href="../../inventory/cluster/group_vars/all.yaml">all.yaml</a> variables
</pre>
</td>
			<td>User name used to access Grafana UI</td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.grafana.user.password</td>
			<td>string</td>
			<td><pre lang="">
Set value into <a href="../../inventory/cluster/group_vars/all.yaml">all.yaml</a> variables
</pre>
</td>
			<td>User password used to access Grafana UI</td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.chart.alias</td>
			<td>string</td>
			<td><pre lang="json">
"vmks"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.chart.name</td>
			<td>string</td>
			<td><pre lang="json">
"victoria-metrics-k8s-stack"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.chart.version</td>
			<td>string</td>
			<td><pre lang="json">
"v0.28.4"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.repository.grafana.name</td>
			<td>string</td>
			<td><pre lang="json">
"helm-charts"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.repository.grafana.org</td>
			<td>string</td>
			<td><pre lang="json">
"grafana"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.repository.grafana.url</td>
			<td>string</td>
			<td><pre lang="json">
"https://grafana.github.io"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.repository.prometheus.name</td>
			<td>string</td>
			<td><pre lang="json">
"helm-charts"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.repository.prometheus.org</td>
			<td>string</td>
			<td><pre lang="json">
"prometheus-community"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.repository.prometheus.url</td>
			<td>string</td>
			<td><pre lang="json">
"https://prometheus-community.github.io"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.repository.victoriametrics.name</td>
			<td>string</td>
			<td><pre lang="json">
"helm-charts"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.repository.victoriametrics.org</td>
			<td>string</td>
			<td><pre lang="json">
"VictoriaMetrics"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.helm.repository.victoriametrics.url</td>
			<td>string</td>
			<td><pre lang="json">
"https://victoriametrics.github.io"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.kube_state_metrics.replicas</td>
			<td>int</td>
			<td><pre lang="json">
1
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.kube_state_metrics.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.kube_state_metrics.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.kube_state_metrics.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.kube_state_metrics.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.namespace</td>
			<td>string</td>
			<td><pre lang="json">
"kube-system"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.prometheus_node_exporter.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.prometheus_node_exporter.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.prometheus_node_exporter.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.prometheus_node_exporter.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.victoria_metrics_operator.log_level</td>
			<td>string</td>
			<td><pre lang="json">
"error"
</pre>
</td>
			<td>Available options are "info" or "error"</td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.victoria_metrics_operator.replicas</td>
			<td>int</td>
			<td><pre lang="json">
2
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.victoria_metrics_operator.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.victoria_metrics_operator.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.victoria_metrics_operator.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.victoria_metrics_operator.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.config_reloader.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.config_reloader.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.config_reloader.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.config_reloader.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.ingress.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
true
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.ingress.subdomain</td>
			<td>string</td>
			<td><pre lang="json">
"agent"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.log_level</td>
			<td>string</td>
			<td><pre lang="json">
"WARN"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.replicas</td>
			<td>int</td>
			<td><pre lang="json">
2
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"512Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"512Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.storage.access_modes[0]</td>
			<td>string</td>
			<td><pre lang="json">
"ReadWriteOnce"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.storage.class</td>
			<td>string</td>
			<td><pre lang="json">
"longhorn"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.storage.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
false
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmagent.storage.size</td>
			<td>string</td>
			<td><pre lang="json">
"5Gi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.config_reloader.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.config_reloader.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.config_reloader.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.config_reloader.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.ingress.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
true
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.ingress.subdomain</td>
			<td>string</td>
			<td><pre lang="json">
"alert"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.log_level</td>
			<td>string</td>
			<td><pre lang="json">
"WARN"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.replicas</td>
			<td>int</td>
			<td><pre lang="json">
2
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmalert.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"128Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
true
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.replication_factor</td>
			<td>int</td>
			<td><pre lang="json">
2
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.retention_period</td>
			<td>string</td>
			<td><pre lang="json">
"72h"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.hpa.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
true
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.hpa.max_replicas</td>
			<td>int</td>
			<td><pre lang="json">
4
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.hpa.min_replicas</td>
			<td>int</td>
			<td><pre lang="json">
2
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.hpa.resource.name</td>
			<td>string</td>
			<td><pre lang="json">
"memory"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.hpa.resource.target.utilization</td>
			<td>int</td>
			<td><pre lang="json">
80
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.ingress.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
false
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.ingress.subdomain</td>
			<td>string</td>
			<td><pre lang="json">
"insert"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.log_level</td>
			<td>string</td>
			<td><pre lang="json">
"WARN"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"512Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vminsert.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"512Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.hpa.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
true
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.hpa.max_replicas</td>
			<td>int</td>
			<td><pre lang="json">
4
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.hpa.min_replicas</td>
			<td>int</td>
			<td><pre lang="json">
2
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.hpa.resource.name</td>
			<td>string</td>
			<td><pre lang="json">
"memory"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.hpa.resource.target.utilization</td>
			<td>int</td>
			<td><pre lang="json">
80
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.ingress.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
true
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.ingress.subdomain</td>
			<td>string</td>
			<td><pre lang="json">
"metrics"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.log_level</td>
			<td>string</td>
			<td><pre lang="json">
"WARN"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"512Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"512Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.storage.access_modes[0]</td>
			<td>string</td>
			<td><pre lang="json">
"ReadWriteOnce"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.storage.class</td>
			<td>string</td>
			<td><pre lang="json">
"longhorn"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.storage.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
false
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmselect.storage.size</td>
			<td>string</td>
			<td><pre lang="json">
"5Gi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.ingress.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
false
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.ingress.subdomain</td>
			<td>string</td>
			<td><pre lang="json">
"storage"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.log_level</td>
			<td>string</td>
			<td><pre lang="json">
"WARN"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.replicas</td>
			<td>int</td>
			<td><pre lang="json">
2
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.resources.limits.cpu</td>
			<td>string</td>
			<td><pre lang="json">
null
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.resources.limits.memory</td>
			<td>string</td>
			<td><pre lang="json">
"2560Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.resources.requests.cpu</td>
			<td>string</td>
			<td><pre lang="json">
"10m"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.resources.requests.memory</td>
			<td>string</td>
			<td><pre lang="json">
"2560Mi"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.storage.access_modes[0]</td>
			<td>string</td>
			<td><pre lang="json">
"ReadWriteOnce"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.storage.class</td>
			<td>string</td>
			<td><pre lang="json">
"longhorn"
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.storage.enabled</td>
			<td>bool</td>
			<td><pre lang="json">
false
</pre>
</td>
			<td></td>
		</tr>
		<tr>
			<td>victoriametrics_vars.kubernetes.vmcluster.vmstorage.storage.size</td>
			<td>string</td>
			<td><pre lang="json">
"20Gi"
</pre>
</td>
			<td></td>
		</tr>
	</tbody>
</table>

