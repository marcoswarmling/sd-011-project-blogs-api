const express = require('express');
const rescue = require('express-rescue');
const { userController } = require('../controllers');
const validateNewUser = require('../middlewares/validateNewUser');
const validateLogin = require('../middlewares/validateLogin');

const router = express.Router();

router
  .post('/user', rescue(validateNewUser), rescue(userController.newUser))
  .post('/login', rescue(validateLogin), rescue(userController.login));

module.exports = router;