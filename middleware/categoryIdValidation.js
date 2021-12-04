const { Categories } = require('../models');

 async function validedCategoryId(req, res, next) {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    res.status(400).json({
      message: '"categoryIds" is required',

    });
    return;
  }

  const isCategoryExist = categoryIds;
  const allCategories = isCategoryExist
    .map((categoryId) => Categories.findByPk(categoryId));
  const hasInvalidCategory = await allCategories
    .find(async (category) => !(await category)); 
  if (!hasInvalidCategory) {
    res.status(400).json({
      message: '"categoryIds" not found' });
    return; 
}
   next();  
}

module.exports = validedCategoryId;
