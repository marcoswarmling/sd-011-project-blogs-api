const {
  registerCategorie,
  getAllCategories,
} = require('../services/categories');

const insertCategorie = async (req, res) => {
  const { name } = req.body;
  const categorie = await registerCategorie(name);

  return res.status(201).json(categorie);
};

const getCategories = async (_req, res) => {
  const categories = await getAllCategories();
  return res.status(200).json(categories);
};

module.exports = {
  insertCategorie,
  getCategories,
};
