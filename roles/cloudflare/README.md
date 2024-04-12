# Cloudflare

DNS related tasks.

## Setup

Set [API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/):

```shell
ansible-vault encrypt_string '<apitoken>' --name 'cloudflare_vars.api.token'
```
