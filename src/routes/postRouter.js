const express = require('express');

const postController = require('../controllers/postController');

const authValidator = require('../middlewares/validations/auth/authValidator');
const newPostValidator = require('../middlewares/validations/post/newPostValidator');
const updatePostValidator = require('../middlewares/validations/post/updatePostValidator');
const postOwnership = require('../middlewares/validations/post/postOwnership');

const postRouter = express.Router();

postRouter.post('/', authValidator, newPostValidator, postController.create);
postRouter.get('/search', authValidator, postController.search);
postRouter.get('/:id', authValidator, postController.getById);
postRouter.get('/', authValidator, postController.getAll);
postRouter.put('/:id', authValidator, updatePostValidator, postOwnership, postController.update);
postRouter.delete('/:id', authValidator, postOwnership, postController.delete);

module.exports = postRouter;
