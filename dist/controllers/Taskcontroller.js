"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const fs = __importStar(require("fs"));
const dataFilePath = "./src/data/tasks.json";
class TaskController {
    constructor() {
        this.tasks = [];
        this.loadTasks();
    }
    loadTasks() {
        try {
            const data = fs.readFileSync(dataFilePath, "utf-8");
            this.tasks = JSON.parse(data);
        }
        catch (error) {
            this.tasks = [];
        }
    }
    getTasks() {
        return this.tasks;
    }
    addTask(title) {
        const newTask = {
            id: this.tasks.length + 1,
            title,
            completed: false,
        };
        this.tasks.push(newTask);
        this.saveTasks();
        return newTask;
    }
    saveTasks() {
        fs.writeFileSync(dataFilePath, JSON.stringify(this.tasks, null, 2));
    }
    deleteTask(taskId) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            this.saveTasks();
            return true;
        }
        return false;
    }
}
exports.TaskController = TaskController;
