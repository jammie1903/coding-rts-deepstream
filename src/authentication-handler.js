const EventEmitter = require('events').EventEmitter;
const jwt = require('jsonwebtoken');
const SECRET = 'jamies-secret-TODO-change-this';

module.exports = class AuthenticationHandler extends EventEmitter {
    constructor() {
        // Extend EventEmitter
        super();

        // Or start with false if you need to do some initialisation first
        // and call this.emit( 'ready' ); a bit later
        this.isReady = true;
    }

    isValidUser(connectionData, authData, callback) {
        try {
            const result = jwt.verify(authData.token, SECRET);
            console.log(result);
            callback(true, result);
        } catch (e) {
            callback(false, "INVALID JWT");
        }
    }

    onClientDisconnect(username) {
        //optional callback for disconnecting clients
    }
}