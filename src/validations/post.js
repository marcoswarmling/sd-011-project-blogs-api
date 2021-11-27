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

const verifyCategoryIds = async (categoryIds) => {
  if (!categoryIds || categoryIds.length === 0) {
    return categoryIdsIsRequired;
  }
  const allCategories = await Category.findAll();
  const getAllIndexOfAllCategories = {};
  allCategories.forEach(({ dataValues }) => {
    getAllIndexOfAllCategories[dataValues.id] = dataValues.id;
  });
  let err = null;
  categoryIds.forEach((id) => {
    if (!getAllIndexOfAllCategories[id]) {
      err = categoryIdsNotFound;
    }
  });
  return err;
};

module.exports = {
  verifyTitle,
  verifyContent,
  verifyCategoryIds,
};
