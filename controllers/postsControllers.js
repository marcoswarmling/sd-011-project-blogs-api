const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const { create, getAllPosts, getPostById } = require('../services/postServices');
const { NOT_FOUND } = require('../utils/statusError');
const { POST_EXISTS } = require('../utils/errorMessages');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createPost = rescue(async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
  console.log(`passei aqui ${token}`);
  const { data: { id } } = jwt.verify(token, secret);
  console.log('passei aqui', id);

  const result = await create(title, content, categoryIds, id);

  if (result.message) return res.status(400).json(result.message);

  const newPost = await create({ title, content, categoryIds, userId: id });
  console.log(newPost);
  return res.status(201).json('passei aqui', newPost);
});

const getPosts = rescue(async (_req, res) => {
  const result = await getAllPosts();
  return res.status(200).json(result);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await getPostById(id);

  if (!result) return res.status(NOT_FOUND).json(POST_EXISTS);

  return res.status(200).json(result);
});

module.exports = { createPost, getPosts, getById };
