const express = require('express');
// const rescue = require('rescue');
const userController = require('../controllers/userController');
const { newUserValidation } = require('../middlewares/userValidation');
// const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', newUserValidation, userController.createUser);

module.exports = router;
