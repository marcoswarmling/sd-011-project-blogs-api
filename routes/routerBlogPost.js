const router = require('express').Router();

const {
  checkToken,
  checkValidToken,
  checkContent,
  checkCategoryIds,
  checkTitle,
  chekCategorisExist,
} = require('../middleware');

const {
  controllerPostBlog,
  controllerGetPostsBlog,
  controllerGetPostsBlogId,
} = require('../controller/controllerBlogPost');

router.post('/',
  checkTitle, checkContent, checkCategoryIds,
  checkToken, checkValidToken, chekCategorisExist, controllerPostBlog);

router.get('/', checkToken, checkValidToken, controllerGetPostsBlog);

router.get('/:id', checkToken, checkValidToken, controllerGetPostsBlogId);

module.exports = router;
