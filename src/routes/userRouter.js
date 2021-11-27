const express = require('express');
// const rescue = require('rescue');
const userController = require('../controllers/userController');
// const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', userController.createUser);

module.exports = router;
