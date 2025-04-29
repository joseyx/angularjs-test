angular.module('taskManagerApp')
.controller('TaskController', function(TaskService) {
  var vm = this;
  vm.tasks = [];
  vm.newTask = {};
  vm.selectedTask = null;
  vm.sortField = 'createdAt';
  vm.sortReverse = false;

  vm.loadTasks = function() {
    TaskService.getAll().then(function(response) {
      vm.tasks = response.data;
    });
  };

  vm.createTask = function() {
    TaskService.create(vm.newTask).then(function() {
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
    TaskService.toggle(task.id).then(vm.loadTasks);
  };

  vm.deleteTask = function(task) {
    TaskService.delete(task.id).then(vm.loadTasks);
  };

  vm.viewTask = function(task) {
    vm.selectedTask = task;
    var modal = new bootstrap.Modal(document.getElementById('editTaskModal'));
    modal.show();
  };

  vm.updateTask = function() {
    TaskService.update(vm.selectedTask).then(function() {
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