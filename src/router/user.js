const router = require('express').Router();
const {     
  validEmail,
  validReqUsers,
} = require('../validation/userValidation');
const user = require('../controllers/userController');
const tokenValidation = require('../validation/tokenValidation');

router.post('/user', validReqUsers, validEmail, user.createNewUser);
router.get('/user', tokenValidation, user.getAllUsers);
router.get('/user/:id', tokenValidation, user.getUserById);

module.exports = router;
