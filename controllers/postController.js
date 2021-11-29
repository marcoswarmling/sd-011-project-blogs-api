const { postService } = require('../services');

const newPost = async (req, res) => {
  const post = await postService.newPost({ ...req.body, userId: req.token.id });
  return res.status(201).json(post);
};

const getPosts = async (req, res) => {
  const posts = await postService.getPosts();
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const post = await postService.getPostById(req.params.id);
  return res.status(200).json(post);
};

const editPost = async (req, res) => {
  const post = await postService.editPost(req.body, req.params.id, req.token);
  return res.status(200).json(post);
};

const deletePost = async (req, res) => {
  await postService.deletePost(req.params.id, req.token);
  return res.status(204).end();
};

const queryPost = async (req, res) => {
  const post = await postService.queryPost(req.query.q);
  return res.status(200).json(post);
};

module.exports = {
  newPost,
  getPosts,
  getPostById,
  editPost,
  deletePost,
  queryPost,
};