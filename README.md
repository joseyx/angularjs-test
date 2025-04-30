# Task Manager AngularJS

Este proyecto es una aplicación web de gestión de tareas desarrollada con **AngularJS 1.x** y un backend en **Java Spring Boot**. Permite crear, editar, eliminar, alternar y visualizar tareas, así como ordenarlas y filtrarlas por diferentes criterios.

### 👤 Información del candidato
- Nombre completo: Jose Alejandro Rojas Campero
- Correo: josea.rcampero@gmail.com
- Teléfono: +58 414 5813740

---
## 🚀 Proceso de Instalación

1. **Clonar el Repositorio**  
  Clona el repositorio desde GitHub ejecutando el siguiente comando en tu terminal:
    ```bash
    git clone https://github.com/joseyx/angularjs-test.git
    ```

2. **Navegar al Directorio del Proyecto**  
  Accede al directorio del proyecto:
    ```bash
    cd angularjs-test
    ```

3. **Instalar un Servidor Local (Opcional)**  
  Si no tienes un servidor local instalado, puedes usar uno de los siguientes métodos:
  - **Python (versión 3.x):**
    ```bash
    python -m http.server
    ```
  - **Node.js (con http-server):**
    ```bash
    npx http-server
    ```
  - **Extensión Live Server de VS Code:**  
    Instala la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) y haz clic derecho en `index.html` para seleccionar "Open with Live Server".

4. **Ejecutar el Proyecto**  
  Abre tu navegador y accede a la URL proporcionada por el servidor local (por ejemplo, `http://localhost:8000`).

5. **Configurar el Backend**  
  Asegúrate de que el backend Java Spring Boot esté corriendo en `http://localhost:8080/api/tasks`.

6. **Probar la Aplicación**  
  Navega por la aplicación y verifica que todas las funcionalidades estén operativas.

--- 
## Estructura del Proyecto

```plaintext
angularjs-test/
│
├── app.js
├── environments.js
├── styles.css
├── index.html
│
├── controllers/
│   ├── taskController.js
│   └── taskDetailController.js
│
├── directives/
│   └── taskList.directive.js
│
├── filters/
│   └── completed.filter.js
│
├── modals/
│   ├── createTaskModal.html
│   └── editTaskModal.html
│
├── views/
│   ├── main.html
│   └── taskDetail.html
│
└── README.md
```
---
## Decisiones de Diseño y Justificación

### 1. **Separación de Archivos por Responsabilidad**

- **Controladores, directivas y filtros** están en carpetas separadas. Esto mejora la organización, facilita el mantenimiento y permite escalar la aplicación fácilmente.
- **Vistas** (`views/`) y **modales** (`modals/`) están en archivos HTML independientes, lo que permite reutilización y claridad en la estructura.


### 2. **Directiva Personalizada para la Lista de Tareas**

- La directiva `<task-list>` encapsula la lógica y presentación de la lista de tareas, permitiendo reutilización y separación de responsabilidades.
- El scope aislado de la directiva permite pasarle datos y callbacks desde el controlador principal, siguiendo buenas prácticas de AngularJS.

### 4. **Filtros Personalizados**

- El filtro `completed` permite filtrar tareas por estado (todas, completadas, pendientes) de forma declarativa en el HTML, facilitando la extensión y el mantenimiento.

### 5. **Ruteo SPA con ngRoute**

- Se utiliza `ngRoute` para manejar vistas separadas: la principal (`main.html`) y la de detalle de tarea (`taskDetail.html`), logrando una experiencia de aplicación de página única (SPA).
- Cada ruta tiene su propio controlador, lo que aísla la lógica de cada vista y mejora la mantenibilidad.

### 6. **Modales Separados y Reutilizables**

- Los modales de creación y edición de tareas están en archivos HTML independientes e incluidos con `ng-include`, lo que mejora la organización y permite su reutilización en diferentes vistas.

### 7. **Accesibilidad y Usabilidad**

- Se cuida el manejo del foco al cerrar modales para mejorar la accesibilidad.
- Se utilizan utilidades de Bootstrap para una interfaz limpia, responsiva y agradable.

### 8. **Configuración de Entorno**

- El archivo `environments.js` define la constante `API_URL`, facilitando el cambio de entorno (desarrollo, producción) sin modificar el código fuente.

### 9. **Buenas Prácticas de AngularJS**

- Uso de `controllerAs` para evitar el uso excesivo de `$scope` y mejorar la claridad en las vistas.
- Separación de lógica de negocio (controladores) y presentación (vistas/directivas).
- Inclusión explícita de todos los scripts en el `index.html`, siguiendo el modelo clásico de AngularJS.

---

## Cómo Ejecutar

1. **Backend:** Asegúrate de tener el backend Java Spring Boot corriendo en `http://localhost:8080/api/tasks`.
2. **Frontend:** Sirve la carpeta `angularjs-test` con un servidor local (por ejemplo, Live Server de VS Code o `python -m http.server`).
3. Accede a `http://localhost:8000` (o el puerto correspondiente) en tu navegador.

---

## Consideraciones Finales

- El proyecto está diseñado para ser fácilmente entendible y extensible.
- Cada decisión de diseño busca demostrar buenas prácticas de AngularJS y facilitar la transición a frameworks modernos si se desea migrar en el futuro.
- La estructura modular y el uso de patrones clásicos de AngularJS hacen que el código sea mantenible y profesional.

---