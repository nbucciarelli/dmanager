'use strict';
angular.module('DManagerFrontend.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('ExerciseIndexCtrl', function($scope, ExerciseService) {
  console.log(ExerciseService.data);
  $scope.exercises = ExerciseService.data;
  ExerciseService.initExercises();
})


// A simple controller that shows a tapped item's data
.controller('ExerciseDetailCtrl', function($scope, $stateParams, ExerciseService) {
  $scope.exercise = ExerciseService.get($stateParams.exerciseId);
});
