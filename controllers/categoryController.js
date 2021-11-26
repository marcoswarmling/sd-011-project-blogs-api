const express = require('express');
const categoryService = require('../services/categoryService');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name } = req.body;
  const user = await categoryService.create({ name });
  res.send(user);
});