const { BlogPosts } = require('../models');

const create = async ({ title, content, categoryIds }) => {
  const newPost = await BlogPosts.create({ title, content, categoryIds });
  if (!newPost) {
    throw new Error('Invalid Operation');
  }
 return newPost;
};

module.exports = {
  create,
}; 