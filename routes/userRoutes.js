const router = require('express').Router();

const userController = require('../controllers/userController');

const { validationFields } = require('../validations');
const { emailAlredyExists } = require('../validations/email');

router.post('/',
  validationFields,
  emailAlredyExists,
  userController.registerUser);

module.exports = router;