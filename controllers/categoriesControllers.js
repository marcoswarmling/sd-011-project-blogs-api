const rescue = require('express-rescue');
const { create } = require('../services/categoriesServices');

const createCategorie = rescue(async (req, res) => {
  const { name } = req.body;
  const categorie = await create(name);

  return res.status(201).json(categorie);
});

module.exports = { createCategorie };
