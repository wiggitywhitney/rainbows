var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send("Rainbows! Rainbows! RAINBOWS!");
});

app.listen(8080, function () {
  console.log('rainbows app listening on port 8080!');
});