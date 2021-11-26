const router = require('express').Router();
const loginController = require('../controller/login');

router.post('/', loginController.getLogIn);

module.exports = router;