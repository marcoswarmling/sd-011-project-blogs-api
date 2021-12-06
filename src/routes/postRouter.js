const express = require('express');

const postController = require('../controllers/postController');

const authValidator = require('../middlewares/validations/authValidator');
const postValidator = require('../middlewares/validations/postValidator');

const postRouter = express.Router();

postRouter.post('/', authValidator, postValidator, postController.create);
postRouter.get('/', authValidator, postController.getAll);

module.exports = postRouter;