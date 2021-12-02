const express = require('express');
const { BlogPosts } = require('../models');
const { validationToken,
  postEntrysRequired,
  categoriesExists, 
} = require('../middlewares/validateEntries');

const router = express.Router();

router.post('/', validationToken, postEntrysRequired, categoriesExists,
async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.userId.id;
    const { dataValues } = await BlogPosts.create({ userId, title, content });
    return res.status(201).json(dataValues);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send('deu ruim');
  }
});

module.exports = router;