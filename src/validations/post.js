const { Category } = require('../models');
const {
  titleIsRequired, contentIsRequired,
  categoryIdsIsRequired, categoryIdsNotFound,
} = require('../err');

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
  categoryIds.forEach(async (id) => {
    const categories = await Category.findByPk(id);
    if (!categories) {
      return categoryIdsNotFound;
    }
  });
  return null;
};

module.exports = {
  verifyTitle,
  verifyContent,
  verifyCategoryIds,
};
