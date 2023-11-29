"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskController_1 = require("../controllers/TaskController");
describe("TaskController", () => {
    let taskController;
    beforeEach(() => {
        taskController = new TaskController_1.TaskController();
    });
    describe("Verificar que la tarea se agregó correctamente", () => {
        it("debería agregar una tarea correctamente", () => {
            const taskTitle = "Nueva tarea";
            const newTask = taskController.addTask(taskTitle);
            expect(newTask.title).toBe(taskTitle);
            const tasks = taskController.getTasks();
            expect(tasks).toContain(newTask);
        });
    });
    describe("Verificar que la lista de tareas no esté vacía", () => {
        it("debería listar tareas correctamente", () => {
            const tasks = taskController.getTasks();
            expect(tasks.length).toBeGreaterThan(0);
        });
    });
    describe("Eliminar tareas y verificar que se haya eliminado correctamente", () => {
        it("debería eliminar una tarea correctamente", () => {
            const tasksBeforeDeletion = taskController.getTasks();
            const taskIdToDelete = tasksBeforeDeletion[0].id;
            const tasksAfterDeletion = taskController.getTasks();
            expect(tasksAfterDeletion.find((task) => task.id === taskIdToDelete)).toBeUndefined();
        });
    });
});
