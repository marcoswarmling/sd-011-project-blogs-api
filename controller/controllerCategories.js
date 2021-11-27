const { Categories } = require('../models');

async function insertCategorie(req, res) {
  const { name } = req.body;
  const result = await Categories.create({ name })
    .catch(() => res.status(500).json({ message: 'Erro interno' }));

  res.status(201).json(result);
}

async function getAllCategories(_req, res) {
  const result = await Categories.findAll()
    .catch(() => res.status(500).json({ message: 'Erro interno' }));

  res.status(200).json(result);
}

module.exports = {
  insertCategorie,
  getAllCategories,
};
