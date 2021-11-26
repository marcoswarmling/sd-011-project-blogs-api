const CategoryService = require('../services/categoryService');

const messageErrorServer = 'Internal Error Server';

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const { code, result } = await CategoryService.createCategory(name);
    res.status(code).json(result);
  } catch (error) {
    res.status(500).json({ message: messageErrorServer });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const { code, result } = await CategoryService.getAllCategories();
    res.status(code).json(result);
  } catch (error) {
    res.status(500).json({ message: messageErrorServer });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};