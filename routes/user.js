const router = require('express').Router();
const UserController = require('../controllers/UserController');
const { 
  emailValidation,
  nameLengthValidation,
  passwordValidation,
  checkEmailAlreadyRegistered } = require('../middlewares/usersValidations');
const tokenValidation = require('../middlewares/tokenValidation');

const validations = [emailValidation, nameLengthValidation,
   passwordValidation, checkEmailAlreadyRegistered];

router.get('/', tokenValidation, UserController.getAllUsers);
router.post('/', validations, UserController.createUser);

module.exports = router;
