const router = require('express').Router();

const { 
  validateDisplayName,
  validatePassword,
  validateEmail } = require('../Validations/userValidations');

const { 
  insertUserCtrl,
  getAllUsersCtrl,
  getUserByIdCtrl } = require('../Controllers/user');

const JWTValidate = require('../Validations/auth');

router.post('/', validateDisplayName, validateEmail, validatePassword, insertUserCtrl);

router.get('/', JWTValidate, getAllUsersCtrl);

router.get('/:id', JWTValidate, getUserByIdCtrl);

module.exports = router;