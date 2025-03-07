let tasks = [];
let id = 1;

/* Schema
{
  "id": 2,
  "title": "Create a new project",
  "description": "Create a new project using Magic",
  "completed": false
}
*/

function GetAllTasks(){
    return tasks;
};

function GetTaskById(taskId){
    if(!taskId)
        return null;

    return tasks.find(task => task.id === parseInt(taskId));
};

function CreateTask(title, description){
    const newTask = {
        id: id++,
        title: title,
        description: description,
        completed: false
    }

    tasks.push(newTask);
    return newTask;
};

function UpdateTask(taskId, updateTask){

    if(!taskId)
        return null;

    const existingTask = tasks.find(task => task.id === parseInt(taskId));

    if(!existingTask)
        return null;

    existingTask.title = updateTask.title || existingTask.title;
    existingTask.description = updateTask.description || existingTask.description;
    existingTask.completed = updateTask.completed !== undefined ? updateTask.completed : existingTask.completed;

    return existingTask;
};

function DeleteTask(taskId){
    if(!taskId)
        return null;

    const existingTaskIndex = tasks.findIndex(task => task.id === parseInt(taskId));
    tasks.splice(existingTaskIndex, 1);
    
    return true;
};

module.exports = {
    GetAllTasks,
    GetTaskById,
    CreateTask,
    UpdateTask,
    DeleteTask
}