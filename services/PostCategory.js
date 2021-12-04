const { PostCategory } = require('../models');

const createPostCategory = async (postId, categoryId) => {
  await PostCategory.create({ postId, categoryId });
};

const createPostsCategories = async (postId, categoryIds) => {
  for (let i = 0; i < categoryIds.length; i += 1) {
    const categoryId = categoryIds[i];

    createPostCategory(postId, categoryId);
  }
};

module.exports = {
  createPostsCategories,
};
