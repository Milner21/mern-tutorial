const express = require('express')
const colors = require('colors')
const dotenv  =require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')

connectDB()

const port=process.env.PORT

const app = express()



app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`El servidor inicio en el puerto ${port}`))