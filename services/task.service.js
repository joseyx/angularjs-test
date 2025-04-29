angular.module('taskManagerApp')
  .service('TaskService', function($http, API_URL) {
    this.getAll = function(page, size, sort, dir, completed) {
      var params = [];
      if (typeof page === 'number') params.push('page=' + page);
      if (size) params.push('size=' + size);
      if (sort) params.push('sort=' + sort + ',' + (dir || 'asc'));
      if (completed !== undefined) params.push('completed=' + completed);
      var url = API_URL + (params.length ? '?' + params.join('&') : '');
      return $http.get(url);
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