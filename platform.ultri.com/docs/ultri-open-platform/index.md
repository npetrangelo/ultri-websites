# Ultri Open Platform Technical Documentation

## Auth

Authentication is handled by SuperTokens and authorization by the gateway, API and database.

### Authentication - Supertokens

Any [client that can use a SuperTokens API](https://supertokens.com/docs/passwordless/custom-ui/init/frontend) should be able to connect to the API. We support the [passwordless auth flow](https://supertokens.com/docs/passwordless/introduction). Support for the [emailpassword flow](https://supertokens.com/docs/emailpassword/introduction) is avilable upon request.

Platform application developers only need to be concerned with the [Frontend SDK](https://supertokens.com/docs/passwordless/custom-ui/init/frontend).

### Authorization

The authorization is handled by the gateway, api and database. The application developer doesn't need to do anything to account for this.the SuperTokens SDK handles sending the correct tokens with each request. 

## Data Model

The API exposes the [Nugget Schema](/nugget-schema/).

## API

### Swagger

The [live swagger](https://api.service.ultri.com/documentation) spec is available.
