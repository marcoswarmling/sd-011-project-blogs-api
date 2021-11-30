const router = require('express').Router();
const validateJWT = require('../auth/validateJWT');
const blogPostController = require('../controllers/blogPostController');

router.post('/', validateJWT, blogPostController.create);
/* router.get('/', validateJWT, blogPostController.getAllCategories); */

module.exports = router;