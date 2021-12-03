const postService = require('../services/postService');

const registerNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req;

  const response = await postService.registerNewPost(title, content, categoryIds, userId);

  return res.status(201).json(response);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const { userId } = req;

  const response = await postService.updatePost(userId, id, title, content);

  const { error } = response;
  if (error) return res.status(401).json(error);

  return res.status(200).json(response);
};

const searchPostsByTerm = async (req, res) => {
  const { q } = req.query;

  const result = await postService.searchPostsByTerm(q);

  return res.status(200).json(result);
};

const searchAllPosts = async (_req, res) => {
  const response = await postService.searchAllPosts();

  return res.status(200).json(response);
};

const searchById = async (req, res) => {
  const { id } = req.params;

  const response = await postService.searchById(id);

  const { error } = response;
  if (error) return res.status(404).json(error);

  return res.status(200).json(response);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  const response = await postService.deletePost(id, userId);

  const { status, error } = response;
  if (error) return res.status(status).json(error);

  return res.status(204).json();
};

module.exports = {
  registerNewPost,
  updatePost,
  searchPostsByTerm,
  searchAllPosts,
  searchById,
  deletePost,
};