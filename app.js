var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Suck it, Steve!');
});

app.listen(3000, function () {
  console.log('Suck it Steve listening on port 3000!');
});