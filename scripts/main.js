'use strict'
angular.module('excuser', ['ngRoute', 'excuseSubmit'])
  .controller('excuserController', function($http, $location, $scope) {

    var self = this;
    self.getRandomExcuse = function() {
      if($location.path() == "/"){
        $http.get('/random').then(function(res) {
            console.log(res.data);
        })
      } else {
        self.getTopExcuse();
      }
    };
    self.topExcuse = ""
    self.lastLocation;
    self.possibleOption = [];
    self.previousExcuse;
    self.getTopExcuse = function (path){
      var combinedPath = '/excuse' + $location.path();

      function getNewExcuse() {
        var rng = Math.random() * (self.possibleOption.length - 0) | 0;
        console.log(rng);
        self.topExcuse = self.possibleOption[rng].excuse;
        if(self.previousExcuse === self.topExcuse){
          if(self.possibleOption.length < 2) {
            return
          };
          getNewExcuse();
          return;
        };
        self.previousExcuse = self.topExcuse;
        self.lastLocation = combinedPath;
        console.log(self.topExcuse);
      };
      if(combinedPath !== self.lastLocation){
        $http.get(combinedPath).then(function(res) {
          console.log("ajax request made!");
          self.possibleOption = [];
          var random = function(res) {
            for(var x in res.data) {
              if(res.data[x].hasOwnProperty('excuse')){
                self.possibleOption.push(res.data[x]);
              } else {
                for(var y in res.data[x]){
                  self.possibleOption.push(res.data[x][y])
                }
              }
            };
            getNewExcuse();
          };
          random(res);
        })
      } else {
        getNewExcuse();
      }
    };
  })
  .config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/submit', {
        templateUrl: '/submit',
        controller: 'excuseSubController',
        controllerAs: 'excuser'
      })
      .when('/school', {
        templateUrl: 'views/schoolcat.html',
     })
      .when('/school/:subgenre', {
        templateUrl: 'views/excuserSchool.html',
     })
      .when('/work', {
        templateUrl: 'views/workcat.html',
     })
     .when('/work/:subgenre', {
       templateUrl: 'views/excuserWork.html',
     })
      .when('/social', {
        templateUrl: 'views/socialcat.html',
     })
     .when('/social/:subgenre', {
       templateUrl: 'views/excuserSocial.html'
     })
     .when('/events', {
       templateUrl: 'views/eventscat.html',
    })
    .when('/events/:subgenre', {
      templateUrl: 'views/excuserEvents.html'
    })
    .when('/funny', {
      templateUrl: 'views/funnycat.html',
    })
   .when('/funny/:subgenre', {
     templateUrl: 'views/excuserFunny.html'
    })
   .when('/love', {
     templateUrl: 'views/lovecat.html',
   })
  .when('/love/:subgenre', {
    templateUrl: 'views/excuserLove.html'
  })

    $locationProvider.html5Mode(true);
}]);
