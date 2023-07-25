# Ultri Platform Websockets

Websockets are used for realtime communciations.

We use Fastify Websockets on the backend and vue-native-websocket-vue3 on the front end.

## Backend

[Fastify Websockets](https://github.com/fastify/fastify-websocket)

### Route

`/member/:memberUid/updates`

#### Define websocket=true

```js
{  websocket: true },
```

example: 

```js
server.get(
    "/member/:memberUid/updates",
    {  websocket: true },
    async (connection, request) => {

    // Get the token from the querystring
    const token = request.params.token;

    // Client message
    connection.socket.on('message', message => {
        console.log(`Client message: ${message}`);
    });

    // Client disconnect
    connection.socket.on('close', () => {
        console.log('Client disconnected');
    });
    }
);
```

## Front end


## SuperTokens

[SuperTokens Usage](https://supertokens.com/docs/thirdparty/common-customizations/sessions/with-websocket)