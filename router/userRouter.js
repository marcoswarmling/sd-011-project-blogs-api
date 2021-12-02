const express = require('express');

const {
  addNewUser,
  loginUser,
} = require('../controllers/user-controllers');

const {
  validateName,
  validateEmail,
  validatePassword,
  emailExists,
} = require('../middleware/validateUser');

const {
  validEmailField,
  validPasswordField,
} = require('../middleware/validateLogin');

const router = express.Router();

router.post('/user',
validateName,
validateEmail,
validatePassword,
emailExists,
addNewUser);

router.post('/login',
validEmailField,
validPasswordField,
loginUser);

module.exports = router;
