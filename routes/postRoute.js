const router = require('express').Router();
const controllerCreatePost = require('../controller/controllerCreatePost');
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

module.exports = router;
