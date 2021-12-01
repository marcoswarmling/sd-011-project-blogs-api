const express = require('express');
const userController = require('../controllers/Users');
const { loginValidations } = require('../middlewares');

const router = express.Router();

router.post('/', loginValidations, userController.login);

module.exports = router;
