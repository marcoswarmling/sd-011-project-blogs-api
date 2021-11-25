const router = require('express').Router();
const usersController = require('../controllers/users');
const { 
  validateDisplayName,
  validateEmail,
  validatePassword } = require('../middlewares/validateNewUser');

router.post(
  '/', 
  validateDisplayName,
  validateEmail,
  validatePassword,
  usersController.createUser,
);

module.exports = router;