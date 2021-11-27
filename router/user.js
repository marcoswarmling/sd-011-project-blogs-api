const router = require('express').Router();
const {     
  validEmail,
  validEmailExist,
  validDisplayName,
  validPassword,
} = require('../validation/userValidation');
const user = require('../controllers/userController');

router.post('/user', 
  validDisplayName, validEmail, validPassword, validEmailExist, user.createNewUser);

module.exports = router;