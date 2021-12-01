const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/userController');
const { newUserValidation, loginValidation } = require('../middlewares/userValidation');
// const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router
.post('/user', rescue(newUserValidation), rescue(userController.findOrCreate))
.post('/login', rescue(loginValidation), rescue(userController.findOne));

module.exports = router;
