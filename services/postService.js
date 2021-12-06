const { BlogPosts } = require('../models');

const createPost = async (post) => {
  const result = await BlogPosts.create(post);
  return result;
};

module.exports = {
  createPost,
};