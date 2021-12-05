const { Categories } = require('../models');

const validTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: '"title" is required',
    });
  }

  next();
};

const validContent = (req, res, next) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({
      message: '"content" is required',
    });
  }

  next();
};

const validCategoryId = (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({
      message: '"categoryIds" is required',
    });
  }

  next();
};

const validCategoryExists = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categories = await Categories.findAll();

  const categoriesIdsDB = categories.map((category) => category.id);

  const sameCategories = categoryIds.filter((category) => categoriesIdsDB.includes(category));

  if (sameCategories.length === 0) {
    return res.status(400).json({
      message: '"categoryIds" not found',
    });
  }

  next();
};

module.exports = {
  validTitle,
  validContent,
  validCategoryId,
  validCategoryExists,
};
