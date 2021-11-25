const router = require('express').Router();
const {     
  validEmail,
  validReqUsers,
} = require('../validation/userValidation');
const user = require('../controllers/userController');

router.post('/user', validReqUsers, validEmail, user.createNewUser);

module.exports = router;
