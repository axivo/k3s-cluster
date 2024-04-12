# Cluster

Install k3s cluster dependencies and optimize Ubuntu OS.

## Provisioning

```shell
ansible-playbook --ask-vault-pass --tags cluster provisioning.yaml
```

## Troubleshooting

Analyze services:

```shell
systemd-analyze blame
```

List package reversed dependencies:

```shell
apt rdepends --installed --recurse git
```

List service dependencies:

```shell
systemctl list-dependencies snapd
systemctl list-dependencies --reverse snapd.socket
```

## Mail

- Apple app-specific [password setup](https://support.apple.com/en-us/102654)
- `postfix` configuration: `/etc/postfix/main.cf`
- `debconf` database: `/var/cache/debconf/config.dat`
- `postfix` `dpkg` confguration: `/var/lib/dpkg/info/postfix.config`

Set iCloud user password:

```shell
ansible-vault encrypt_string '<yourpassword>' --name 'cluster_vars.mail.user.password'
```

Show `debconf` configuration settings:

```shell
debconf-show postfix
```

Show `postfix` default configuration setting:

```shell
postconf -d smtp_sasl_auth_enable
```

Reconfigure `postfix`:

```shell
dpkg-reconfigure postfix
```

Uninstall `postfix`:

```shell
apt remove --purge -y bsd-mailx postfix
apt autoremove -y
apt clean
rm -f /etc/aliases /etc/aliases.db /etc/mailname
```
