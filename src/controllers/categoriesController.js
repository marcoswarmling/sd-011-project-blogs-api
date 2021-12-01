const status = require('../schemas/errorCodes');
const errors = require('../schemas/errorMessage');
const categoriesService = require('../services/categoriesService');

  const createCategory = async (req, res) => {
    const { name } = req.body;
    
    if (!name) {
      const { statusCode, message } = errors.categories.nameRequired;
      return res.status(statusCode).json({ message });
    }

    const createdCategory = await categoriesService.createCategory(name);
    
    return res.status(status.created).json(createdCategory);
  };

module.exports = {
  createCategory,
};