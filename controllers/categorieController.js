const categorieServices = require('../services/categorieServices');

const createNewCategorie = async (req, res) => {
  const { name } = req.body;

  const newCategorie = await categorieServices.createNewCategorie(name);
  return res.status(201).json(newCategorie);
};

const getAllCategories = async (_req, res) => {
  const AllCategories = await categorieServices.getAllCategories();
  return res.status(200).json(AllCategories);
};

const getCategorieById = async (req, res) => {
  const { id } = req.params;
  const categorieId = await categorieServices.getCategorieById(id);
  if (!categorieId) return res.status(404).json({ message: 'Categorie does not exist' });
  return res.status(200).json(categorieId);
};

module.exports = {
  createNewCategorie,
  getAllCategories,
  getCategorieById,
};