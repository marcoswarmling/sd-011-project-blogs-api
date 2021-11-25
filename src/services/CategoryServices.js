const { Category } = require('../models');

const { categorySchema } = require('../validationSchemas/categorySchema');

module.exports = {
  create: async (name) => {
    const { error } = categorySchema.validate({ name });

    if (error) return { error };

    const category = await Category.create({ name });

    if (!category) return { error: true };

    return { category };
  },
};
