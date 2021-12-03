const express = require('express');
const { valToken } = require('../middlewares/valUser');
const { createCategory } = require('../services/categoriesService');

const router = express.Router();

router.post('/categories', valToken, async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const create = await createCategory(name);
  console.log(create);

  res.status(201).json(create);
});

module.exports = router;
