const { BlogPost } = require('../models');

const create = async (title, content, userId, categoriesIds) => {
  const createPost = await BlogPost.create({ title, content, userId, categoriesIds });
  return createPost;
};

module.exports = { create };
