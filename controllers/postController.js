const express = require('express');
const { BlogPost } = require('../models');

const router = express.Router();
const { Category } = require('../models');
const validateToken = require('../middlewares/validateToken');
const validateBlogPostSchema = require('../middlewares/validateBlogPostSchema');
const checkCategoryExistence = require('../utils/checkCategoryExistence');

router.post('/', validateToken, validateBlogPostSchema, async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req;
  const existingCategories = await Category.findAll();
  const doesAllCategoriesExistst = checkCategoryExistence(
    req.body.categoryIds, existingCategories,
  );
  if (doesAllCategoriesExistst) {
    try {
      const newPost = await BlogPost.create({ title, content, userId });
      const { id } = newPost;
      return res.status(201).json({ id, userId, title, content });
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  return res.status(400).json({
    message: '"categoryIds" not found',
  });
});

router.get('/', validateToken, async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      include: [{ all: true }],
    });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
