const router = require('express').Router();
const { validPostReq } = require('../validation/postsValidation');

const post = require('../controllers/postController');

const tokenValidation = require('../validation/tokenValidation');

router.use('/post', tokenValidation, validPostReq, post.createdNewPost);

module.exports = router;