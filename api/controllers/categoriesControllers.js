const categoriesServices = require('../services/categoriesServices');

const createCategorie = async (req, res) => {
  const newCategorie = req.body;

  const categorie = await categoriesServices.createCategorie(newCategorie);

  return res.status(201).json(categorie);
};

module.exports = {
  createCategorie,
};
