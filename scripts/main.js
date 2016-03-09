angular.module('excuser', ['ngRoute'])
  .controller('excuserController', function($http) {

    var self = this;
    self.getRandomExcuse = function() {
      $http.get('/random').then(function(res) {
          console.log(res.data);
      })
    };

  })
  .config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'excuserController',
        controllerAs: 'excuse'
      })

    $locationProvider.html5Mode(true);
}])
