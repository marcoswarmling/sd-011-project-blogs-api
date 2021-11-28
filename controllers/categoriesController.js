const categoriesServices = require('../services/categoriesServices');

const createCategorie = async (req, res) => {
  const { name } = req.body;
  const response = await categoriesServices.createCategorie(name);
  if (response.error) {
    const { error } = response;
    return res.status(400).json(error);
  }
  return res.status(201).json(response);
};

module.exports = { createCategorie };