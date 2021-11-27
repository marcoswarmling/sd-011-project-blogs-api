const BlogPostService = require('../services/blogPostService');

const messageErrorServer = 'Internal Error Server';

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  try {
    const {
      code, result,
    } = await BlogPostService.createBlogPost(req.userEmail, title, content, categoryIds);
    res.status(code).json(result);
  } catch (error) {
    res.status(500).json({ message: messageErrorServer });
  }
};

module.exports = {
  createBlogPost,
};