const { BlogPost } = require('../models');

const createPost = async ({ title, content, categoryIds }) => {
  const newBlogPost = await BlogPost.create({ title, content, categoryIds });
  return newBlogPost;
};

const getPosts = async () => {
  const blogPosts = await BlogPost.findAll();
  return blogPosts;
};

module.exports = {
  createPost,
  getPosts,
};