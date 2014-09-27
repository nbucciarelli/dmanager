'use strict';
angular.module('DManagerFrontend.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('ExerciseService', [ '$http', function($http) {
  // Might use a resource here that returns a JSON array
  var ExerciseService = {
    data: {
      exercises: [
        { id: 0, difficulty: 'Hard', name: 'HI', exercise_type: "Some TYpe" }
      ]
    },
    isLoaded: false
  };
  ExerciseService.all = function() {
    return ExerciseService.data.exercises;
  },
  ExerciseService.get = function(exerciseId) {
    console.log(exerciseId)
    return _.findWhere(ExerciseService.data.exercises, {id: parseInt(exerciseId)});
  },
  ExerciseService.initExercises = function() {
    $http.get('http://localhost:3000/exercises.json').success( function(data){
      console.log(data);
      ExerciseService.data.exercises = data;
      ExerciseService.isLoaded = true;
    });
  }
  return ExerciseService;
}]);
