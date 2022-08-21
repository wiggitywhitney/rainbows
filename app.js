const http = require('http');
var express = require('express');
var app = express();
const { createTerminus, HealthCheckError } = require('@godaddy/terminus');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send("Spiders! Rainbows! SPIDERS AND RAINBOWS AND SMILES!");
});

const server = http.createServer(app);

server.listen(8080, function () {
  console.log('rainbows app listening on port 8080!');
});

createTerminus(server, {
  useExit0: true
})