const router = require('express').Router();
const { 
  nameValidator,
  emailValidator,
  passwordValidator,
} = require('../middlewares/userValidation');

const {
  createUser,
} = require('../controllers/userController');

router.post('/user', nameValidator, emailValidator, passwordValidator, createUser);

module.exports = router;