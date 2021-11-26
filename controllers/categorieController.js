const express = require('express');
const { create, getAll } = require('../services/categorieService');

const router = express.Router();

const { validateToken } = require('../middlewares/validateUser');

router.post('/categories', validateToken, async (req, res) => {
  const { name } = req.body;
  const categorie = await create(name);

  if (!name) return res.status(400).json({ message: '"name" is required' });

  res.status(201).json(categorie);
});

router.get('/categories', validateToken, async (_req, res) => {
  const categories = await getAll();

  return res.status(200).json(categories);
});

module.exports = router;
