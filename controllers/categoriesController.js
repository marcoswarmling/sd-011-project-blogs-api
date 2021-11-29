const CategoriesServices = require('../services/categoriesServices');

const create = async (req, res) => {
  const { name } = req.body;
  const { dataValues } = await CategoriesServices.create({ name });

  res.status(201).json(dataValues);
};

const listAll = async (_req, res) => {
  const allUsers = await CategoriesServices.findAll();

  res.status(200).json(allUsers);
};

module.exports = {
  create,
  listAll,
};
