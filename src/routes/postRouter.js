const express = require('express');

const postController = require('../controllers/postController');

const authValidator = require('../middlewares/validations/auth/authValidator');

const postRouter = express.Router();

postRouter.post('/', authValidator, postController.create);

module.exports = postRouter;
