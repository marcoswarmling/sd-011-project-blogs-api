const BlogPostService = require('../services/BlogPostService');

const create = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.user;
    const userId = id;
    // console.log(req.user);

    const register = await BlogPostService.createBlogPost(title, content, userId);
    console.log(register);
    return res.status(201).json(register);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
};