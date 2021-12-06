const { BlogPosts } = require('../models');

const createBlogposts = async ({ title, content, categoryIds }) => {
  const blogs = await BlogPosts.create({ title, content, categoryIds });
  return blogs;
};

module.exports = { createBlogposts };
