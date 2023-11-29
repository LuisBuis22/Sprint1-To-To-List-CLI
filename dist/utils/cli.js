"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const TaskController_1 = require("../controllers/TaskController");
const program = new commander_1.Command();
const taskController = new TaskController_1.TaskController();
program
    .version("1.0.0")
    .description("Una aplicación de lista de tareas simple en línea de comandos.");
program
    .command("list")
    .alias("ls")
    .description("Lista todas las tareas.")
    .action(() => {
    const tasks = taskController.getTasks();
    console.log("Tareas:", tasks);
    if (tasks.length === 0) {
        console.log("No hay tareas.");
    }
    else {
        console.log("Tareas:");
        tasks.forEach((task) => {
            const status = task.completed ? "[X]" : "[ ]";
            console.log(`${status} ${task.id}. ${task.title}`);
        });
    }
});
program
    .command("add <title>")
    .description("Agrega una nueva tarea.")
    .action((title) => {
    const task = taskController.addTask(title);
    console.log(`Tarea "${task.title}" agregada.`);
});
program
    .command('check <taskId>')
    .description('Marca una tarea como completada')
    .action((taskId) => {
    const id = parseInt(taskId);
    const done = taskController.checkTask(id);
    if (done) {
        console.log(`Tarea con ID ${id} marcada como completada.`);
    }
    else {
        console.log(`No se encontró una tarea con el ID ${id}.`);
    }
});
program
    .command('uncheck <taskId>')
    .description('Desmarcar una tarea marcada anteriormente como completada')
    .action((taskId) => {
    const id = parseInt(taskId);
    const undone = taskController.unCheckTask(id);
    if (undone) {
        console.log(`Tarea con ID ${id} desmarcada.`);
    }
    else {
        console.log(`No se encontró una tarea con el ID ${id}.`);
    }
});
program
    .command("delete <taskId>")
    .description("Elimina una tarea por su ID.")
    .action((taskId) => {
    const id = parseInt(taskId, 10);
    const taskIndex = taskController.getTasks().findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
        const deletedTask = taskController.getTasks().splice(taskIndex, 1)[0];
        taskController.saveTasks();
        console.log(`Tarea "${deletedTask.title}" eliminada.`);
    }
    else {
        console.log(`No se encontró una tarea con el ID ${id}.`);
    }
});
