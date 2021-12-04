const { Category } = require('../models');

const createNewCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await Category.create({ name });

  return res.status(201).json(newCategory);
};

module.exports = {
  createNewCategory,
};
