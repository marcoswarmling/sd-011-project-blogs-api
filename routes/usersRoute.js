const express = require('express');
const usersController = require('../controllers/usersController');
const { verifyToken } = require('../services/utils/validators');

const route = express.Router();

route.post('/', usersController.createUser);
route.get('/', verifyToken, usersController.getAllUsers);

module.exports = route;
