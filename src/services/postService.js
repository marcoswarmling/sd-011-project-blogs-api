const { BlogPost } = require('../models');

const createPost = async ({ title, content, categoryIds }) => {
  const newBlogPost = await BlogPost.create({ title, content, categoryIds });
  return newBlogPost;
};

const getPosts = async () => {
  const blogPosts = await BlogPost.findAll();
  return blogPosts;
};

const getPostById = async (id) => {
  const blogPosts = await BlogPost.findByPk(id);
  console.log(`${id} id do service`);
  return blogPosts;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};