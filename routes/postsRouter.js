const express = require('express');
const PostsController = require('../controllers/postsController');

const { userAuth } = require('../middlewares/auth/validateAuth');
// const { postValidate, validateCategory } = require('../middlewares/postValidation');

const router = express.Router();

// router.post('/', userAuth, postValidate, validateCategory, PostsController.create);
router.get('/', userAuth, PostsController.findAll);
router.get('/:id', userAuth, PostsController.findByID);

module.exports = router;