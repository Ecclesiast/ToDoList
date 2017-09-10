var myTask = angular.module('myTask', []);
myTask.controller('TaskCtrl', ['$scope', '$http', function($scope, $http) {
    var refresh = function(){
      $http.get('/tasklist').then(function(response){
            $scope.tasklist = response.data;
        });﻿
    };

    $http.get('/tasklist').then(function(response){
          $scope.tasklist = response.data;
      });﻿

    $scope.addTask = function(){
       $http.post('/tasklist', $scope.task).then(function(response){

              $scope.tasklist.push(response.data);
              $scope.task = {};
          });
      };
    $scope.remove = function(id){
      $http.delete('/tasklist/' + id).then(function(response){
          refresh();
      });
    };
    $scope.edit = function(id) {
      $http.get('/tasklist/' + id).then(function(response) {
        $scope.task = response.data;
      });
    };
    $scope.update = function() {
      $http.put('/tasklist/' + $scope.task._id, $scope.task).then(function(response) {
        refresh();
        $scope.task = {};
      })
    };
    $scope.deselect = function() {
      $scope.task = {};
    }
}]);
