const { Category } = require('../models');

const validateEntries = ({ title, content, categoryIds }) => {
  if (!title) return '"title" is required';
  if (!content) return '"content" is required';
  if (!categoryIds) return '"categoryIds" is required';
  return false;
};

const validateCategoryArray = async (categoryIds) => {
  const findCategories = await Category.findAll();
  const categories = findCategories.map((category) => category.id);
  
  let isValid = true;
  categoryIds.forEach((id) => {
    if (!categories.includes(id)) isValid = false;
  });

  if (!isValid) return '"categoryIds" not found';

  return false;
};

const paramsValidation = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const responseValidateEntries = validateEntries({ title, content, categoryIds });
    
    if (responseValidateEntries) {
      return res.status(400).json({ message: responseValidateEntries });
    }

    const responseValidateCategoryArray = await validateCategoryArray(categoryIds);

    if (responseValidateCategoryArray) {
      return res.status(400).json({ message: responseValidateCategoryArray });
    }
    
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { paramsValidation };