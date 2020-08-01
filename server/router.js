const router = require('express').Router();
const controller = require('./controllers/tasks');

router.get('/tasks', controller.getTasks);
router.post('/tasks', controller.postTask);

module.exports = router;