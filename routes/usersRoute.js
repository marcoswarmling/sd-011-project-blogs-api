const router = require('express').Router();
const controllerCreateUser = require('../controller/controllerCreateUser');
const controllerFindAllUsers = require('../controller/controllerFindAllUsers');
const controllerFindById = require('../controller/controllerFindById');
const { validedName, validedEmail, validedPassword, validedToken } = require('../middleware');

router.post(
  '/',
  validedName,
  validedEmail,
  validedPassword,
  controllerCreateUser,
);

router.get('/', validedToken, controllerFindAllUsers);

router.get('/:id', validedToken, controllerFindById);

module.exports = router;
