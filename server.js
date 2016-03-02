var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send('Hello! Welcome the Excuse Generator! More Coming soon.');
});

var port = 8000;
app.listen(process.env.PORT || port);
console.log('Server started on ' + port);
