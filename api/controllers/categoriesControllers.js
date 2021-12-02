const categoriesServices = require('../services/categoriesServices');

const getAllCategories = async (req, res) => {
  const categories = await categoriesServices.getCategories();

  return res.status(200).json(categories);
};

const createCategorie = async (req, res) => {
  const newCategorie = req.body;

  const categorie = await categoriesServices.createCategorie(newCategorie);

  return res.status(201).json(categorie);
};

module.exports = {
  getAllCategories,
  createCategorie,
};
