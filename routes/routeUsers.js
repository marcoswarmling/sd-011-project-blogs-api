const router = require('express').Router();
const {
  checkName,
  checkEmail,
  checkPassword,
} = require('../middleware');

const {
  checkUserExist,
  checkfildEmail,
  checkfildPassword,
} = require('../service');

const { addNewUser } = require('../controller/controllerUsers');

router.post('/',
  checkfildEmail, checkfildPassword, checkName,
  checkEmail, checkPassword, checkUserExist, addNewUser);

module.exports = router;
