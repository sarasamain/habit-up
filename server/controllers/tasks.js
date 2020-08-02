const tasks = require('../mocks/tasks');

const getTasks = (req, res) => {
  try {
    res.status(200);
    res.send(tasks);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const postTask = (req, res) => {
  try {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201);
    res.send(newTask);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const deleteTask = (req, res) => {
  try {
    const deleteTaskId = req.params.id;
    tasks = tasks.filter((task) => task.taskId !== deleteTaskId );
    res.status(201);
    res.send(deleteTaskId);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const toggleTaskDone = (req, res) => {
  try {
    const toggleTaskId = req.params.id;
    const taskStatus = req.query.isComplete;
    const matchingTask = tasks.find((task) => task.taskId === toggleTaskId);
    matchingTask.status = taskStatus;
    res.status(201);
    res.send(tasks);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


module.exports = { getTasks, postTask, deleteTask, toggleTaskDone };