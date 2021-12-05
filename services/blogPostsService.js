const { BlogPosts } = require('../models');

const create = async ({ title, categoryIds, content, userId }) => {
  const blogPost = await BlogPosts.create({ title, categoryIds, content });

  return { ...blogPost.dataValues, userId };
};

module.exports = {
  create,
};
