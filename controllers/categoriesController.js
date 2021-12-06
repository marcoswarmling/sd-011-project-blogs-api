const rescue = require('express-rescue');
const { Category } = require('../models');

const createCategory = rescue(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const category = await Category.create({ name });

  return res.status(201).json(category);
});

const getAll = rescue(async (req, res) => {
  const users = await Category.findAll();
  return res.status(200).json(users);
});

module.exports = {
  createCategory,
  getAll,
};