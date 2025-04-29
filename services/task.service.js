angular.module('taskManagerApp')
  .service('TaskService', function($http, API_URL) {
    this.getAll = function() {
      return $http.get(API_URL);
    };
    this.create = function(task) {
      return $http.post(API_URL, task);
    };
    this.toggle = function(id) {
      return $http.patch(API_URL + '/' + id + '/toggle');
    };
    this.delete = function(id) {
      return $http.delete(API_URL + '/' + id);
    };
    this.update = function(task) {
      return $http.put(API_URL + '/' + task.id, task);
    };
    this.getById = function(id) {
      return $http.get(API_URL + '/' + id);
    };
  });