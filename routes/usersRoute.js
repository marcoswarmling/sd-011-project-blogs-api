const router = require('express').Router();
const controllerCreateUser = require('../controller/controllerCreateUser');
const controllerFindAllUsers = require('../controller/controllerFindAllUsers')
const { validedName, validedEmail, validedPassword, validedToken } = require('../middleware');

router.post(
  '/',
  validedName,
  validedEmail,
  validedPassword,
  controllerCreateUser
);

router.get('/', validedToken, controllerFindAllUsers );


module.exports = router;
