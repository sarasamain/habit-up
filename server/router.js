const router = require('express').Router();
const controller = require('./controllers/tasks');

router.get('/tasks', controller.getTasks);
router.post('/tasks', controller.postTask);
router.delete('/tasks/:id', controller.deleteTask);
router.put('/tasks/:id?', controller.toggleTaskDone);

module.exports = router;