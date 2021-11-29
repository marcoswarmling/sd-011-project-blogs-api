const { Categories } = require('../models');

const create = async ({ name }) => Categories.create({ name });

const findCategoryByName = (name) => Categories.findOne({ where: { name }, raw: true });

const findAll = async () => Categories.findAll({ raw: true });

module.exports = {
  create,
  findCategoryByName,
  findAll,
};
