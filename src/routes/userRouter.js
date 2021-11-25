const express = require('express');

const router = express.Router();
const {
  emailExists,
  userAuthentication,
  jwtAuthorization,
} = require('../middleware/userMiddleware');
const userController = require('../controller/userController');

router.post('/', userAuthentication, emailExists, userController.createUser);
router.get('/', jwtAuthorization, userController.getAllUsers);
router.get('/:id', jwtAuthorization, userController.getUserById);
module.exports = router;
