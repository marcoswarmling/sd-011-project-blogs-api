const express = require('express');

const router = express.Router();
const { validateJWT } = require('../middlewares/validateJWT');
const controllers = require('../controllers/postsController');
const { validateBlogPost } = require('../middlewares/validation');

router.post('/', validateJWT, validateBlogPost, controllers.create);
// router.get('/', validateJWT, controllers.getAll);

module.exports = router;