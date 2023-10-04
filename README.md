# To Do List - Sprint 1

---

### Descripción

El objetivo de este ejercicio es crear una aplicación de lista de tareas en la cual se puedan añadir, eliminar y listar tareas de una lista a través de línea de comandos (CLI).

Para ello, he usado typescript, jest para hacer tests unitarios, la extensión command y base de datos a través de una extensión .json.

---

### Instalaciones

- typescript   `npm install typescript -D`
- ts-node   `npm install -D ts-node`
- commander   `npm install comander --save`
- jest   `npm install jest --save-dev`

---

### Scripts

- `npm start list`  --->  Visualizar lista de tareas
- `npm start add`   --->  Seguido de el nombre de la tarea, añadir tarea a la lista
- `npm start delete`  --->  Seguido del ID de la tarea, que se encuentra en tasks.json, eliminar tarea de la lista