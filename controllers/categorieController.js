const rescue = require('express-rescue');
const { createCategories, getAllCategories } = require('../services/categoriesService');

const createCategorie = rescue(async (req, res) => {
  const { name } = req.body;
  const categorie = await createCategories(name);
  return res.status(201).json(categorie);
});

const getCategorieAll = rescue(async (_req, res) => {
  const categorieAll = await getAllCategories();
  return res.status(200).json(categorieAll);
});

module.exports = { createCategorie, getCategorieAll };