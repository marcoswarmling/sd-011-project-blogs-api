const router = require('express').Router();

const {
  checkToken,
  checkValidToken,
  checkContent,
  checkCategoryIds,
  checkTitle,
  chekCategorisExist,
  checkUserAutorizationPutPostId,
  notPutcategories,
} = require('../middleware');

const {
  controllerPostBlog,
  controllerGetPostsBlog,
  controllerGetPostsBlogId,
  controllerPutPostsBlogId,
} = require('../controller/controllerBlogPost');

router.post('/',
  checkTitle, checkContent, checkCategoryIds,
  checkToken, checkValidToken, chekCategorisExist, controllerPostBlog);

router.get('/', checkToken, checkValidToken, controllerGetPostsBlog);

router.get('/:id', checkToken, checkValidToken, controllerGetPostsBlogId);

router.put('/:id',
  checkToken, checkValidToken, notPutcategories, checkUserAutorizationPutPostId,
  checkTitle, checkContent, controllerPutPostsBlogId);

module.exports = router;
