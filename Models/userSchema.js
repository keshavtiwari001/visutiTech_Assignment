const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    phone: { type: String }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Users', userSchema);
