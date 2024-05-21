---
title: Home
layout: hextra-home
---

{{< hextra/hero-container
  image="images/logo-services.svg"
  imageLink="https://github.com/axivo/k3s-cluster"
  imageTitle="Kubernetes Services"
>}}
{{< hextra/hero-badge link="https://github.com/axivo/k3s-cluster" >}}
  <div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
  <span>Contribute</span>
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

<div class="hx-mt-6 hx-mb-6">
{{< hextra/hero-headline >}}
  <span>
    <div class="hx-whitespace-nowrap">High Availability Cluster</div>
    Deployed with Ansible
  </span>
{{< /hextra/hero-headline >}}
</div>

<div class="hx-mb-12">
{{< hextra/hero-subtitle >}}
  <span>
    Documentation and tutorials to deploy, manage and monitor
    your Kubernetes cluster and related components, in style.
  </span>
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx-mb-6">
{{< hextra/hero-button text="Get Started" link="wiki" >}}
</div>
{{< /hextra/hero-container >}}

<div class="hx-mt-6 hx-mb-6">
{{< hextra/hero-section >}}
  Used Technologies
{{< /hextra/hero-section >}}
</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="K3s"
    subtitle="Certified Kubernetes distribution built for IoT and Edge computing, running on Ubuntu Server LTS."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="images/card-k3s.webp"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    link="https://k3s.io"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(221,210,59,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Cilium"
    subtitle="eBPF-based project, providing networking, security, and observability for Kubernetes clusters."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="images/card-cilium.webp"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    link="https://cilium.io"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Prometheus Stack"
    subtitle="Kubernetes cluster monitoring and Grafana dashboards, using Prometheus Operator."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="images/card-prometheus.webp"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    link="https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(142,53,74,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="ArgoCD"
    subtitle="Declarative, GitOps continuous delivery tool for Kubernetes, with a fully-loaded UI."
    link="https://argoproj.github.io/cd"
  >}}
  {{< hextra/feature-card
    title="CertManager"
    subtitle="Cloud native certificate management for Kubernetes, with production certificates provided by Cloudflare."
    link="https://cert-manager.io"
  >}}
  {{< hextra/feature-card
    title="ExternalDNS"
    subtitle="ExternalDNS makes Kubernetes resources discoverable via Cloudflare DNS."
    link="https://kubernetes-sigs.github.io/external-dns"
  >}}
  {{< hextra/feature-card
    title="HAProxy"
    subtitle="Reliable, high-performance TCP/HTTP load balancer and proxy, used for K3s control-planes."
    link="https://www.haproxy.org"
  >}}
  {{< hextra/feature-card
    title="Kured"
    subtitle="Kubernetes daemonset performing safe automatic node reboots, controlled by underlying OS."
    link="https://kured.dev"
  >}}
  {{< hextra/feature-card
    title="Longhorn"
    subtitle="Lightweight, reliable, and powerful distributed block storage system for Kubernetes."
    link="https://longhorn.io"
  >}}
{{< /hextra/feature-grid >}}
