const { Categories } = require('../models');

async function validedCategoryId(req, res, next) {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    res.status(400).json({
      message: '"categoryIds" is required',
    });
  }
  categoryIds.map(async (categoryId) => {
   const category = await Categories.findByPk(categoryId);
   if (category === null) {
    res.status(400).json({
      message: '"categoryIds" not found',
    });
   }
  });
  next();
}

module.exports = validedCategoryId;
