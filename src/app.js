//app configuration

//use express as server and morgan to log 
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

//initialize express
const app = express()
//start morgan
app.use(morgan('dev'))

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//accept petittions from other ports
app.use(cors())

//set routes
app.use("/api/emp", require('./routes/employees.routes.js'))

//set port for server 
app.set('port', 3000)

//export app object
module.exports = app;