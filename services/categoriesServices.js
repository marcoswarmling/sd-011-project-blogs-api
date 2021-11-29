const { Categories } = require('../models');

const create = async ({ name }) => Categories.create({ name });

const findCategoryByName = (name) => Categories.findOne({ where: { name }, raw: true });

module.exports = {
  create,
  findCategoryByName,
};
