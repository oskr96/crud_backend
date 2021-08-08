//app configuration

//use express as server and morgan to log 
const express = require('express')
const morgan = require('morgan')

//initialize express
const app = express()
//start morgan
app.use(morgan('dev'))

//set routes
app.use('/api/emp', require('./routes/employees.routes'))

//set port for server 
app.set('port', 3000)

//export app object
module.exports = app;