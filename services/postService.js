const { BlogPost } = require('../models');
/* const { User } = require('../models'); */

const create = async (title, content, categoryIds, userId) => {
  const response = await BlogPost.create({
    title,
    content,
    categoryIds,
    userId,
  });
  return response;
};

module.exports = { create };