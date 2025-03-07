const express = require("express");
const { GetAllTask, GetTaskById, CreateTask, UpdateTask, DeleteTask, GetTasksByPriority} = require("../controllers/taskController")
const {ValidateTask} = require("../middlewares/validateTask")

const router = express.Router();

router.get("/", GetAllTask);
router.get("/:id", GetTaskById);
router.post("/", ValidateTask, CreateTask);
router.put("/:id", ValidateTask, UpdateTask);
router.delete("/:id", DeleteTask);
router.get("/priority/:level", GetTasksByPriority);

module.exports = router