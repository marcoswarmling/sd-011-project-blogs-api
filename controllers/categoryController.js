const CategoryServices = require('../services/categoryServices');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const addResponse = await CategoryServices.createCategory(name);
  if (addResponse.type === 'error') {
    return res.status(addResponse.code).json({ message: addResponse.message });
  }
  return res.status(201).json(addResponse.payload);
};

const getAll = async (_req, res) => {
  const getAllResponse = await CategoryServices.getAll();
  if (getAllResponse.type === 'error') {
    return res.status(getAllResponse.code).json({ message: getAllResponse.message });
  }
  return res.status(200).json(getAllResponse.payload);
};

module.exports = {
  createCategory,
  getAll,
};