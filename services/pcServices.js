const { PostsCategory } = require('../models');

const createPC = async ({ postId, categoryId }) => {
  const newPC = await PostsCategory.create({ postId, categoryId });

  return newPC;
};

module.exports = {
  createPC,
};
