const validPriorities = ["low", "medium", "high"];


function ValidateTask(req, res, next){
    const {title, description, completed, priority } = req.body;

    if (!title || typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({ error: "Title is required and must be a non-empty string." });
    }

    if (!description || typeof description !== "string" || description.trim() === "") {
        return res.status(400).json({ error: "Description is required and must be a non-empty string." });
    }

    if (completed !== undefined && typeof completed !== "boolean") {
        return res.status(400).json({ error: "Completed must be a boolean value." });
    }

    if (priority && !validPriorities.includes(priority)) {
        return res.status(400).json({ error: "Priority must be 'low', 'medium', or 'high'." });
    }

    next();
}

module.exports = { ValidateTask };