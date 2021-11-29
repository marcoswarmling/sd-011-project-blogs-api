const router = require('express').Router();
const userController = require('../controllers/userController');

const {  
    nameValidation,
    emailValidation,
    passwordValidation,
    emailExists } = require('../Validations/userValidation');

router.get('/', userController.getAllUsers);
router.post('/', 
nameValidation,
emailValidation,
passwordValidation,
emailExists, userController.createUser);

module.exports = router;