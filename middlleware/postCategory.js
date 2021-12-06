const db = require('../models');

const postCategory = async (postId, categoryIds) => {
  await categoryIds.forEach((category) => {
    db.PostCategories.create({ postId, categoryId: category });
  });
};

module.exports = postCategory;