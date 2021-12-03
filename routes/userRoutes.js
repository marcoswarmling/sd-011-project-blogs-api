const router = require('express').Router();

const userController = require('../controllers/userController');

const { validationFields } = require('../validations');
const { emailAlredyExists } = require('../validations/UserFields/email');

const authToken = require('../validations/authToken');

router.post('/',
  validationFields,
  emailAlredyExists,
  userController.registerUser);

router.get('/',
  authToken,
  userController.searchAllUsers);

router.get('/:id',
  authToken,
  userController.searchUser);

router.delete('/me',
  authToken,
  userController.deleteUser);

module.exports = router;