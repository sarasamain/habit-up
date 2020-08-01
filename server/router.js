const router = require('express').Router();
const controller = require('./controllers/tasks');

// router.get('/test', (req, res) => {
//   res.send("I got to the get request");
// });
router.get('/tasks', controller.getTasks);
router.post('/tasks', controller.postTask);

module.exports = router;