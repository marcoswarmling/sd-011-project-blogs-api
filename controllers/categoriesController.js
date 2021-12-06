const categories = require('../services/categoriesService');

const create = async (req, res) => {
  const { name } = req.body;
  const response = await categories.create({ name });
  return res.status(201).json(response);
};

module.exports = {
  create,
};