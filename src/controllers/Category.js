const { Category } = require('../models');
const { Schema } = require('../services/validation');

const getDisplayResultFromModelResult = ({ dataValues }) => dataValues;

const create = (createCategoryInput) => {
  new Schema('createCategory').validate(createCategoryInput);

  return Category.create(createCategoryInput)
    .then(getDisplayResultFromModelResult);
};

module.exports = {
  create,
};
