const { Category } = require('../models');

module.exports = {
  create: async (name) => {
    const category = await Category.create({ name });

    return category;
  },

  getAll: async () => {
    const categories = await Category.findAll();

    return categories;
  },
};
