const router = require('express').Router();
const controllerCreatePost = require('../controller/controllerCreatePost');
const controllerGetAllPosts = require('../controller/controllerGetAllPosts');
const {
  validedToken,
  validedCategoryId,
  validedTitle,
  validedContent,
} = require('../middleware');

router.post(
  '/',
  validedToken,
  validedTitle,
  validedContent,
  validedCategoryId,
  controllerCreatePost,
);
 router.get('/', validedToken, controllerGetAllPosts);
module.exports = router;
