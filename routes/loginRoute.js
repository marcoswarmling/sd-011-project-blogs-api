const router = require('express').Router();
const controllerLoginUser = require('../controller/controllerLoginUser');
const { validedEmailLogin, validedPasswordLogin } = require('../middleware');

router.post(
  '/',
  validedEmailLogin,
  validedPasswordLogin,
  controllerLoginUser,
);

module.exports = router;
