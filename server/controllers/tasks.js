let tasks = [
  { taskId:'task001', taskName: 'Water plants ', description: 'Cause otherwise they die', color: 'lightblue', currentStreak: 12, maxStreak: 15, type: 'check', goal: 1, status: 'false'},
  { taskId:'task002', taskName: 'Push ups', description: 'Need to get fit for (next) summer', color: 'lavender', currentStreak: 10, maxStreak: 25, type: 'count', goal: 10, status: 'true'},
  { taskId:'task003', taskName: '5 a day', description: 'Healthy and balanced diet!', color: 'pink', currentStreak: 7, maxStreak: 15, type: 'count', goal: 5, status: 'false'},
  { taskId:'task004', taskName: 'Solo Project', description: 'I need a joooob', color: 'lavender', currentStreak: 1, maxStreak: 5, type: 'time', goal: 0, hours: '2', minutes: '30', status: 'true'},
  { taskId:'task005', taskName: 'Social Media', description: 'Because they are evil', color: 'lightblue', currentStreak: 1, maxStreak: 5, type: 'time', goal: 0, hours: '1', minutes: '15', status: 'false'},
  { taskId:'task006', taskName: 'Play with cat', description: 'She is just SO CUTEEEE', color: 'pink', currentStreak: 1, maxStreak: 5, type: 'count', goal: 12, status: 'false'},
];
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