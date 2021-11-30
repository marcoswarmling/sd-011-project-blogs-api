const newCategoryValidate = require('../helpers/newCategoryValidate');
const { Category } = require('../models');

const create = async (object) => {
  const validation = newCategoryValidate(object);

  if (validation) return validation;

  const { dataValues } = await Category.create(object);

  return { code: 201, category: dataValues };
};

module.exports = {
  create,
};