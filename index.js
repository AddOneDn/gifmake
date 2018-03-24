var express = require('express');
var path = require('path')
var compression = require('compression');

var app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('Nothing');
});

var server = app.listen(8888, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://localhost:8888');
});