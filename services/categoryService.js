const { Category } = require('../models');

const createCategory = async (name) => {
  // const existingCategory = Category.findOne({ where: { name } });
  // if (existingCategory) return { code: 'alreadyExists', message: 'Category already registered' };

  const { dataValues } = await Category.create({ name });

  return dataValues;
};

module.exports = {
  createCategory,
};
