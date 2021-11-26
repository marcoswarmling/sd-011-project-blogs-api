const CategoryServices = require('../services/categoryServices');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const { authorization } = req.headers;
  const addResponse = await CategoryServices.addCategory(name, authorization);
  if (addResponse.type === 'error') {
    return res.status(addResponse.code).json({ message: addResponse.message });
  }
  return res.status(201).json(addResponse.payload);
};

const getAll = async (req, res) => {
  const { authorization } = req.headers;
  const getAllResponse = await CategoryServices.getAll(authorization);
  if (getAllResponse.type === 'error') {
    return res.status(getAllResponse.code).json({ message: getAllResponse.message });
  }
  return res.status(200).json(getAllResponse.payload);
};

module.exports = {
  addCategory,
  getAll,
};