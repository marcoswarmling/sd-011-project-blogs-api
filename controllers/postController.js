const express = require('express');
const postService = require('../services/postService');
const validateJWT = require('../middlewares/validateJWT');
const { PostsCategories } = require('../models');

const router = express.Router();

router.post('/', validateJWT, async (req, res) => {
  const { id } = req.user.dataValues;
  const { title, content, categoryIds } = req.body;
  const response = await postService.create({ title, userId: id, content, categoryIds });

  if (response && response.message) {
    return res.status(400).json(response);
  }

  const { id: postId } = response;

  await categoryIds.forEach(async (categoryId) => {
    await PostsCategories.create({
      categoryId,
      postId,
    });
  });

  return res.status(201).json(response);
});

router.get('/', validateJWT, async (req, res) => {
  const response = await postService.getAll();
  return res.status(200).json(response);
});

module.exports = router;