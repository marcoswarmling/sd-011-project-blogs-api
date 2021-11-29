const express = require('express');
const validateToken = require('../auth/jwt');

const router = express.Router();

const categories = require('../services/categoriesService');

router.post('/', validateToken, async (req, res) => {
  try {
    const { name } = req.body;
    const newCategories = await categories.createCategories(name);

    if (typeof newCategories.message === 'string') {
      return res.status(400).json(newCategories);
    }

    return res.status(201).json(newCategories);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;