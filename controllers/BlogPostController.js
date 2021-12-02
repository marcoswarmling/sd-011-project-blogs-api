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
  // console.log('cheguei no controller');
  try {
    const data = await BlogPostService.getAllBP();
    return res.status(200).json(data);
  } catch (error) {
    return error.message;
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await BlogPostService.getById(id);

    return res.status(200).json(blogPost);
  } catch (error) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
};

module.exports = {
  create,
  getAll,
  getById,
};