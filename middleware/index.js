const {
  checkContent,
  checkCategoryIds,
  checkTitle,
  chekCategorisExist,
  checkUserAutorizationPutPostId,
  notPutcategories,
  chekpostExist,
} = require('./middlewareBlogPost');

const { cheNameCategories } = require('./middlewareCategories');

const {
  checkName,
  checkEmail,
  checkPassword,
} = require('./middlewareUser');

const {
  checkToken,
  checkValidToken,
} = require('./middlewareToken');

module.exports = {
  checkContent,
  checkCategoryIds,
  checkTitle,
  checkName,
  checkEmail,
  chekCategorisExist,
  checkPassword,
  checkToken,
  checkValidToken,
  cheNameCategories,
  checkUserAutorizationPutPostId,
  notPutcategories,
  chekpostExist,
};
