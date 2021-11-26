const express = require('express');
const postController = require('../controllers/postController');
const { verifyToken } = require('../services/utils/validators');

const route = express.Router();

route.post('/', verifyToken, postController.createPost);

module.exports = route;
