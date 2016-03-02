angular.module('excuseSubmit', [])
  .controller('excuseSubController', function($http) {

    var self = this;
    self.genres = [{
      id: 0,
      label: 'Work'
    }, {
      id: 1,
      label: 'School'
    }];
    self.input = self.genres[0];
    self.message = "";

    self.submitExcuse = function() {

      $http.post('/submit',
        {
          'genre': self.input.label,
          'message': self.message
        }).then(function(res) {
          alert('thanks for submitting!');
        })
      };


  });
