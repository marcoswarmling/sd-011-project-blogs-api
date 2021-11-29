const CategoriesServices = require('../services/categoriesServices');

const create = async (req, res) => {
  const { name } = req.body;
  const { dataValues } = await CategoriesServices.create({ name });

  res.status(201).json(dataValues);
};

module.exports = {
  create,
};
