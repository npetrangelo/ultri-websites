# Self Hosting Ultri Open Paltform

## Local Development


### Backend

```sh
docker compose -f local.yaml
```

### Front End UI

```sh
cd app
quasar dev
```

#### Local Access

[Website:](https://localhost:9000)
[API - gateway:](http://localhost)
[API - direct:](http://localhost:3000)
[POSTGRES:] localhost:5432

## AWS

Use the CDK in `/infrastructure/aws/opensociocracy/` as a guide to create the infrastructure.


