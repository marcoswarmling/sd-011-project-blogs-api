const categoryService = require('../services/categoryService');

module.exports = {
  hasCategories: async (ids) => {
    const categories = await categoryService.getAll();

    const categoryIds = categories.map(({ id }) => id);

    return ids.every((id) => categoryIds.includes(id));
  },
};
