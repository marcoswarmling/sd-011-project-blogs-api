const router = require('express').Router();
const blogPostsController = require('../controllers/blogPostsController');
const validateJWT = require('../auth/validateJWT');

router.post('/', validateJWT, blogPostsController.createPost);
// router.get('/', validateJWT, categoriesController.getCategories);

module.exports = router;
