const { Categories } = require('../models');

const validateNameCategory = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

// https://sequelize.org/master/class/lib/model.js~Model.html
const validateCategoryExist = async (req, res, next) => {
  const { categoryIds } = req.body;
  const findCategories = await Categories.findAll();
 // console.log(findCategories, 'FIND-CATEGORIES');
  const categoryExist = findCategories.some((category) => 
  categoryIds.includes(category.dataValues.id));

  // console.log(ifCategoryExist, 'CATEGORY-EXIST');
  if (!categoryExist) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  validateNameCategory,
  validateCategoryExist,
};
