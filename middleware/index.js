const {
  checkContent,
  checkCategoryIds,
  checkTitle,
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
  checkPassword,
  checkToken,
  checkValidToken,
  cheNameCategories,
};
