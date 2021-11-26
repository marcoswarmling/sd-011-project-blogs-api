const router = require('express').Router();
const { authenticationLogin } = require('../controllers/loginControllers');

const {
  isValidateEmailBinding,
  isisValidatePasswordBinding,
  isValidatePassword,
  isValidateEmail,
} = require('../middlewares/validateLogin');

router.post('/',
  isValidateEmailBinding,
  isisValidatePasswordBinding,
  isValidateEmail,
  isValidatePassword,
  authenticationLogin);

module.exports = router; 