var RSVP = require('npm:rsvp');
var Guid = require('npm:guid');

// open vertx bus
var eb = new vertx.EventBus('http://localhost:8000/eventbus');

// create guid for this session
var guid = Guid.create();

eb.onopen = function() {
  eb.registerHandler('some-address', function(message) {
    console.log('received a message: ' + JSON.stringify(message));
  });
  // creates a new tab in the browser for this session
  eb.send('client-app', {guid: guid});
};