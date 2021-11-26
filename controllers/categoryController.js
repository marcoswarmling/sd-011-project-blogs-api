const express = require('express');
const categoryService = require('../services/categoryService');
const validateJWT = require('../middlewares/validateJWT');

const router = express.Router();

router.post('/', validateJWT, async (req, res) => {
  const { name } = req.body;
  const response = await categoryService.create({ name });

  if (response && response.message) {
    return res.status(400).json(response);
  }
  
  return res.status(201).json(response);
});

module.exports = router;