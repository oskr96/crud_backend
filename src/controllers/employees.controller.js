//all functions for crud

const { restart } = require("nodemon")

//object to store functions
const empCtl = {}

//create
empCtl.createEmployee = (req, res) => {
    res.send("get employee by id")
}

//read
empCtl.getEmployees = (req, res) => {
    res.send("get all employees")
}
empCtl.getEmployee = (req, res) => {
    res.send("get employee by id")
}

//update
empCtl.updateEmployee = (req, res) => {
    res.send("get employee by id")
}

//delete
empCtl.deleteEmployee = (req, res) => {
    res.send("get employee by id")
}

//export 
module.exports = empCtl;