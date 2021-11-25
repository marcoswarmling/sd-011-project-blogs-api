const categoriesServices = require('../services/categories');

const createCategory = async (req, res, _next) => {
  const { name } = req.body;

  const newCategory = await categoriesServices.createCategory(name);

  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};
