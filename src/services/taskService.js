let tasks = [];
let id = 1;

/* Schema
{
  "id": 2,
  "title": "Create a new project",
  "description": "Create a new project using Magic",
  "completed": false,
  "priority": priority,
  "createdAt": Date
}
*/

function GetAllTasks(filterCompleted, sort){
    let result = [...tasks];

    if (filterCompleted !== undefined) {
        result = result.filter(task => task.completed === filterCompleted);
    }

    if (sort === "asc") {
        result.sort((a, b) => a.createdAt - b.createdAt);
    } else if (sort === "desc") {
        result.sort((a, b) => b.createdAt - a.createdAt);
    }

    return result;
};

function GetTaskById(taskId){
    if(!taskId)
        return null;

    return tasks.find(task => task.id === parseInt(taskId));
};

function CreateTask(title, description, priority){
    const newTask = {
        id: id++,
        title: title,
        description: description,
        completed: false,
        priority: priority || "medium",
        createdAt: new Date()
    }

    tasks.push(newTask);
    return newTask;
};

function UpdateTask(taskId, updates){
    const task = tasks.find(task => task.id === parseInt(taskId));
    if (!task) return null;

    task.title = updates.title || task.title;
    task.description = updates.description || task.description;
    task.completed = updates.completed !== undefined ? updates.completed : task.completed;
    task.priority = updates.priority || task.priority;

    return task;
};

function DeleteTask(taskId){
    if(!taskId)
        return null;

    const existingTaskIndex = tasks.findIndex(task => task.id === parseInt(taskId));
    tasks.splice(existingTaskIndex, 1);
    
    return true;
};

function GetTaskByPriority(priority){
    return tasks.filter(task => task.priority === priority);
}

module.exports = {
    GetAllTasks,
    GetTaskById,
    CreateTask,
    UpdateTask,
    DeleteTask,
    GetTaskByPriority
}