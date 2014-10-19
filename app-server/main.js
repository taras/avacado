//var http    = require('vertx/http');
var console = require('vertx/console');
//var server  = http.createHttpServer();
//
//server.requestHandler(function(req) {
//  console.log(req.path);
//  var file = '';
//  if (req.path == '/') {
//    file = 'index.html';
//  } else if (req.path.indexOf('..') == -1) {
//    file = req.path;
//  }
//  req.response.sendFile('index.html');
//});
//
//server.listen(8000, 'localhost');

var container = require('vertx/container');

container.deployModule('io.vertx~mod-web-server~2.0.0-final', {
  port: 8000,
  host: 'localhost',
  web_root: './client-app',
  bridge: true,
  inbound_permitted: [],
  outbound_permitted: [] // {address_re: 'client-app\..*'}
}, function(err, deployID) {
  if (!err) {
    console.log("The verticle has been deployed, deployment ID is " + deployID);
  } else {
    console.log("Deployment failed! " + err.getMessage());
  }
});