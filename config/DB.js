const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected".bgGreen.white)
    } catch (error) {
        console.log(`Error in DB connection : ${error}`.bgRed.white)
    }
}

module.exports = connectDB;