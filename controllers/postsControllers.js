const rescue = require('express-rescue');
const { create } = require('../services/postServices');

const createPost = rescue(async (req, res) => {
  const { title, content, categoriesIds } = req.body;
  const newPost = await create({ title, content, categoriesIds });
  return res.status(201).json(newPost);
});

module.exports = { createPost };
