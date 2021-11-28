const postsRouter = require('express').Router();

const { createPostController, getAllPostsController } = require('../controllers/postsController');
const { 
  validatePostFields, 
  validateExistingCategories,
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

module.exports = postsRouter;