const servicesCategory = require('../services/category');

const createCategories = async (req, res) => {
  const newCategory = await servicesCategory.createCategories(req.body);
  if (newCategory.error) {
    return res.status(201).json({ message: 'ocorreu algum erro na criação' });
  }
  return res.status(201).json(newCategory);
};

module.exports = {
  createCategories,
};