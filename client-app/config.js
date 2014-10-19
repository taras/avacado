System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "npm:rsvp": "npm:rsvp@^3.0.14",
    "npm:rsvp@3.0.14": {
      "json": "github:systemjs/plugin-json@^0.1.0"
    },
    "npm:ieee754@1.1.4": {},
    "npm:base64-js@0.0.7": {},
    "npm:inherits@2.0.1": {},
    "npm:Base64@0.2.1": {},
    "github:jspm/nodelibs@0.0.3": {
      "Base64": "npm:Base64@0.2",
      "base64-js": "npm:base64-js@0.0",
      "ieee754": "npm:ieee754@^1.1.1",
      "inherits": "npm:inherits@^2.0.1",
      "json": "github:systemjs/plugin-json@master"
    },
    "npm:sockjs": "npm:sockjs@^0.3.9",
    "npm:sockjs@0.3.9": {
      "node-uuid": "npm:node-uuid@1.3.3",
      "faye-websocket": "npm:faye-websocket@0.7.2"
    },
    "npm:node-uuid@1.3.3": {},
    "npm:websocket-driver@0.3.6": {},
    "npm:faye-websocket@0.7.2": {
      "websocket-driver": "npm:websocket-driver@0"
    },
    "npm:guid": "npm:guid@^0.0.12",
    "npm:guid@0.0.12": {}
  }
});

System.config({
  "versions": {
    "npm:rsvp": "3.0.14",
    "github:jspm/nodelibs": "0.0.3",
    "npm:ieee754": "1.1.4",
    "github:systemjs/plugin-json": [
      "0.1.0",
      "master"
    ],
    "npm:base64-js": "0.0.7",
    "npm:inherits": "2.0.1",
    "npm:Base64": "0.2.1",
    "npm:sockjs": "0.3.9",
    "npm:node-uuid": "1.3.3",
    "npm:faye-websocket": "0.7.2",
    "npm:websocket-driver": "0.3.6",
    "npm:guid": "0.0.12"
  }
});

