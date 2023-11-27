const express = require('express');
const router = express.Router();
const employeeControllers = require('../../controller/employeeController');

router.route('/')
    .get(employeeControllers.getAllEmployees)
    .post(employeeControllers.createNewEmployee)
    .put(employeeControllers.updateEmployee)
    .delete(employeeControllers.deleteEmployee);

router.route('/:id')
    .get(employeeControllers.getEmployee);

module.exports = router;