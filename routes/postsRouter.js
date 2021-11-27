const express = require('express');
const PostsController = require('../controllers/postsController');

const { userAuth } = require('../middlewares/auth/validateAuth');
// const { postValidate, validateCategory } = require('../middlewares/postValidation');

const router = express.Router();

// userAuth, postValidate, validateCategory,
router.post('/', userAuth, PostsController.create);
router.get('/', userAuth, PostsController.findAll);

module.exports = router;