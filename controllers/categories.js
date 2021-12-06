const services = require('../services/categories');

const createNewCategory = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  const { dataValues } = await services.createNewCategory({ name });

  return res.status(201).json(dataValues);
};

module.exports = {
  createNewCategory,
};
