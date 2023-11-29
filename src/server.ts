import express, { Request, Response } from 'express';

const bodyParser = require("body-parser");

/*inicializar Express.js y guardarlo en la variable app
para podernos referir a ello mediante 'app'*/
const app = express()

app.use(bodyParser.urlencoded({ extended: true })); 

// crear el tipo Todo con sus distintos elementos tipado
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let todos: Todo[] = []; // almacenamiento en la memoria para todos, con el tipo Todo[] que ha sido crado en interface Todo

//Endpoint GET (leer recurso) para obtener (fetch) todos loos items
app.get('/todos', (_req: Request, res: Response) => {
    res.json(todos);
  });

/*Endpoint POST (crear nuevo recurso) para crear un nuevo todo item
proveer 'title' y de manera opcional 'completado' en el request body como JSON*/
app.post('/todos', (_req:Request, res:Response) => {
    console.log("Cuerpo de la solicitud:", _req.body);
    const todo: Todo = {
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

    if(!todo) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    } else {
      todo.title = req.body.title || todo.title;
      todo.completed = req.body.completed || todo.completed;
      res.json(todo);
    };
  });

//Endpoint DELETE para eliminar tareas ya existentes con el id específico
  app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex((t) => t.id === id);
    if(index === -1) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    } else {
      todos.splice(index, 1);
      res.status(204).send();
    };
  });

//run server en port 3000
//la app irá en el siguiente URL: HTTP://LOCALHOST:3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`);
});