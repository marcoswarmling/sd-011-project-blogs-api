const service = require('../services/categoryServices');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await service.createCategory({ name });

  return res.status(201).json(newCategory);
};

const getAll = async (_req, res) => {
  const categories = await service.getAll();

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAll,
};