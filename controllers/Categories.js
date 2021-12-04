const categoriesService = require('../services/Categories');

const create = async (req, res) => {
  const { name } = req.body;
  const response = await categoriesService.create(name);
  return res.status(201).json(response);
};

const getAll = async (_req, res) => {
  const response = await categoriesService.getAll();
  return res.status(200).json(response);
};

module.exports = {
  create,
  getAll,
};