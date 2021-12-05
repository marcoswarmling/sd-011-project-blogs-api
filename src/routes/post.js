const router = require('express').Router();
const { postController } = require('../controllers');
const { validateJWT } = require('../middlewares');

router.post('/', validateJWT, postController.createPost);
router.get('/', validateJWT, postController.getAllPosts);

module.exports = router;
