const router = require('express').Router();

const userController = require('../controllers/userController');

const { validationFields } = require('../validations');
const { emailAlredyExists } = require('../validations/email');

const authToken = require('../validations/authToken');

router.post('/',
  validationFields,
  emailAlredyExists,
  userController.registerUser);

router.get('/',
  authToken,
  userController.searchAllUsers);

module.exports = router;