const categoryService = require('../services/categoryService');

const registerCategory = async (req, res) => {
  const { name } = req.body;

  const response = await categoryService.registerCategory(name);

  return res.status(201).json(response);
};

module.exports = { registerCategory };