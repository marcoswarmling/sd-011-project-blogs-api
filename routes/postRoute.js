const express = require('express');
const postController = require('../controllers/postController');
const { verifyToken } = require('../services/utils/validators');

const route = express.Router();

route.post('/', verifyToken, postController.createPost);
route.get('/', verifyToken, postController.getPosts);
route.get('/:id', verifyToken, postController.getPostsById);

module.exports = route;
