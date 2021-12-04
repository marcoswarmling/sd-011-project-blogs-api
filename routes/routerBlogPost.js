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
  chekpostExist,
} = require('../middleware');

const {
  controllerPostBlog,
  controllerGetPostsBlog,
  controllerGetPostsBlogId,
  controllerPutPostsBlogId,
  controllerDeletePostBlogId,
} = require('../controller/controllerBlogPost');

router.post('/',
  checkTitle, checkContent, checkCategoryIds,
  checkToken, checkValidToken, chekCategorisExist, controllerPostBlog);

router.get('/', checkToken, checkValidToken, controllerGetPostsBlog);

router.get('/:id', checkToken, checkValidToken, controllerGetPostsBlogId);

router.put('/:id',
  checkToken, checkValidToken, notPutcategories, checkUserAutorizationPutPostId,
  checkTitle, checkContent, controllerPutPostsBlogId);

router.delete('/:id',
  checkToken, checkValidToken, chekpostExist, checkUserAutorizationPutPostId,
  controllerDeletePostBlogId);

module.exports = router;
