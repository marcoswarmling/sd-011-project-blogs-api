const express = require('express');

const postController = require('../controllers/postController');

const postValidations = require('../middlewares/validations/post/postValidations');

const tokenValidation = require('../middlewares/validations/token/tokenValidation');

const postRouter = express.Router();

postRouter.post('/', tokenValidation, postValidations, postController.postcreate);

postRouter.get('/', tokenValidation, postController.getPosts);

postRouter.get('/:id', tokenValidation, postController.getPostId);

module.exports = postRouter;