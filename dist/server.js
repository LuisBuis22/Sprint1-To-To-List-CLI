"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
/*inicializar Express.js y guardarlo en la variable app
para podernos referir a ello mediante 'app'*/
const app = (0, express_1.default)();
app.use(bodyParser.urlencoded({ extended: true }));
let todos = []; // almacenamiento en la memoria para todos, con el tipo Todo[] que ha sido crado en interface Todo
//Endpoint GET (leer recurso) para obtener (fetch) todos loos items
app.get('/todos', (_req, res) => {
    res.json(todos);
});
/*Endpoint POST (crear nuevo recurso) para crear un nuevo todo item
proveer 'title' y de manera opcional 'completado' en el request body como JSON*/
app.post('/todos', (_req, res) => {
    console.log("Cuerpo de la solicitud:", _req.body);
    const todo = {
        id: todos.length + 1,
        title: _req.body.title,
        completed: _req.body.completed || false,
    };
    todos.push(todo);
    res.status(201).json(todo);
});
/*Endpoint PUT (actualizar recurso) para actualizar un ítem determinado con el id específico
 y proveer el 'title actualizado y/o 'completado' en el request body como JSON */
app.put("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }
    else {
        todo.title = req.body.title || todo.title;
        todo.completed = req.body.completed || todo.completed;
        res.json(todo);
    }
    ;
});
//Endpoint DELETE para eliminar tareas ya existentes con el id específico
app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }
    else {
        todos.splice(index, 1);
        res.status(204).send();
    }
    ;
});
//run server en port 3000
//la app irá en el siguiente URL: HTTP://LOCALHOST:3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
