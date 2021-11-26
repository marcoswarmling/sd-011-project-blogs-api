const router = require('express').Router();
const {
  checkName,
  checkEmail,
  checkPassword,
  checkToken,
} = require('../middleware');

const {
  checkUserExist,
  checkfildEmail,
  checkfildPassword,
  checkUserCredencies,
} = require('../service');

const { addNewUser, getUsers } = require('../controller/controllerUsers');

router.post('/',
  checkfildEmail, checkfildPassword, checkName,
  checkEmail, checkPassword, checkUserExist, addNewUser);

router.get('/', checkToken, checkUserCredencies, getUsers);

module.exports = router;
