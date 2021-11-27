const { Categories } = require('../models');

async function insertCategorie(req, res) {
  const { name } = req.body;
  const result = await Categories.create({ name })
    .catch(() => res.status(500).json({ message: 'Erro interno' }));

  res.status(201).json(result);
}

module.exports = {
  insertCategorie,
};
