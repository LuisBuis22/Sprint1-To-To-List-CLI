import { Task } from "../models/Task";
import * as fs from "fs";

const dataFilePath = "./src/data/tasks.json";

export class TaskController {
  private tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  private loadTasks() {
    try {
      const data = fs.readFileSync(dataFilePath, "utf-8");
      this.tasks = JSON.parse(data);
    } catch (error) {
      this.tasks = [];
    }
  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public addTask(title: string): Task {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title,
      completed: false,
    };

    this.tasks.push(newTask);
    this.saveTasks();

    return newTask;
  }

  public saveTasks() {
    fs.writeFileSync(dataFilePath, JSON.stringify(this.tasks, null, 2));
  }

  public deleteTask(taskId: number): boolean {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.saveTasks();
      return true;
    }
    return false;
<<<<<<< HEAD
  }

  public checkTask(taskId: number): boolean {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = true;
      this.saveTasks();
      return true;
    }
    return false;
  }

  public unCheckTask(taskId:number):boolean {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = false;
      this.saveTasks();
      return true;
    }
    return false;
  }
}
=======
  }

  public checkTask(taskId: number): boolean {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = true;
      this.saveTasks();
      return true;
    }
    return false;
  }

  public unCheckTask(taskId:number):boolean {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = false;
      this.saveTasks();
      return true;
    }
    return false;
  }
}
>>>>>>> 1ecabc1d1ec481e3d9589f73d0c3b2b3d75a6f7c
