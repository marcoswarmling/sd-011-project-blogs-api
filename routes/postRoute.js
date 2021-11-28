const postRouter = require('express').Router();

const { createPost } = require('../controllers/postController');
const autenticateToken = require('../middlewares/authentication');
const { validatePost } = require('../middlewares/validation');

postRouter.post('/', autenticateToken, validatePost, createPost);

module.exports = postRouter;