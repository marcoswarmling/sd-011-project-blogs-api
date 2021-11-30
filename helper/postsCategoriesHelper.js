const db = require('../models');

const postCategoriesHelper = async (postId, categoryIds) => {
  await categoryIds.forEach((category) => {
    db.PostsCategories.create({ postId, categoryId: category });
  });
};

module.exports = postCategoriesHelper;
