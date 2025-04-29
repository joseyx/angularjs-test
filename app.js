angular.module('taskManagerApp', ['ngRoute', 'taskManagerEnv'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TaskController',
        controllerAs: 'ctrl'
      })
      .when('/task/:id', {
        templateUrl: 'views/taskDetail.html',
        controller: 'TaskDetailController',
        controllerAs: 'detailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });