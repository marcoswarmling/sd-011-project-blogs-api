const router = require('express').Router();
const { 
  nameValidator,
  emailValidator,
  passwordValidator,
} = require('../middlewares/userValidation');

const {
  emailFieldValidator,
  passwordFieldValidator,
} = require('../middlewares/loginValidation');

const {
  createUser,
  login,
  getAll,
  getUserById,
} = require('../controllers/userController');

const { 
  validateTokenExistence,
  validateToken,
} = require('../middlewares/auth/tokenValidation');

router.post(
  '/user',
  nameValidator,
  emailValidator,
  passwordValidator,
  createUser,
  );

router.post(
  '/login',
  emailValidator,
  passwordValidator,
  emailFieldValidator,
  passwordFieldValidator,
  login,
  );

router.get(
    '/user',
    validateTokenExistence,
    validateToken,
    getAll,
  );

  router.get(
    '/user/:id',
    validateTokenExistence,
    validateToken,
    getUserById,
  );

module.exports = router;