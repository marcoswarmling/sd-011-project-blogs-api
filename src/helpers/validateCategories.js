const { Category } = require('../models');

function validateCategoryArray(categories) {
  if (!categories) return true;

  if (categories.length > 1) return true;

  return false;
}

module.exports = {
  validateCategories: async (insertedCategories) => {
    const invalid = validateCategoryArray(insertedCategories);

    if (invalid) return false;

    const categories = await Category.findAll();

    const categoriesIds = categories.map(({ id }) => id);

    const valid = insertedCategories.reduce((isValid, id) => {
      if (!categoriesIds.includes(id)) return false;
      return isValid;
    }, true);

    return valid;
  },
};
