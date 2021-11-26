const express = require('express');

const postController = require('../controllers/postController');

const authValidator = require('../middlewares/validations/auth/authValidator');
const postValidator = require('../middlewares/validations/post/postValidator');

const postRouter = express.Router();

postRouter.post('/', authValidator, postValidator, postController.create);
postRouter.get('/', authValidator, postController.getAll);

module.exports = postRouter;
