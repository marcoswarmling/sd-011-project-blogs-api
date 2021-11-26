const { createCategorie, getAllCategories } = require('../services/categoriesService');

const createCategorieController = async (req, res) => {
  const { name } = req.body;
  
  const categorie = await createCategorie(name);

  return res.status(201).json(categorie.dataValues);
};

const getAllCategoriesController = async (_req, res) => {
  const categories = await getAllCategories();
  return res.status(200).json(categories);
};

module.exports = {
  createCategorieController,
  getAllCategoriesController,
};