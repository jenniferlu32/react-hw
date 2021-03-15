const router = require('express').Router();
const { Task } = require('../data/data');

//display all tasks
router.get('/tasks', async(req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.send(tasks);
  } catch(err) {
    next(err);
  }
})

module.exports = router;
