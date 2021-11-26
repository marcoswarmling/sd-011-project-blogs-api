const express = require('express');
const postService = require('../services/postService');
const validateJWT = require('../middlewares/validateJWT');

const router = express.Router();

router.post('/', validateJWT, async (req, res) => {
  const { id } = req.user.dataValues;
  const { title, content, categoryIds } = req.body;
  const response = await postService.create({ title, userId: id, content, categoryIds });

  if (response && response.message) {
    return res.status(400).json(response);
  }

  return res.status(201).json(response);
});

module.exports = router;