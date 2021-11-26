const { titleIsRequired, contentIsRequired, categoryIdsIsRequired } = require('../err');

const verifyTitle = (title) => {
  if (!title || title.length === 0) {
    return titleIsRequired;
  }
  return null;
};

const verifyContent = (content) => {
  if (!content || content.length === 0) {
    return contentIsRequired;
  }
  return null;
};

const verifyCategoryIds = (categoryIds) => {
  if (!categoryIds || categoryIds.length === 0) {
    return categoryIdsIsRequired;
  }
  return null;
};

module.exports = {
  verifyTitle,
  verifyContent,
  verifyCategoryIds,
};
