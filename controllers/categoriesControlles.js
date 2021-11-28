const categoriesServices = require('../services/categoriesServices');

const createCategories = async (req, res) => {
  const { name } = req.body;
  try {
    const categorie = await categoriesServices.createCategorie(name);
    return res.status(201).json(categorie);
  } catch (e) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

module.exports = { createCategories };
