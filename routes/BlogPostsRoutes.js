const router = require('express').Router();
const Validations = require('../middlewares/index');
const BlogPostController = require('../controllers/blogPostController');

router.post(
  '/', 
  Validations.validateJWT,
  Validations.postValidation,
  BlogPostController.post,
);

router.get('/', Validations.validateJWT, BlogPostController.getAll);

module.exports = router;