var express = require('express');
var app = express();
var Firebase = require('firebase');
var ref = new Firebase("https://excuser.firebaseio.com/");
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('source'));
app.use(express.static('node_modules/angular/'));
app.use(express.static('scripts'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));


app.get('/excuse/:genre?/:id?', function(req,res){

  console.log(req.params);
  var refString = "https://excuser.firebaseio.com/excuse/";
  if(req.params.id && req.params.genre) {
    refString += req.params.genre.toLowerCase() + '/-' + req.params.id;
  } else if(req.params.genre) {
    refString += req.params.genre.toLowerCase();
  };
  console.log(refString);
  var searchRef = new Firebase(refString);
  var excuse;
  searchRef.once("value", function(snapshot){
    excuse = snapshot.val();
    res.send(excuse);
  }, function (errorObject) {
    console.log(errorObject);
    res.end();
  });

});

app.get('/submit', function(req,res){
  res.sendFile(path.join(__dirname, './source/submit.html'));
});

app.post('/submit', function(req, res) {
  var submissionRef = new Firebase('https://excuser.firebaseio.com/excuse/' + req.body.genre.toLowerCase());
  submissionRef.push({'excuse': req.body.message });
  console.log('Excuse saved: ' + req.body.message);
  res.send('Excuse Saved');
});




var port = 8000;
app.listen(process.env.PORT || port);
console.log('Server started on ' + port);
