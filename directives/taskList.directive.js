angular.module('taskManagerApp')
  .directive('taskList', function() {
    return {
      restrict: 'E',
      scope: {
        tasks: '=',
        showCompleted: '=',
        sortField: '=',
        sortReverse: '=',
        onEdit: '&',
        onToggle: '&',
        onDelete: '&'
      },
      template: `
        <ul class="list-group">
            <li ng-repeat="task in tasks | completed:showCompleted | orderBy:sortField:sortReverse" class="list-group-item d-flex align-items-center">            <span class="d-flex align-items-center flex-grow-1 overflow-hidden" style="gap: 12px;">
              <span class="badge badge-fixed-width" ng-class="task.completed ? 'bg-success' : 'bg-secondary'">
                {{ task.completed ? 'Completada' : 'Pendiente' }}
              </span>
              <strong class="task-name text-truncate" ng-class="{'text-decoration-line-through text-muted': task.completed}">
                {{task.name}}
              </strong>
              <span class="task-desc text-truncate">{{task.description}}</span>
            </span>
            <span class="ms-2">
              <button ng-click="onEdit({task: task})" class="btn btn-sm btn-info me-2">Editar</button>
              <button ng-click="onToggle({task: task})" class="btn btn-sm btn-outline-success me-2 btn-fixed-width">
                {{ task.completed ? 'Marcar como pendiente' : 'Marcar como completada' }}
              </button>
              <button ng-click="onDelete({task: task})" class="btn btn-sm btn-outline-danger">Eliminar</button>
            </span>
          </li>
        </ul>
      `
    };
  });