# Prerequisites for developing the Infrastructure

1. Git
2. GitHub account and ssh key
3. GitHub Flow
4. Docker installed
5. Makecert with local cert authority
6. A valid `.env` file

## Useful but not required

* PgAdmin
* Local psql
* Local Redis client
* Postman
* VSCode / VSCodium

## Git

[Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Github Account and SSH key

[Create a GitHub account](https://github.com/settings/ssh/new)

[Create a new key](https://github.com/settings/ssh/new)

## GitHub Flow

[Install Instructions](https://docs.github.com/en/get-started/quickstart/github-flow)

## Docker

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


### Mac

[Official Mac Docket Install](https://docs.docker.com/desktop/install/mac-install/)

### Windows

[Official Windows Docker Install](https://docs.docker.com/desktop/install/windows-install/)

