const { Category } = require('../models');

const validatefields = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({
      message: '"categoryIds" is required',
    });
  }

  if (!title) {
    return res.status(400).json({
      message: '"title" is required',
    });
  }
  if (!content) {
    return res.status(400).json({
      message: '"content" is required',
    });
  }
  next();
};

const getCategories = async (req, res, next) => {
  const { categoryIds } = req.body;
  console.log(categoryIds);
  const checkCategory = await Promise
  .all(categoryIds.map(async (id) => Category.findOne({ where: { id } })));
  if (!checkCategory.some((a) => a)) {
    return res.status(400).json({
      message: '"categoryIds" not found',
    });
  }
  next();
};

module.exports = {
  validatefields,
  getCategories,
};
