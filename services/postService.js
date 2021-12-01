const { BlogPost } = require('../models');

const registerNewPost = async (title, content, categoryIds, userId) => {
  const result = await BlogPost.create({ userId, title, content });
  await result.setCategories(categoryIds);

  return result;
};

module.exports = { registerNewPost };