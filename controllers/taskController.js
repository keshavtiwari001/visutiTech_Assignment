const Task = require('../Models/taskSchema')

exports.createTask = async (req, res) => {
    try {
        const data = req.body;
        const task = new Task(data)
        await task.save()
        res.status(201).json({ task: task, message: "Task added !" })
    } catch (error) {
        console.log(`error in adding task : ${error}`)
    }
}

exports.getAllTasks = async (req, res) => {
    const task = await Task.find();
    res.status(200).json(task);
}

exports.getSingleTask = async (req, res) => {
    const id = req.params.id
    const task = await Task.findById(id)
    if (!task) {
        return res.status(400).json({ error: "no task found !!" })
    }
    res.status(200).json({ task: task })
}

exports.updateTask = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const task = await Task.findByIdAndUpdate(id, data);
    res.status(200).json(task)
}

exports.deleteTask = async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id)
    res.status(200).json({ message: "task removed successfully !" })
}