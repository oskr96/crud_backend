//all functions for crud

const { query } = require("express")
const { restart } = require("nodemon")

//require db connection
const pool = require('../db')

//object to store functions
const empCtl = {}

//create
empCtl.createEmployee = async(req, res) => {
    const query = "CALL Employee(0, '"+req.body["fullname"] + "', '"
                           + req.body["charge"]  + "', '"
                           + req.body["address"] + "', "
                           + req.body["salary"] +  ", '"
                           + req.body["email"] + "', " 
                           + req.body[ "id_boss"] + ", 'Insert')"
    console.log(query)
    try{
        const response = await pool.query(query)
        res.status(200).json({msg:'El empleado ha sido creado'})
    }
    catch(error){
        res.status(400).json({msg:'Error creando empleado'})
    }
    
}

//read
empCtl.getEmployees = async (req, res) => {
    const response = await pool.query("SELECT * FROM Employees")
    res.status(200).json(response.rows)
}

empCtl.getEmployee = async(req, res) => {
    const query = "SELECT * FROM Employees WHERE id_employee = " + req.params['id']
    try{
        const response = await pool.query(query)
        res.status(200).json(response.rows)
    }
    catch(error){
        res.status(400).json({msg:'Sin datos de empleado'})
    }
}

//update
empCtl.updateEmployee = async (req, res) => {
    const query = "CALL Employee("+req.body["id_employee"]+", '"
                            +req.body["fullname"] + "', '"
                            + req.body["charge"]  + "', '"
                            + req.body["address"] + "', "
                            + req.body["salary"] +  ", '"
                            + req.body["email"] + "', " 
                            + req.body[ "id_boss"] + ", 'Update')"
    try{
        const response = await pool.query(query)
        res.status(200).json({msg:'El empleado ha sido actualizado'})
    }
    catch(error){
        res.status(400).json({msg:'Error actualizando empleado'})
    }
}

//delete
empCtl.deleteEmployee = async(req, res) => {
    const query = "DELETE FROM Employees WHERE id_employee = " + req.params['id']
    try{
        const response = await pool.query(query)
        res.status(200).json({msg:'Empleado eliminado'})
    }
    catch(error){
        res.status(400).json({msg:'Error eliminando empleado'})
    }
}

//export 
module.exports = empCtl;