const express = require('express');
const userController = require('../controllers/User');
const validateUserRegistration = require('../middlewares/validateUserRegistration');
const { validateJWT } = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateUserRegistration, userController.createNewUser);
router.get('/', validateJWT, userController.getAllUsers);

module.exports = router;