const router = require('express').Router();
const loginController = require('../controllers/login');
const { 
  validateEmailLogin,
  validatePasswordLogin } = require('../middlewares/validations');

router.post(
  '/',
  validateEmailLogin,
  validatePasswordLogin,
  loginController.login,
);

module.exports = router;