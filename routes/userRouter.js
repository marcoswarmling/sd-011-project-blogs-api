const express = require('express');
const UserController = require('../controllers/userController');

const { UserPostValidate, validateEmailUnique } = require('../middlewares/userValidation');

const router = express.Router();

router.post('/', UserPostValidate, validateEmailUnique, UserController.create);

module.exports = router;