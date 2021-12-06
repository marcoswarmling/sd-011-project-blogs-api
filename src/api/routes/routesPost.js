const router = require('express').Router();
const { validateSchema } = require('../../middlewares/validateSchema');
const { postSchema } = require('../../schemas/postSchema');
const { createPost } = require('../../controllers/postController');

router.post('/', validateSchema(postSchema), createPost);

module.exports = router;