const postRouter = require('express').Router();

const { createPost, getAllPosts, getPostById, updatePost, deletePost, getPostsByQuery,
  } = require('../controllers/postController');
const autenticateToken = require('../middlewares/authentication');
const { validatePost, validateUpdatePost } = require('../middlewares/validation');

postRouter.post('/', autenticateToken, validatePost, createPost);
postRouter.get('/', autenticateToken, getAllPosts);
postRouter.get('/search', autenticateToken, getPostsByQuery);
postRouter.get('/:id', autenticateToken, getPostById);
postRouter.put('/:id', autenticateToken, validateUpdatePost, updatePost);
postRouter.delete('/:id', autenticateToken, deletePost);

module.exports = postRouter;