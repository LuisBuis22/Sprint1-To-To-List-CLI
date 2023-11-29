import { TaskController } from "../controllers/Taskcontroller";

describe("TaskController", () => {
  let taskController: TaskController;

  beforeEach(() => {
    taskController = new TaskController();
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

<<<<<<< HEAD
=======
      taskController.deleteTask(taskIdToDelete);

>>>>>>> ce7c01ca4eab681127080892ace8407410d1faca
      const tasksAfterDeletion = taskController.getTasks();
      expect(
        tasksAfterDeletion.find((task: { id: any; }) => task.id === taskIdToDelete)
      ).toBeUndefined();
    });
  });
});
