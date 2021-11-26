const PostService = require('../service/postService');

const create = async (req, res, _next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const post = { ...req.body };
  const response = await PostService.create(post, authorization);
  if (response.message) {
    if (response.message === 'Expired or invalid token') {
      return res.status(401).json({ message: response.message });
    }
    return res.status(400).json({ message: response.message });
  }
  return res.status(201).json(response);
};

const getAll = async (req, res, _next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const posts = await PostService.getAll(authorization);
  
  if (posts.message) return res.status(401).json({ message: posts.message });

  res.status(200).json(posts);
};

module.exports = {
  getAll,
  create,
};