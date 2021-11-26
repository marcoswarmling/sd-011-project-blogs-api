const { Category } = require('../models');

function validateCategoryArray(categories) {
  if (!categories) return true;

  if (categories.length > 1) return true;

  return false;
}

module.exports = {
  validateCategories: async (insertedCategories) => {
    const isInvalid = validateCategoryArray(insertedCategories);

    if (isInvalid) return false;

    const categories = await Category.findAll();

    const categoriesIds = categories.map(({ id }) => id);

    const isValid = insertedCategories.every((category) => categoriesIds.includes(category));

    return isValid;
  },
};
