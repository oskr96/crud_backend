//this file contains the urls for the api
const {Router} = require('express')
const { createEmployee } = require('../controllers/employees.controller')

const router = Router()

//get functions of crud
const empCtl = require('../controllers/employees.controller')

//assign functions to routes
router.post('/', empCtl.createEmployee)
router.get('/', empCtl.getEmployees)
router.get('/:id', empCtl.getEmployee)
router.put('/:id', empCtl.updateEmployee)
router.delete('/:id', empCtl.deleteEmployee)

//export router
module.exports = router