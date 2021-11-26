const router = require('express').Router();
const {
  checkName,
  checkEmail,
  checkPassword,
} = require('../middleware/middlewareUser');
const {
  checkfildEmail,
  checkfildPassword,
} = require('../service/serviceUser');

const { addNewUser } = require('../controller/controllerUsers');

router.post('/',
  checkfildEmail, checkfildPassword, checkName,
  checkEmail, checkPassword, addNewUser);

module.exports = router;
