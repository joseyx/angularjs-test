angular.module('taskManagerApp')
  .controller('TaskDetailController', function($routeParams, TaskService, $window) {
    var vm = this;
    vm.task = null;

    TaskService.getById($routeParams.id).then(function(response) {
      vm.task = response.data;
    });

    vm.goBack = function() {
      $window.history.back();
    };
  });