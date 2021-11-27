const router = require('express').Router();
const { validPostReq } = require('../validation/postsValidation');

const post = require('../controllers/postController');

const tokenValidation = require('../validation/tokenValidation');

router.post('/post', tokenValidation, validPostReq, post.createdNewPost);

router.get('/post', tokenValidation, post.getBlogPostAll);

router.get('/post/:id', tokenValidation, post.getBlogPostById);

module.exports = router;