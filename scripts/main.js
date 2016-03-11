angular.module('excuser', ['ngRoute', 'excuseSubmit'])
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
      .when('/submit', {
        templateUrl: '/submit',
        controller: 'excuseSubController',
        controllerAs: 'excuser'
      })
      .when('/school', {
        templateUrl: 'views/schoolcat.html',
        controller: 'excuserController',
        controllerAs: 'excuse'
     })

      .when('/school/test', {
        templateUrl: 'views/schoolExcuse.html',
        controller: 'excuserController',
        controllerAs: 'excuse'
     })
      .when('/work', {
        templateUrl: 'views/workcat.html',
        controller: 'excuserController',
        controllerAs: 'excuse'
     })
      .when('/work', {
        templateUrl: 'views/workExcuse.html',
        controller: 'excuserController',
        controllerAs: 'excuse'
     })

    $locationProvider.html5Mode(true);
}]);
