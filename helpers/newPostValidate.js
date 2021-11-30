const { Category } = require('../models');

const checkEntries = ({ content, title, categoryIds }) => {
  if (!content) return { code: 400, message: '"content" is required' };
  if (!title) return { code: 400, message: '"title" is required' };
  if (!categoryIds) return { code: 400, message: '"categoryIds" is required' };
  return null;
};

const checkCategories = async ({ categoryIds }) => {
  const check = await Promise.all(categoryIds.map(async (id) => {
    const category = await Category.findOne({ where: { id } });
    return category; 
  }));
  if (check.includes(null)) return { code: 400, message: '"categoryIds" not found' };

  return null;
};

module.exports = async (object) => {
  if (checkEntries(object)) return checkEntries(object);
  const categoriesCheck = await checkCategories(object);
  if (categoriesCheck) return categoriesCheck;
  return null;
};