const router = require('express').Router();

const { validateToken } = require('../middlewares/validateJWT');
const { validatePost } = require('../middlewares/postValidation');
const postController = require('../controllers/postController');

router.post('/', validateToken, validatePost, postController.createPost);

module.exports = router;
