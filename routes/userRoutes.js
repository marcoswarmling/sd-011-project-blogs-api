const express = require('express');
const rescue = require('express-rescue');
const { userController } = require('../controllers');
const { validateNewUser, validateLogin, validateToken } = require('../middlewares');

const router = express.Router();

router
  .post('/user', rescue(validateNewUser), rescue(userController.newUser))
  .post('/login', rescue(validateLogin), rescue(userController.login))
  .get('/user', rescue(validateToken), rescue(userController.getUsers));

module.exports = router;