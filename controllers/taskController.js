angular.module('taskManagerApp')
  .controller('TaskController', function($http, API_URL) {
    var vm = this;
    vm.tasks = [];
    vm.newTask = {};
    vm.selectedTask = null;
    vm.sortField = 'createdAt';
    vm.sortReverse = false;

    vm.loadTasks = function() {
      $http.get(API_URL)
        .then(function(response) {
          vm.tasks = response.data;
        });
    };

    vm.createTask = function() {
      $http.post(API_URL, vm.newTask)
        .then(function() {
          vm.newTask = {};
          vm.loadTasks();
          var modal = bootstrap.Modal.getInstance(document.getElementById('createTaskModal'));
          if (modal) {
            modal.hide();
            document.querySelector('button[data-bs-target="#createTaskModal"]').focus();
          }
        });
    };

    vm.toggleTask = function(task) {
      $http.patch(API_URL + '/' + task.id + '/toggle')
        .then(function() {
          vm.loadTasks();
        });
    };

    vm.deleteTask = function(task) {
      $http.delete(API_URL + '/' + task.id)
        .then(function() {
          vm.loadTasks();
        });
    };

    vm.viewTask = function(task) {
      vm.selectedTask = task;
      var modal = new bootstrap.Modal(document.getElementById('editTaskModal'));
      modal.show();
    };

    vm.updateTask = function() {
      $http.put(API_URL + '/' + vm.selectedTask.id, vm.selectedTask)
        .then(function() {
          vm.loadTasks();
          var modal = bootstrap.Modal.getInstance(document.getElementById('editTaskModal'));
          if (modal) {
            modal.hide();
            document.querySelector('button[data-bs-target="#createTaskModal"]').focus();
          }
        });
    };

    vm.loadTasks();
  });