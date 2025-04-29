angular.module('taskManagerApp')
  .filter('completed', function() {
    return function(tasks, showCompleted) {
      if (showCompleted === undefined) return tasks;
      return tasks.filter(function(task) {
        return task.completed === showCompleted;
      });
    };
  });