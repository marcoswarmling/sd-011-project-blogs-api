const { BlogPosts } = require('../models/index');

const getAllBlogPosts = async () => {
  const blogpostsFindAll = await BlogPosts.findAll();
  return blogpostsFindAll;
};

const createBlogPosts = async ({ title, content, id }) => {
  const blogpostsCreate = await BlogPosts.create({ userId: id, title, content });
  return blogpostsCreate;
};

module.exports = { createBlogPosts, getAllBlogPosts };