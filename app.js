const express = require('express');
const tasksRoutes = require("./src/routes/tasks")
const app = express();
const port = 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/tasks", tasksRoutes);

//error handling middleware


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



//module.exports = app;