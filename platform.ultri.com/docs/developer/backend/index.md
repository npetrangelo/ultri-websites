# Ultri Infrastructure Developer

## Prerequisites

You will need to have a few things configured locally before starting. You may already have them installed.

[View Prerequisites](/developer/backend/prerequisites/)

## Run Docker Stack

Once the prerequisites are installed all you have to do is spin up the dev docker stack.

```sh
docker compose -f dev-compose.yaml up
```

You'll see it pull down the required Docker images the first time you run it.

## Using the Infrastructure Docker Stack

The development Docker compose file spins up all the backend infrastructure. These are the same containers we use in production for the proxy and API services. In production the Postgres, Redis and SMTP services are handled by AWS managed services.

### Containers

* OpenResty/Nginx Proxy w/ SSL Termination
* Fastify JavaScript API
* Postgres
* Redis
* SuperTokens
* SMTP Server

#### Proxy - OpenResty / Nginx

* The proxy provides SSL termination in development.
* It will use Lua and connections to Redis and Postgres to provide security pre-filtering.
* Makecert is used to create a local CA for a trusted SSL cert.
* Once your local cert authority and certs are created you shouldn't have to touch this ever again.

#### Fastify 

* The Fastify JavaScript API is avilable at the root of the proxy: [https://localhost](https://localhost)
* In development hot module reloading is enabled. Changes made in `/api/src/` will automatically show up locally.
* The frontend app is pre-configured to connect to the proxy and API correctly.

#### Postgres 

* Postgres is available at `localhost:5432` using the usernames and password from your `.env` file.

#### Redis 

Not used yet

#### SuperTokens Core

This works with the Fastify API to provide paswordless auth.
Yu will bever have to work on this.

#### SMTP Server

We run SMTP4Dev on port 5000 to receive and and display the emails sent from the API.

[API Emails](http://localhost:5000)