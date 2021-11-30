const { BlogPosts } = require('../models');

const create = async ({ title, content, userId }) => BlogPosts.create({ title, content, userId });

module.exports = {
  create,
};
