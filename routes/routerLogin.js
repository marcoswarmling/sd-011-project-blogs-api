const router = require('express').Router();

const { checkEmail, checkPassword } = require('../middleware');
const {
  checkEmptyPassword,
  checkfildEmail,
  checkfildPassword,
  checkEmptyEmail,
} = require('../service');
const { getUser } = require('../controller/controllerLogin');

router.post('/',
  checkEmptyEmail, checkfildEmail, checkEmail,
  checkEmptyPassword, checkfildPassword, checkPassword, getUser);

module.exports = router;
