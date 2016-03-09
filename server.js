var express = require('express');
var app = express();
var Firebase = require('firebase');
var ref = new Firebase("https://excuser.firebaseio.com/");
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('source'));
app.use(express.static('node_modules/angular/'));
app.use(express.static('/angular/'));
app.use(express.static('node_modules/angular-route/'));
app.use(express.static('scripts'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));


app.get('/excuse/:genre?/:subgenre?/:id?', function(req,res){

  console.log(req.params);
  var refString = "https://excuser.firebaseio.com/excuse/";
  if(req.params.id && req.params.subgenre && req.params.genre) {
    refString += req.params.genre.toLowerCase() + '/' + req.params.subgenre + '/-' + req.params.id;
  }else if(req.params.subgenre && req.params.genre) {
    refString += req.params.genre + '/' + req.params.subgenre;
  }else if(req.params.genre) {
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
  var subgenre = "";
  if(req.body.subgenre !== "General"){
    subgenre = req.body.subgenre;
    subgenre = subgenre.replace(/\s+/g, '');
  };
  var submissionRef = new Firebase('https://excuser.firebaseio.com/excuse/' + req.body.genre.toLowerCase() + '/' + subgenre.toLowerCase());
  submissionRef.push({'excuse': req.body.message });
  console.log('Excuse saved: ' + req.body.message);
  res.send('Excuse Saved');
});

app.get('/random', function(req,res){
  //Currently only returns a random Genre - need to implement random sub genre and random excuse.
  var refString = "https://excuser.firebaseio.com/excuse/";
  var possibleGenres = ['school', 'work']
  var randomIndex = Math.random() * (possibleGenres.length - 0) | 0;
  var randomGenre = possibleGenres[randomIndex];
  refString += randomGenre;
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




var port = 9000;
app.listen(process.env.PORT || port);
console.log('Server started on ' + port);
