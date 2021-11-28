const { BlogPosts } = require('../models/index');

const getAllBlogPosts = async () => {
  const blogpostsFindAll = await BlogPosts.findAll();
  return blogpostsFindAll;
};

const createBlogPosts = async (title, content) => {
  const blogpostsCreate = await BlogPosts.create({ title, content });
  return blogpostsCreate;
};

module.exports = { createBlogPosts, getAllBlogPosts };