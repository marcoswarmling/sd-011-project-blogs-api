const Service = require('../services/categories');

const createCategory = async (req, res) => {
  const data = req.body;

  const result = await Service.createCategory(data);

  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }

  const resultFiltered = { id: result.id, name: result.name };

  return res.status(201).json(resultFiltered);
};

const getAllCategories = async (req, res) => {
  const result = await Service.getAllCategories();

  return res.status(200).json(result);
};

module.exports = {
  createCategory,
  getAllCategories,
};