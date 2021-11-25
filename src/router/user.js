const router = require('express').Router();
const {     
  validEmail,
  validReqUsers,
} = require('../validation/userValidation');
const user = require('../controllers/userController');
const tokenValidation = require('../validation/tokenValidation');

router.post('/user', validReqUsers, validEmail, user.createNewUser);
router.get('/user', tokenValidation, user.getAllUsers);

module.exports = router;
