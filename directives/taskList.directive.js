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
        <div class="table-responsive">
          <table class="table table-striped align-middle">
            <thead>
              <tr>
                <th>Estado</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Fecha de creación</th>
                <th>Fecha de modificación</th>
                <th class="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr ng-repeat="task in tasks | completed:showCompleted | orderBy:sortField:sortReverse">
                <td>
                  <span class="badge badge-fixed-width" ng-class="task.completed ? 'bg-success' : 'bg-secondary'">
                    {{ task.completed ? 'Completada' : 'Pendiente' }}
                  </span>
                </td>
                <td>
                  <strong ng-class="{'text-decoration-line-through text-muted': task.completed}">
                    {{task.name}}
                  </strong>
                </td>
                <td class="text-truncate" style="max-width: 250px;">{{task.description}}</td>
                <td>
                  <span class="text-muted small">
                    <i class="bi bi-calendar"></i>
                    {{task.createdAt | date:'yyyy-MM-dd HH:mm'}}
                  </span>
                </td>
                <td>
                  <span class="text-muted small">
                    <i class="bi bi-clock-history"></i>
                    {{task.updatedAt | date:'yyyy-MM-dd HH:mm'}}
                  </span>
                </td>
                <td class="text-end">
                  <a class="btn btn-sm btn-outline-primary me-2" ng-href="#!/task/{{task.id}}">Ver detalle</a>
                  <button ng-click="onEdit({task: task})" class="btn btn-sm btn-info me-2">Editar</button>
                  <button ng-click="onToggle({task: task})" class="btn btn-sm btn-outline-success me-2 btn-fixed-width">
                    {{ task.completed ? 'Marcar como pendiente' : 'Marcar como completada' }}
                  </button>
                  <button ng-click="onDelete({task: task})" class="btn btn-sm btn-outline-danger">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    };
  });