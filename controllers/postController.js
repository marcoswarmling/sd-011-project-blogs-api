const express = require('express');

const router = express.Router();

const { validateToken } = require('../middlewares/validateUser');
const { validatePost } = require('../middlewares/validatePost');
const { create, getAll } = require('../services/postService');

router.post('/post', validateToken, validatePost, async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req;

  const response = await create(title, content, categoryIds, userId);

  res.status(201).json(response);
});

router.get('/post', validateToken, async (_req, res) => {
  const response = await getAll();

  const getResponse = await Promise.all(response).then((post) => post);

  res.status(200).json(getResponse);
});

module.exports = router;
