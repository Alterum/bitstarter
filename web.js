var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(32);
  response.send(
	fs.readFileSync('index.html').toString('utf-8'));
  
//  response.send('Hello World and Jawi too!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
