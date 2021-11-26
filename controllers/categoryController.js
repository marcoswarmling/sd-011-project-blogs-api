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

module.exports = {
  addCategory,
};