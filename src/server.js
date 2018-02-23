const DeepstreamServer = require('deepstream.io');
const AuthenticationHandler = require("./authentication-handler");
const PermissionHandler = require("./permission-handler");

const server = new DeepstreamServer({
    maxAuthAttempts: 5,
    unauthenticatedClientTimeout: 5000,
    connectionEndpoints: {
        websocket: {
            options: {
                port: 3091
            }
        }
    }
});

server.set("permissionHandler", new PermissionHandler());

server.set("authenticationHandler", new AuthenticationHandler());

module.exports = server;
