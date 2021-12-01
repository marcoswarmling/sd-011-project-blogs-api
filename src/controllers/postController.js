const rescue = require('express-rescue');
const postService = require('../services/postService');

const createPost = rescue(async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const newPost = await postService.createPost({ title, content, categoryIds });
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" not found' });
  return res.status(201).json(newPost);
});

const getPosts = rescue(async (req, res) => {
  const posts = await postService.getPosts();
  return res.status(200).json(posts);
});

const getPostById = rescue(async (req, res) => {
  // const { id } = req.params;
  const posts = await postService.getPostById(req.params.id);
  console.log(`${req.params.id} id aqui`);
  if (!posts) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(posts);
});

module.exports = {
  createPost,
  getPosts,
  getPostById,
};