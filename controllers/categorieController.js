const express = require('express');
const { createCategorie } = require('../services/categorieService');

const router = express.Router();

const { validateToken } = require('../middlewares/validateUser');

router.post('/categories', validateToken, async (req, res) => {
  const { name } = req.body;
  const categorie = await createCategorie(name);

  if (!name) return res.status(400).json({ message: '"name" is required' });

  res.status(201).json(categorie);
});

module.exports = router;
