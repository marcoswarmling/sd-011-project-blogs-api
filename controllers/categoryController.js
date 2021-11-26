const { categoryService } = require('../services');

const newCategory = async (req, res) => {
  const category = await categoryService.newCategory(req.body);
  return res.status(201).json(category);
};

module.exports = {
  newCategory,
};