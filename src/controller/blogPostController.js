const BlogPostService = require('../services/blogPostService');

const messageErrorServer = { code: 500, result: { message: 'Internal Error Server' } };

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  try {
    const {
      code, result,
    } = await BlogPostService.createBlogPost(req.userEmail, title, content, categoryIds);
    res.status(code).json(result);
  } catch (error) {
     return messageErrorServer;
  }
};

const getAllBlogPosts = async (_req, res) => {
  try {
    const { code, result } = await BlogPostService.getAllBlogPosts();
    res.status(code).json(result);
  } catch (error) {
     return messageErrorServer;
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};