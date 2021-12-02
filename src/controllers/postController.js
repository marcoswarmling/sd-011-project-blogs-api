const postService = require('../services/postService');

const createPost = async (req, res, next) => {
  const { body, userId } = req;

  const post = await postService.createPost(body, userId);
 
  if (post.err) return next(post.err);

  return res.status(201).json(post);
};

const getAll = async (req, res, _next) => {
  const allPosts = await postService.getAll();

  return res.status(200).json(allPosts);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const post = await postService.getById(id);

  if (post.err) return next(post.err);

  return res.status(200).json(post);
};

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const { content, title, categoryIds } = req.body;

  const updatedPost = await postService.updateById(id, content, title, categoryIds);

  if (updatedPost.err) return next(updatedPost.err);

  return res.status(200).json(updatedPost);
};

const deleteById = async (req, res, next) => {
  const { id } = req.params;

  const deletedPost = await postService.deleteById(id);

  if (deletedPost.err) return next(deletedPost.err);

  return res.status(204).end();
};

module.exports = {
  createPost,
  getAll,
  getById,
  updateById,
  deleteById,
};