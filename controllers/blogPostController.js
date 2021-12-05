const blogPostService = require('../services/blogPostServices');

require('dotenv').config();

const createNewPost = async (req, res) => {
  const { title, content } = req.body;
  const newPost = await blogPostService.createNewPost({ title, content });
  return res.status(201).json(newPost);
};

const getAllPosts = async (_req, res) => {
  const allPosts = await blogPostService.getAllPosts();
  return res.status(200).json(allPosts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const postById = await blogPostService.getPostById(id);
  if (!postById) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(postById);
};

module.exports = {
  createNewPost,
  getAllPosts,
  getPostById,
};
