const router = require('express').Router();
const postController = require('../controller/categoriesController');
const { checkPost } = require('../middleware/post');
const { authorizationToken } = require('../middleware/user');

router.post('/post', checkPost, authorizationToken, postController.create);

module.exports = router;