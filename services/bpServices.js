const { BlogPost } = require('../models');

const createBlogPost = async ({ title, categoryIds, content, userId }) => {
  const newPost = await BlogPost.create({ title, categoryIds, content, userId });

  return newPost;
};

module.exports = {
  createBlogPost,
};