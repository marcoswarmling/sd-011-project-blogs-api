const rescue = require('express-rescue');
const { BlogPost, User, Category } = require('../models');

const getAll = rescue(async (req, res) => {
  const users = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return res.status(200).json(users);
});

module.exports = {
  getAll,
};