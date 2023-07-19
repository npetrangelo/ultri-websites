# Prerequisites

1. Git
2. GitHub account and ssh key
3. GitHub Flow
4. nvm or nvm-windows
5. Yarn
4. Docker installed
5. Mkcert with local cert authority
6. A valid `.env` file
7. Hostfile entries for *.example.com
8. Quasar CLI isntalled

## Useful but not required

* [PgAdmin](https://www.pgadmin.org/download/)
* Local psql
* Local Redis client
* [Postman](https://www.postman.com/downloads/)
* VSCode / VSCodium
  * With Vue Volar extension
* [Vue.js DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

## Git

[Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Github Account and SSH key

[Create a GitHub account](https://github.com/settings/ssh/new)

[Create a new key](https://github.com/settings/ssh/new)

## GitHub Flow

[Install Instructions](https://docs.github.com/en/get-started/quickstart/github-flow)

## Node Manger - nvm or nvm-windows

[Installation Instructions](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

## Yarn

```sh
npm install -g yarn
````

## Docker

### Mac

[Official Mac Docker Install](https://docs.docker.com/desktop/install/mac-install/)

### Windows

[Official Windows Docker Install](https://docs.docker.com/desktop/install/windows-install/)

### Ubuntu 

Condensed from: 
[Official Ubuntu Docker Install](https://docs.docker.com/engine/install/ubuntu/)
and
[Official Ubuntu Docker Post Install](https://docs.docker.com/engine/install/linux-postinstall/)


```sh
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

```sh
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
```

```sh
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

```sh
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```sh
sudo apt-get update
```

```sh
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Test it

```sh
sudo docker run hello-world
```

Make sure the Ubuntu user in Docker group

```sh
sudo groupadd docker
```

```sh
sudo usermod -aG docker $USER
```

```sh
newgrp docker
```

Test you can run docker as non-root user

```sh
docker run hello-world
```

## Install mkcert

SuperTokens will complain/fail if the local certs are missing or seem invalid.
We use `mkcert` to define a local trused CA that only the local browsers and OS can trust.

[Installation Instructions](https://github.com/FiloSottile/mkcert)

## Host file entries

Add these to `/etc/hosts/` on Linux / Mac.

```sh
127.0.0.1 example.com  www.example.com api. example.com
```

## Create an .env file

Copy the example env file in the root, to `.env`.
The `.env` file should not be committed to the repository.

```sh
cp example.env .env
```

### Windows /etc/hosts

For Windows add them to `C:\Windows\System32\Drivers\etc\hosts`
This may be a hidden file, and you will need to edit it as an administrator.

[View Hidden Files](https://answers.microsoft.com/en-us/windows/forum/all/i-dont-have-a-hosts-file/8c9f1152-25f1-4545-9e1f-acc028e9e018)

[Edit a file as Administrator](https://answers.microsoft.com/en-us/windows/forum/all/cannot-save-hosts-file-as-it-says-i-do-not-have/c3016440-8b68-4268-81d7-d9ff184a15eb)

## Install Quasar CLI

```npm i -g @quasar/cli```

