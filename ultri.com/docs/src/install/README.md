# Ultri Open Platform - Installation and Deployment

The only supported method of deploying the platform is using the provided docker compose files.

For all deployment options you only need to checkout the [ultri-open-platform](https://github.com/Ultri-Izzup/ultri-open-platform) repo and perform the rest of the ork within that directory.

```sh
git clone https://github.com/Ultri-Izzup/ultri-open-platform.git
cd ultri-open-platform
```

Copy the example environment file to`.env`

```sh
cp example.env .env
```

Edit the `.env` files to match your environment.

## Production

Run the base docker compose file, which provides the default set of production services. For production installations we recommend using services outside of docker for the data, and only using docker containers to process the data.

```sh
docker compose up
```

This will bring up the following systems connected to the external services defined in the `.env` file.

* Open Gateway 
* Authentic8
* Ultri API

It will expect configuration for the following to be defined in the `.env` file:

* Postgres 
* Redis
* SMTP
* SMS (optional)
* S3 Storage (optional)

### AWS Infrastructure Option

We provide a [CDK for creating the Ultri infrastructure](https://github.com/Ultri-Izzup/ultri-open-platform/tree/main/infrastructure/aws/ultri) in AWS. The CDK options can be modified to make better use of AWS resources as your site grows.

The CDK creates the following:

* A VPC with public and private subnets, but not NAT gateway.
* A Redis cluster
* A Postgres cluster
* An ec2 with the Ultri Open Platform docker compose project installed and running.

With the data stores deployed though some means with proper connection in the `.env` file 

## Standalone Server

A small production environment can be run entirely from Docker on a single machine with a minimum of 4GB ram available to the app.

The compute containers are stateless so they can be scaled horizontally, limited only by the amount of hardware you can provide.

The `standalone` option is suited for production environments running the data services in docker.

It *requires* an external SMTP service

```sh
docker compose -f docker-compose-standalone.yaml up
```

## Development Server

A simple `docker compose -f docker-compose-dev.yaml` will bring up a local dev environment with all the pieces included and running locally. The email flow even even works for development in a secure local sandbox.

