const express = require('express');

const postController = require('../controllers/postController');

const authValidator = require('../middlewares/validations/auth/authValidator');
const newPostValidator = require('../middlewares/validations/post/newPostValidator');

const postRouter = express.Router();

postRouter.post('/', authValidator, newPostValidator, postController.create);
postRouter.get('/:id', authValidator, postController.getById);
postRouter.get('/', authValidator, postController.getAll);
postRouter.put('/:id', authValidator, postController.update);

module.exports = postRouter;
