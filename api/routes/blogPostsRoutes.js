const router = require('express').Router();
const rescue = require('express-rescue');

const blogPostsController = require('../controllers/blogPostsController');

const middleware = require('../middlewares/validates');

router.post('/', middleware.validatePosts, rescue(blogPostsController.createPostBlog));

router.get('/', middleware.validateToken, rescue(blogPostsController.findAllPostsBlog));

router.get('/:id', middleware.validateToken, rescue(blogPostsController.findPostById));

router.put('/:id', middleware.postsCanBeUpdate, rescue(blogPostsController.updatePost));

// router.delete('/:id', middleware.validateExcludePost, rescue(blogPostsController.deletePostUser));

router.delete('/:id', middleware.validateExcludePost, rescue(blogPostsController.deletePostUser));

module.exports = router;
