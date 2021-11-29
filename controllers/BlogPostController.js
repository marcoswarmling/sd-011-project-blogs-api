const BlogPostService = require('../services/BlogPostService');
const { getById } = require('../services/UserService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    console.log('ENTREI NO SERVICE');
    const { id } = req.params;
    const userId = getById(id);

    const register = await BlogPostService.createBlogPost(title, content, categoryIds, userId);

    return res.status(201).json(register);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
};