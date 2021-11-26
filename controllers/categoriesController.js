const { createCategorie } = require('../services/categoriesService');

const createCategorieController = async (req, res) => {
  const { name } = req.body;
  
  const categorie = await createCategorie(name);

  return res.status(201).json(categorie.dataValues);
};

module.exports = {
  createCategorieController,
};