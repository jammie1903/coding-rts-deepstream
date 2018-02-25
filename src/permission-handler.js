
module.exports = class PermissionHandler {

    constructor() {
        this.isReady = true;
    }

    canPerformAction(user, message, callback) {
        // room/x/y - listen to objects in the map
        // will return ["usera/myUnit", "usera/unit:myotherunit", "userb/otherguysunit", "userc/another guys unit", "env:18836382"]
        // gameobject-detailed/username/name - subscribes to units, getting full detail, can only access own units
        // gameobject/username/name - subscribe to units, getting partial detail
        console.log("PERMISSION CHECK: ", user, message.data[0]);
        if (user === "ADMIN") {
            return callback(null, true); //TODO this needs work
        }
        if (message.data[0].startsWith("gameobject-detailed/")) {
            if (message.data[0].startsWith("gameobject-detailed/" + user + "/") || message.data[0].startsWith("gameobject-detailed/env/")) {
                callback(null, true);
            } else {
                callback("Cannot view detailed view of another users unit", false);
            }
        } else if (message.data[0].startsWith("gameobject/") || message.data[0].startsWith("room/")) {
            callback(null, true);
        } else {
            callback("Not a valid endpoint", false);
        }
    }
}