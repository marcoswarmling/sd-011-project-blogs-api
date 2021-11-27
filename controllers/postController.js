const express = require('express');

const router = express.Router();

const { validateToken } = require('../middlewares/validateUser');
const { validatePost } = require('../middlewares/validatePost');
const { create, getAll, findById } = require('../services/postService');

router.post('/post', validateToken, validatePost, async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req;

  const response = await create(title, content, categoryIds, userId);

  res.status(201).json(response);
});

router.get('/post', validateToken, async (_req, res) => {
  const response = await getAll();

  res.status(200).json(response);
});

router.get('/post/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const response = await findById(id);

  if (!response.length) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  res.status(200).json(response[0]);
});

module.exports = router;
