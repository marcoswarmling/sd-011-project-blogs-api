const router = require('express').Router();

const { validateToken } = require('../middlewares/validateJWT');
const { validatePost } = require('../middlewares/postValidation');
const postController = require('../')

router.post('/', validateToken, validatePost,)

module.exports = router;