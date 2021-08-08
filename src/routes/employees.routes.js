//this file contains the urls for the api
const {Router} = require('express')
const router = Router()

//get functions of crud
const empCtl = require('../controllers/employees.controller.js')

//assign functions to routes
router.post('/createEmployee', empCtl.createEmployee);
router.get('/getEmployees', empCtl.getEmployees);
router.get('/getEmployee&:id', empCtl.getEmployee);
router.put('/updateEmployee', empCtl.updateEmployee);
router.delete('/deleteEmployee&:id', empCtl.deleteEmployee);

//export router
module.exports = router