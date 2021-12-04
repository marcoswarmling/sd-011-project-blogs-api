const categoriesServices = require('../services/categoriesServices');

const newCategory = async (req, res) => {
  const { name } = req.body;

  const category = await categoriesServices.newCategory(name);

  return res.status(201).json(category);
};

module.exports = {
  newCategory,
};
