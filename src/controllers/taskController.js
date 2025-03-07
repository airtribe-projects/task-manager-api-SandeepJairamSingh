//TODO: handle all possible error

const taskService = require("../services/taskService");

function GetAllTask(req, res){
    const tasks = taskService.GetAllTasks();
    return res.json(tasks);
}

function GetTaskById(req, res){
    const taskId = req.params.id;
    if(!taskId)
        return res.status("404").json({ error: 'Task not found' });
    const task = taskService.GetTaskById(taskId);

    return res.json(task);
}

function CreateTask(req, res){
    const {title, description} = req.body;
    const newTask = taskService.CreateTask(title, description);

    return res.status(201).json(newTask);
}

function UpdateTask(req, res){
    const updatedTask = taskService.UpdateTask(req.params.id, req.body);
    if (!updatedTask) {
        return res.status(404).json({ error: "Task not found" });
    }
    return res.json(updatedTask);
}

function DeleteTask(req, res){

    const deleted = taskService.DeleteTask(req.params.id);
    if (!deleted) {
        return res.status(404).json({ error: "Task not found" });
    }
    return res.json({ message: "Task deleted successfully" });
}

module.exports = {
    GetAllTask,
    GetTaskById,
    CreateTask,
    UpdateTask,
    DeleteTask
}