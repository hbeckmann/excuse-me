angular.module('excuseSubmit', [])
  .controller('excuseSubController', function($http) {

    var self = this;
    self.genres = [{
      id: 0,
      label: 'School',
      subgenres: ['Homework ', 'Absence', 'Tardiness', 'Tests', 'Late Work', 'Cheating']
    }, {
      id: 1,
      label: 'Work'
      subgenres: ['Missed Deadlines', 'Absence', 'Tardiness', 'Meeting', 'Leaving Early']
    }, {
      id: 2,
      label: 'Social'
      subgenres: ['Party', 'Dance']
    }, {
      id: 3,
      label: 'Events'
      subgenres: ['Funeral', 'Family', 'School', 'Performance', 'Sports']
    }, {
      id: 4,
      label: 'Funny'
    }, {
      id: 5,
      label: 'Love'
      subgenres: ['Date', 'Break Up', 'Forget Anniversary', 'Inlaws']
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
