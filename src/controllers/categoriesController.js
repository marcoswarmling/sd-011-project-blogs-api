const status = require('../schemas/errorCodes');
const errors = require('../schemas/errorMessage');
const { createCategories, getAll } = require('../services/categoriesService');

  const createCategory = async (req, res) => {
    const { name } = req.body;
    
    if (!name) {
      const { statusCode, message } = errors.categories.nameRequired;
      return res.status(statusCode).json({ message });
    }

    const createdCategory = await createCategories(name);
    
    return res.status(status.created).json(createdCategory);
  };

  const listCategories = async (req, res) => {
    const list = await getAll();

    return res.status(status.ok).json(list);
  };

module.exports = {
  createCategory,
  listCategories,
};