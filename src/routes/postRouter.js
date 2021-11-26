const router = require('express').Router();
const postController = require('../controller/post');
const { verifyToken } = require('../middleware/token');

router.use(verifyToken);

router.get('/', postController.createPost);

module.exports = router;