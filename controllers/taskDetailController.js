angular.module('taskManagerApp')
  .controller('TaskDetailController', function($routeParams, $http, API_URL, $window) {
    var vm = this;
    vm.task = null;

    $http.get(API_URL + '/' + $routeParams.id)
      .then(function(response) {
        vm.task = response.data;
      });

    vm.goBack = function() {
      $window.history.back();
    };
  });