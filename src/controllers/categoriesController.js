const { createdCategory } = require('../service/categoriesService');

const createNewCategory = async (req, res) => {
  const category = await createdCategory(req.body);
  res.status(201).json(category);
};

module.exports = { createNewCategory };