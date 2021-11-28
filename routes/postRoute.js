const postRouter = require('express').Router();

const { createPost, getAllPosts } = require('../controllers/postController');
const autenticateToken = require('../middlewares/authentication');
const { validatePost } = require('../middlewares/validation');

postRouter.post('/', autenticateToken, validatePost, createPost);
postRouter.get('/', autenticateToken, getAllPosts);

module.exports = postRouter;