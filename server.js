const express = require('express')
const dotenv = require('dotenv').config()
const colors = require("colors")
const PORT = process.env.PORT || 6000
const app = express()

app.use(express.json())

// DB connection :
const connectDB = require('./config/DB')
connectDB();

app.get('/', (req, res) => {
    res.send("hii, it's working !")
})

// Routing : 
const usersRoute = require('./routes/userRoute')
app.use('/user', usersRoute)

const taskRoute = require('./routes/taskRoute')
app.use('/task', taskRoute)

const productRoute = require('./routes/productRoute')
app.use('/product', productRoute)

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`)
})
