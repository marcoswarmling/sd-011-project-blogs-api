const router = require('express').Router();
const loginController = require('../src/controller/login');

router.post('/', loginController.getLogIn);

module.exports = router;