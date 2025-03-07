//TODO: handle all possible error

const taskService = require("../services/taskService");

function GetAllTask(req, res){
    const { completed, sort } = req.query;
    const filterCompleted = completed !== undefined ? completed === "true" : undefined;
    const tasks = taskService.GetAllTasks(filterCompleted, sort);
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
    const {title, description, priority } = req.body;
    const newTask = taskService.CreateTask(title, description, priority);

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

function GetTasksByPriority(req, res){
    const { level } = req.params;
    const validPriorities = ["low", "medium", "high"];

    if (!validPriorities.includes(level)) {
        return res.status(400).json({ error: "Invalid priority level. Use 'low', 'medium', or 'high'." });
    }

    const tasks = taskService.GetTaskByPriority(level);
    res.json(tasks);
};

module.exports = {
    GetAllTask,
    GetTaskById,
    CreateTask,
    UpdateTask,
    DeleteTask,
    GetTasksByPriority
}