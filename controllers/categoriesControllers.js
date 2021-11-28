const categorieServices = require('../services/categoriesServices');

const getAllCategories = async (_req, res) => {
  try {
    const categories = await categorieServices.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

const createCategorie = async (req, res) => {
  const { name } = req.body;
  try {
    const categorie = await categorieServices.createCategorie(name);
    return res.status(201).json(categorie);
  } catch (e) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

module.exports = { createCategorie, getAllCategories };
