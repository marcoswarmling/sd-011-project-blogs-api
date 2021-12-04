const router = require('express').Router();
const {
  checkName,
  checkEmail,
  checkPassword,
  checkToken,
  checkValidToken,
} = require('../middleware');

const {
  checkUserExist,
  checkfildEmail,
  checkfildPassword,
  checkUserCredencies,
} = require('../service');

const {
  addNewUser,
  getUsers,
  getUser,
  deleteUser,
} = require('../controller/controllerUsers');

router.post('/',
  checkfildEmail, checkfildPassword, checkName,
  checkEmail, checkPassword, checkUserExist, addNewUser);

router.get('/', checkToken, checkUserCredencies, getUsers);

router.get('/:id', checkToken, checkUserCredencies, getUser);

router.delete('/me', checkToken, checkValidToken, checkUserCredencies, deleteUser);

module.exports = router;
