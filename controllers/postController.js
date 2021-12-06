const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const { createP, getAllPost, getPostById } = require('../services/postService');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createPost = rescue(async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
  const { data: { id } } = jwt.verify(token, secret);

  const creating = await createP(title, content, categoryIds, id);

  if (creating.message) return res.status(400).json(creating.message);

  const createdPost = await createP({ title, content, categoryIds, userId: id });
  return res.status(201).json(createdPost);
});

const getAllPosts = rescue(async (_req, res) => {
  const result = await getAllPost();
  return res.status(200).json(result);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await getPostById(id);

if (!result) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(result);
});

module.exports = { createPost, getAllPosts, getById };