angular.module('taskManagerApp')
.controller('TaskController', function(TaskService) {
  var vm = this;
  vm.tasks = [];
  vm.newTask = {};
  vm.selectedTask = null;
  vm.sortField = 'createdAt';
  vm.sortReverse = false;
  vm.pageInfo = {};
  vm.page = 0;
  vm.size = 10;

  vm.loadTasks = function(page, size, sort, dir, completed) {
    page = (typeof page === 'number') ? page : vm.page;
    size = size || vm.size;
    sort = sort || vm.sortField;
    dir = (typeof vm.sortReverse === 'boolean' && vm.sortReverse) ? 'desc' : 'asc';
    completed = (typeof completed === 'boolean') ? completed : vm.showCompleted;
  
    TaskService.getAll(page, size, sort, dir, completed).then(function(response) {
      vm.pageInfo = response.data;
      vm.tasks = vm.pageInfo.content;
      vm.page = vm.pageInfo.number;
      vm.size = vm.pageInfo.size;
    });
  };

  vm.goToPage = function(page) {
    vm.loadTasks(page, vm.size, vm.sortField, vm.sortReverse ? 'desc' : 'asc');
  };

  vm.changeSort = function(field) {
    if (vm.sortField === field) {
      vm.sortReverse = !vm.sortReverse;
    } else {
      vm.sortField = field;
      vm.sortReverse = false;
    }
    vm.loadTasks(0, vm.size, vm.sortField, vm.sortReverse ? 'desc' : 'asc');
  };

  vm.changeFilter = function() {
    vm.loadTasks(0, vm.size, vm.sortField, vm.sortReverse ? 'desc' : 'asc', vm.showCompleted);
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