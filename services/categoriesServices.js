const { Categories } = require('../models');

const create = async ({ name }) => Categories.create({ name });

const findCategoryByName = (name) => Categories.findOne({ where: { name }, raw: true });

const findAll = async () => Categories.findAll({ raw: true });

const findCategoryById = (id) => Categories.findByPk(id, { raw: true });

module.exports = {
  create,
  findCategoryByName,
  findAll,
  findCategoryById,
};
