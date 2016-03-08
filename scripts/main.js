angular.module('excuser', [])
  .controller('excuserController', function($http) {

    var self = this;
    self.getRandomExcuse = function() {
      $http.get('/random').then(function(res) {
          console.log(res.data);
      })
    };

  });
