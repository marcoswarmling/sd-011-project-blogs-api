const router = require('express').Router();
const { 
  validateDisplayName,
  validatePassword,
  validateEmail } = require('../Validations/userValidations');
const controller = require('../Controllers/user');

router.post('/', validateDisplayName, validateEmail, validatePassword, controller.insertUserCtrl);

module.exports = router;