const { BlogPost } = require('../../models');

const create = async (id, title, content, userId) => {
  const newBlogPost = await BlogPost.create({ id, title, content, userId });
  return newBlogPost;
};

module.exports = { create };
