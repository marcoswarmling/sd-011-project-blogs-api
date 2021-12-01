const BlogPostService = require('../services/BlogPostService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const userId = id;

    const register = await BlogPostService.createBlogPost(title, content, userId, categoryIds);
    return res.status(201).json(register);
  } catch (error) {
    return error.message;
  }
};

const getAll = async (req, res) => {
  console.log('cheguei no controller');
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const data = await BlogPostService.getAllBP();
    return res.status(200).json(data);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
  getAll,
};