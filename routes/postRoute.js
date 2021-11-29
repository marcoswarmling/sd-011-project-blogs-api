const postRouter = require('express').Router();

const { createPost, getAllPosts, getPostById } = require('../controllers/postController');
const autenticateToken = require('../middlewares/authentication');
const { validatePost } = require('../middlewares/validation');

postRouter.post('/', autenticateToken, validatePost, createPost);
postRouter.get('/', autenticateToken, getAllPosts);
postRouter.get('/:id', autenticateToken, getPostById);

module.exports = postRouter;