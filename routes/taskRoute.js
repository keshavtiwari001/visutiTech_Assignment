const express = require('express')
const router = express.Router()

const { createTask, getAllTasks, getSingleTask, updateTask, deleteTask } = require("../controllers/taskController")

router.get('/', getAllTasks)
router.get('/:id', getSingleTask)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router