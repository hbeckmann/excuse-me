angular.module('excuseSubmit', [])
  .controller('excuseSubController', function($http) {

    var self = this;
    self.genres = [{
      id: 0,
      label: 'School',
      subgenres: ['Homework ', 'Absence', 'Tardiness', 'Tests', 'Late Work', 'TBD']
    }, {
      id: 1,
      label: 'Work'
      subgenres: ['']
    }, {
      id: 2,
      label: 'Social'
    }, {
      id: 3,
      label: 'Events'
    }, {
      id: 4,
      label: 'Funny'
    }, {
      id: 5,
      label: 'Social'
    }];
    self.input = self.genres[0];
    self.subInput = self.input.subgenres[0];
    self.message = "";

    self.submitExcuse = function() {

      $http.post('/submit',
        {
          'genre': self.input.label,
          'subgenre': self.subInput,
          'message': self.message
        }).then(function(res) {
          alert('thanks for submitting!');
        })
      };


  });
