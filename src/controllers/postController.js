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

module.exports = {
  createPost,
  getAll,
};