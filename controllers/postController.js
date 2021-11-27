const express = require('express');

const router = express.Router();

const { validateToken } = require('../middlewares/validateUser');
const { validatePost, validUpdatePost } = require('../middlewares/validatePost');
const {
  create,
  getAll,
  findById,
  updateById,
  deletePost,
  deleteUser,
} = require('../services/postService');

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

router.put('/post/:id', validateToken, validUpdatePost, async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { userId } = req;

  const response = await updateById(title, content, Number(id), Number(userId));

  if (response.error) {
    return res.status(401).json({ message: response.error });
  }

  res.status(200).json(response);
});

router.delete('/post/:id', validateToken, async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  const error = await deletePost(id, userId);

  if (error) return res.status(error.code).json({ message: error.message });

  res.status(204).json();
});

router.delete('/user/me', validateToken, async (req, res) => {
  const { userId } = req;

  await deleteUser(userId);

  res.status(204).json();
});

module.exports = router;
