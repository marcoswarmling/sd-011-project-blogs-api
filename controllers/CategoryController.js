const CategoryService = require('../services/CategoryService');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const register = await CategoryService.createCategory(name);

    return res.status(201).json(register);
  } catch (error) {
    return error.message;
  }
};

const getAll = async (req, res) => {
  try {
    const data = await CategoryService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
  getAll,
};