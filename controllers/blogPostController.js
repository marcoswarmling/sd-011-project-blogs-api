const blogPostService = require('../services/blogPostService');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;
  const result = await blogPostService.createBlogPost(title, content, categoryIds, authorization);

  if (result.status) return res.status(result.status).json({ message: result.message });

  return res.status(201).json(result);
};

const findAll = async (_req, res) => {
  const result = await blogPostService.findAll();

  return res.status(200).json(result);
};

module.exports = {
  createBlogPost,
  findAll,
};