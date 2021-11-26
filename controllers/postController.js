const express = require('express');

const router = express.Router();

const { validateToken } = require('../middlewares/validateUser');
const { validatePost } = require('../middlewares/validatePost');
const { create } = require('../services/postService');

router.post('/post', validateToken, validatePost, async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req;

  const response = await create(title, content, categoryIds, userId);

  res.status(201).json(response);
});

module.exports = router;
