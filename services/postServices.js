const { BlogPosts, Users, Categories } = require('../models');

const create = async ({ title, content, userId }) => BlogPosts.create({ title, content, userId });

const findAll = async () => BlogPosts.findAll({
  include: [
    {
      model: Users,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Categories,
      as: 'categories',
      through: { attributes: [] },
      attributes: { exclude: ['PostsCategories'] },
    },
  ],
});

module.exports = {
  create,
  findAll,
};
