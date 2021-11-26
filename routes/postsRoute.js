const postsRouter = require('express').Router();

const { createPostController } = require('../controllers/postsController');
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

module.exports = postsRouter;