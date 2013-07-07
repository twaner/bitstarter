var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var content = fs.readFileSync("index.html", "utf8");
var buffer = new Buffer(content, "utf-8");

//console.log(buffer.toString('utf-8'));

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
