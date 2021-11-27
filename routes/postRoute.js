const postRouter = require('express').Router();

const { createPost } = require('../controllers/postController');
const autenticateToken = require('../middlewares/authentication');

postRouter.post('/', autenticateToken, createPost);

module.exports = postRouter;