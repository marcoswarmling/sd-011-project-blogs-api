const router = require('express').Router();
const { createLogin } = require('../controllers/loginControllers');

const {
  validateLoginJoi,
  validateLoginData,
} = require('../middlewares/validateLogin');

router.post('/',
  validateLoginJoi,
  validateLoginData,
  // isValidateEmailBinding,
  // isisValidatePasswordBinding,
  // isValidateEmail,
  // isValidatePassword,
  createLogin);

module.exports = router; 