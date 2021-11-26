const CategoryService = require('../services/categoryService');

const messageErrorServer = 'Internal Error Server';

const createCategory = async (req, res) => {
  const { name } = req.params;
  try {
    const { code, result } = await CategoryService.createCategory(name);
    res.status(code).json(result);
  } catch (error) {
    res.status(500).json({ message: messageErrorServer });
  }
};

module.exports = {
  createCategory,
};