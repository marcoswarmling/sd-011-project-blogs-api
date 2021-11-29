const router = require('express').Router();

const {
  checkToken,
  checkValidToken,
  checkContent,
  checkCategoryIds,
  checkTitle,
} = require('../middleware');

const { controllerPostBlog } = require('../controller/controllerBlogPost');

router.post('/',
  checkTitle, checkContent, checkCategoryIds,
  checkToken, checkValidToken, controllerPostBlog);

module.exports = router;
