var connect = require('connect'),
  http = require('http'),
  https = require('https'),
  fs = require('fs');

var options = {
  key:    fs.readFileSync('config/agent1-key.pem'),
  cert:   fs.readFileSync('config/agent1-cert.pem')
};
var app = connect()
  .use(connect.static('app'))
  .use(connect.directory('app'));
https.createServer(options,app).listen(8000);
