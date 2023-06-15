# Ultri Platform Tech Stack

The tech stack was chosen to prevent any cloud vendor lock in and provide easy entry for developers.

* Quasar
* Vue3
* Supertokens
* Gateway
* Fastify
* Postgres
* Redis

## Production

ALB -> ASG -> EC2 -> Docker -> Gateway -> API

Aurora Postgres Serverless

ElastiCache Redis

## Local Development

### /app

* Quasar
* Vue3

### Dockerized

* Supertokens
* Gateway
* Fastify w/ HMR
* Postgres
* Redis