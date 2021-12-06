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

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const postExists = await BlogPost.findOne({ where: { id } });
  if (!postExists) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  const posts = await BlogPost.findOne({
    where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
  });
  return res.status(200).json(posts);
});

module.exports = {
  getAll,
  getById,
};