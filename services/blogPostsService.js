const { BlogPosts, Users, Categories } = require('../models');

const create = async ({ title, categoryIds, content, userId }) => {
  const blogPost = await BlogPosts.create({ title, categoryIds, content });

  return { ...blogPost.dataValues, userId };
};

const findAll = async () => {
  const blogPosts = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  return blogPosts;
};

module.exports = {
  create,
  findAll,
};
