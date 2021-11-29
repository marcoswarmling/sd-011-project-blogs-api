const router = require('express').Router();
const controllerCreateUser = require('../controller/controllerCreateUser');
const { validedName, validedEmail, validedPassword } = require('../middleware');

router.post(
  '/',
  validedName,
  validedEmail,
  validedPassword,
  controllerCreateUser
);

module.exports = router;
