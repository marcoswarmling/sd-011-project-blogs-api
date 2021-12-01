const categoriesService = require('../services/categories');
const { status, intServerError } = require('../Helpers/status&messages');

const createCategory = async (req, res) => {
  console.log('entrei no controller');
  try {
    const { name } = req.body;
    const newCategory = await categoriesService.createCategory(name);
    if (newCategory.status) {
      return res.status(newCategory.status).json({ message: newCategory.message });
    }
    console.log('newCategory CONTROLLER', newCategory);
    return res.status(status.create).json(newCategory);
  } catch (error) {
    return res.status(status.intServerError).json({ message: intServerError.unknown });
  }
};

module.exports = { createCategory };