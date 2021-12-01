const express = require('express');

const { addNewUser } = require('../controllers/user-controllers');

const {
  validateName,
  validateEmail,
  validatePassword,
  emailExists,
} = require('../middleware/validateUser');

const router = express.Router();

router.post('/user',
validateName,
validateEmail,
validatePassword,
emailExists,
addNewUser);

module.exports = router;
