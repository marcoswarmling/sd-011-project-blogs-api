const { Category } = require('../models');
const { Schema } = require('../services/validation');

const getDisplayResultFromModelResult = ({ dataValues }) => dataValues;

const mapModelResultToDisplayResult = (result) => result.map(getDisplayResultFromModelResult);

const create = (createCategoryInput) => {
  new Schema('createCategory').validate(createCategoryInput);

  return Category.create(createCategoryInput)
    .then(getDisplayResultFromModelResult);
};

const getAll = () => Category.findAll()
  .then(mapModelResultToDisplayResult);

module.exports = {
  create,
  getAll,
};
