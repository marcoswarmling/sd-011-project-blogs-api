const express = require('express');
const UserController = require('../controllers/userController');

const { UserPostValidate, validateEmailUnique } = require('../middlewares/userValidation');
const { userAuth } = require('../middlewares/auth/validateAuth');

const router = express.Router();

router.post('/', UserPostValidate, validateEmailUnique, UserController.create);
router.get('/', userAuth, UserController.findAll);
router.get('/:id', userAuth, UserController.findByID);
router.delete('/me', userAuth, UserController.deleteByID);

module.exports = router;