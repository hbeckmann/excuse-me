var express = require('express');
var app = express();
var Firebase = require('firebase');
var ref = new Firebase("https://excuser.firebaseio.com/");


app.get('/excuse', function(req,res){

  var excuse;
  ref.once("value", function(snapshot){
    excuse = snapshot.val();
      res.send(excuse);
  }, function (errorObject) {
    console.log(errorObject);
    res.end();
  });

});


app.use(express.static('source'));

var port = 8000;
app.listen(process.env.PORT || port);
console.log('Server started on ' + port);
