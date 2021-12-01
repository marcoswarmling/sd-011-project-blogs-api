const router = require('express').Router();
const UserController = require('../controllers/UserController');
const { validateJWT } = require('../middlewares/validateJWT');

const {
  displayNameLength,
  emailExists,
  emailValidation,
  emailAlreadyExists,
  passwordExists,
  passwordLength,
} = require('../middlewares/UserValidations');

const {
  validateFields,
  emailNotEmpty,
  passwordNotEmpty,
} = require('../middlewares/LoginValidations');

const Req1Validations = [
  displayNameLength,
  emailExists,
  emailValidation,
  emailAlreadyExists,
  passwordExists,
  passwordLength,
];

const Req2Validations = [
  emailNotEmpty,
  emailExists,
  passwordNotEmpty,
  passwordExists,
  validateFields,
];

// Req 1
router.post('/user', Req1Validations, UserController.create);

// Req 2
router.post('/login', Req2Validations, UserController.login);

// Req 3
router.get('/user', validateJWT, UserController.getAll);

// Req 4
router.get('/user/:id', validateJWT, UserController.getById);

module.exports = router;
