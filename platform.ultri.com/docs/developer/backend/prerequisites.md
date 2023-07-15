# Prerequisites for installing the Infrastructure

## Git

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

## Docker

### Ubuntu 

Condensed from: 
https://docs.docker.com/engine/install/ubuntu/
and
https://docs.docker.com/engine/install/linux-postinstall/


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


### Windows

https://docs.docker.com/desktop/install/windows-install/

