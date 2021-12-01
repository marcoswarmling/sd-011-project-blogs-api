const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/userController');
const { newUserValidation } = require('../middlewares/userValidation');
// const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', rescue(newUserValidation), rescue(userController.findOrCreate));

module.exports = router;
