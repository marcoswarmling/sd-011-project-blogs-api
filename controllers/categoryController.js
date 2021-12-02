const service = require('../services/categoryServices');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await service.createCategory({ name });
  console.log(newCategory);

  return res.status(201).json(newCategory);
};

const getAll = async (req, res) => {
  const categories = await service.getAll();

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAll,
};