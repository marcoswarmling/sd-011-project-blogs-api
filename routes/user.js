const router = require('express').Router();

const { registerUser } = require('../middlewares/user');
const {
  validateDisplayName,
  validatePassword,
  validateEmail,
} = require('../middlewares/validations/user');

router.post(
  '/',
  validateDisplayName,
  validatePassword,
  validateEmail,
  registerUser,
);

module.exports = router;