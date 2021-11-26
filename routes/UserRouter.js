const router = require('express').Router();
const UserController = require('../controllers/UserController');
// const validateJWT = require('../middlewares/validateJWT');

const {
  displayNameLength,
  emailExists,
  emailValidation,
  emailAlreadyExists,
  passwordExists,
  passwordLength,
} = require('../middlewares/UserValidations');

const Req1Validations = [
  displayNameLength,
  emailExists,
  emailValidation,
  emailAlreadyExists,
  passwordExists,
  passwordLength,
];

// Req 1
router.post('/user', Req1Validations, UserController.create);

module.exports = router;
