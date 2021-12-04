const router = require('express').Router();
const userController = require('../controllers/userController');

const {  
  nameValidation,
  emailValidation,
  passwordValidation,
  emailExists } = require('../Validations/userValidation');

const validateToken = require('../Validations/tokenValidation');

router.get('/', validateToken, userController.getAllUsers);
router.get('/:id', validateToken, userController.getUserById);
router.post('/', 
nameValidation,
emailValidation,
passwordValidation,
emailExists, userController.createUser);

module.exports = router;