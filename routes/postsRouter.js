const express = require('express');
const PostsController = require('../controllers/postsController');

const { userAuth } = require('../middlewares/auth/validateAuth');
const { postValidate } = require('../middlewares/postValidation');

const router = express.Router();

router.post('/', userAuth, postValidate, PostsController.create);

module.exports = router;