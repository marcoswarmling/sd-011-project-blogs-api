const express = require('express');

const {
  addNewUser,
  loginUser,
  listAllUsers,
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

const { validToken } = require('../middleware/validateToken');

const router = express.Router();

router.get('/user',
validToken,
listAllUsers);

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
