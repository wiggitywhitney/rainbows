var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(images/rainbowsrainbowsrainbows.png);
});

app.listen(3000, function () {
  console.log('rainbows app listening on port 3000!');
});