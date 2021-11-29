const postsRouter = require('express').Router();

const { 
  createPostController, 
  getAllPostsController, 
  getPostByIdController,
  updatePostController,
} = require('../controllers/postsController');

const { 
  validatePostFields, 
  validateExistingCategories,
  validatePostFieldsToUpdate,
  validateUserPost,
} = require('../middlewares/postsValidations');

const { checkValidToken } = require('../middlewares/userValidations');

postsRouter.post(
  '/',
  validatePostFields,
  validateExistingCategories,
  checkValidToken,
  createPostController,
);

postsRouter.get(
  '/',
  checkValidToken,
  getAllPostsController,
);

postsRouter.get(
  '/:id',
  checkValidToken,
  getPostByIdController,
);

postsRouter.put(
  '/:id',
  checkValidToken,
  validateUserPost,
  validatePostFieldsToUpdate,
  updatePostController,
);

module.exports = postsRouter;