const { Category } = require('../services');

const createCategory = async (req, res, next) => {
  const { name } = req.body;

  try {
    const newCategory = await Category.createCategory(name);

    return res.status(201).json(newCategory);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createCategory,
};
