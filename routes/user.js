const router = require('express').Router();
const UserController = require('../controllers/UserController');
const { 
  emailValidation,
  nameLengthValidation,
  passwordValidation,
  checkEmailAlreadyRegistered } = require('../middlewares/usersValidations');

const validations = [emailValidation, nameLengthValidation,
   passwordValidation, checkEmailAlreadyRegistered];

router.get('/', UserController.getAllUsers);
router.post('/', validations, UserController.createUser);

module.exports = router;
