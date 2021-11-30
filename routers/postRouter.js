const router = require('express').Router();
const categoriesController = require('../controller/categoriesController');
const { checkPost } = require('../middleware/post');
const { authorizationToken } = require('../middleware/user');

router.post('/post', authorizationToken, categoriesController.create);

module.exports = router;