const router = require('express').Router();
const controllerCreateUser = require('./controller/controllerCreateUser');
const validedName = require('../middleware/nameValidator');
const validedEmail = require('../middleware/emailValidator');
const validedPassword = require('../middleware/passwordValidator');

router.post(
  '/',
  validedName,
  validedEmail,
  validedPassword,
  controllerCreateUser
);

module.exports = router;
