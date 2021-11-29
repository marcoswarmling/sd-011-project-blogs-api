const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { category, status, message } = await categoriesService.createCategory(name);

  if (status) return res.status(status).json({ message });

  return res.status(201).json(category);
};

const findAll = async (req, res) => {
  const result = await categoriesService.findAll();

  return res.status(200).json(result);
};

module.exports = {
  createCategory,
  findAll,
};