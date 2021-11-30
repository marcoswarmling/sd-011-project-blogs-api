const { registerCategorie } = require('../services/categories');

const insertCategorie = async (req, res) => {
  const { name } = req.body;
  const categorie = await registerCategorie(name);

  return res.status(201).json(categorie);
};

module.exports = {
  insertCategorie,
};
