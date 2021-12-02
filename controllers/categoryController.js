const service = require('../services/categoryServices');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await service.createCategory({ name });
  console.log(newCategory);

  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};