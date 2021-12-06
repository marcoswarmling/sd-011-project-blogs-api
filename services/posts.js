const models = require('../models');

const createNewPost = async ({ title, content, userId }) => 
  models.BlogPosts.create({ title, content, userId });

const getAllPosts = async () => models.BlogPosts.findAll({
  include: [
    {
      model: models.Users,
      as: 'user',
      attributes: { exclude: ['password'] },
      },
    {
      model: models.Categories,
      as: 'categories',
      through: { attributes: [] },
      attributes: { exclude: ['PostsCategories'] },
    },
  ],
});

module.exports = {
  createNewPost,
  getAllPosts,
};
