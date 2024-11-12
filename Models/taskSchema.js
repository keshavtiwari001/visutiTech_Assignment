const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('tasks', taskSchema);
