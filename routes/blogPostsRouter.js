const router = require('express').Router();

const blogPostsController = require('../controllers/blogPostsController');
const { tokenValidate } = require('../services/validateToken');

router.get('/post', tokenValidate, blogPostsController.getAllPosts);

module.exports = router;
