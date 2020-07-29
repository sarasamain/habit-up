const router = require('express').Router();
// const controller;

router.get('/user', (req, res) => {
  res.send("I got to the get request");
});
router.post('/tasks/:username', () => {});
router.put('/tasks/:username/:taskname', () => {});

module.exports = router;