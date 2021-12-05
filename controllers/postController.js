const express = require('express');
const { valToken } = require('../middlewares/valUser');
const { valPost, valCategoriesId } = require('../middlewares/valPost');
const { create } = require('../services/postService');

const router = express.Router();

router.post('/post', valPost, valCategoriesId, valToken, async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req;

  const response = await create(title, content, categoryIds, userId);

  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', response);

  res.status(201).json(response);
});

/* router.get('/post', valToken, async (_req, res) => {
  const response = await getAll();

  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', response);
  res.status(200).json(response);
}); */

module.exports = router;