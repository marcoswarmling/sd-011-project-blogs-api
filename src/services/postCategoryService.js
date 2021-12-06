const { PostCategory } = require('../models');

module.exports = {
  create: async ({ postId, categoryId }) => PostCategory.create({ postId, categoryId }),
};