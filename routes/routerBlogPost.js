const router = require('express').Router();

const {
  checkToken,
  checkValidToken,
  checkContent,
  checkCategoryIds,
  checkTitle,
  chekCategorisExist,
} = require('../middleware');

const { controllerPostBlog } = require('../controller/controllerBlogPost');

router.post('/',
  checkTitle, checkContent, checkCategoryIds,
  checkToken, checkValidToken, chekCategorisExist, controllerPostBlog);

module.exports = router;
