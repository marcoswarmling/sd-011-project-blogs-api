const BlogPost = require('../services/blogpost');

const createPost = async (req, res, next) => {
  const { email } = req.user;
  const { title, content, categoryIds } = req.body;
  const post = await BlogPost.createPost(email, title, content, categoryIds);
  if (post.err) return next(post.err);

  return res.status(201).json(post);
};

const getAllPosts = async (_req, res, _next) => {
  const posts = await BlogPost.getAllPosts();

  return res.status(200).json(posts);
};

const getPostById = async (req, res, next) => {
  const { id } = req.params;
  const post = await BlogPost.getPostById(id);
  if (post.err) return next(post.err);

  return res.status(200).json(post);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};
