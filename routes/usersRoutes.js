const router = require('express').Router();
const usersController = require('../controllers/users');
const validateJWT = require('../middlewares/validateJWT');
const { 
  validateDisplayName,
  validateEmail,
  validatePassword } = require('../middlewares/validations');

router.post(
  '/', 
  validateDisplayName,
  validateEmail,
  validatePassword,
  usersController.createUser,
);

router.get(
  '/:id',
  validateJWT,
  usersController.getUserById,
);

router.get(
  '/',
  validateJWT,
  usersController.getAllUsers,  
);

module.exports = router;