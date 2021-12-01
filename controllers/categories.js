const categoriesService = require('../services/categories');
const { status, intServerError } = require('../Helpers/status&messages');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await categoriesService.createCategory(name);
    if (newCategory.status) {
      return res.status(newCategory.status).json({ message: newCategory.message });
    }
    return res.status(status.create).json(newCategory);
  } catch (error) {
    return res.status(status.intServerError).json({ message: intServerError.unknown });
  }
};

const getCategories = async (req, res) => {
  try { 
    const allCategories = await categoriesService.getCategories();
    return res.status(status.sucess).json(allCategories);
  } catch (error) {
    return res.status(status.intServerError).json({ message: intServerError.unknown });
  }
};

module.exports = { createCategory, getCategories };