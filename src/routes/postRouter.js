const router = require('express').Router();
const postController = require('../controller/post');
const { verifyToken } = require('../middleware/token');

router.use(verifyToken);

router.post('/', postController.createPost);

module.exports = router;