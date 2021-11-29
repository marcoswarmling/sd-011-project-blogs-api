const router = require('express').Router();
const BlogPostController = require('../controllers/CategoryController');
const { validateJWT } = require('../middlewares/validateJWT');

const {
  titleExists,
  contentExists,
  categoryIdExists,
  categoryIdIsRequired,
} = require('../middlewares/BlogPostValidations');

const req7Validations = [
  titleExists,
  contentExists,
  categoryIdExists,
  categoryIdIsRequired,
  validateJWT,
];

// Req 7
router.post('/post', req7Validations, BlogPostController.create);

module.exports = router;