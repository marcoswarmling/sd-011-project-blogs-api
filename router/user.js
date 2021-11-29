const router = require('express').Router();
const {     
  validEmail,
  validEmailExist,
  validDisplayName,
  validPassword,
} = require('../validation/userValidation');
const { createUser, userController } = require('../controllers/userController');
const tokenValidation = require('../middlewares/tokenValidation');

router.get('/', tokenValidation, userController.getAllUsers);
router.post('/', 
  validDisplayName, validEmail, validPassword, validEmailExist, createUser);

module.exports = router;