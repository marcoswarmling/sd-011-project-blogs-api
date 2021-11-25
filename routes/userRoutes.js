const router = require('express').Router();
const {
  validReqUsers,
  loginValid,
  jwtValid,
} = require('../middleware/userMiddlw');
const {
  userLogin,
  userLoginValidate,
  getAllUsers,
  getUser,
} = require('../controllers/userController');

router.post('/user', validReqUsers, userLogin);

router.post('/login', loginValid, userLoginValidate);

router.get('/user', jwtValid, getAllUsers);

router.get('/user/:id', jwtValid, getUser);

module.exports = router;