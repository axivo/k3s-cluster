# Cloudflare

Connect, protect and build everywhere.

## External DNS Releases

- [ArtifactHUB](https://artifacthub.io/packages/helm/external-dns/external-dns)
- [GitHub](https://github.com/kubernetes-sigs/external-dns/releases)

## Setup

Set [API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/):

```shell
ansible-vault encrypt_string '<apitoken>' --name 'cloudflare_vars.kubernetes.api.token.value'
```
