const { BlogPost } = require('../../models');

const create = async (title, content, userId) => {
  const newBlogPost = await BlogPost.create({ title, content, userId });
  return newBlogPost;
};

const getAll = async () => {
  const getAllBlogPosts = await BlogPost.findAll({ include: [{ all: true }] });
  return getAllBlogPosts;
};

module.exports = { create, getAll };
