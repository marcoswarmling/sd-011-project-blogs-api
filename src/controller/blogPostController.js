const BlogPostService = require('../services/blogPostService');

const messageErrorServer = { message: 'Internal Error Server' };

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  try {
    const {
      code, result,
    } = await BlogPostService.createBlogPost(req.userEmail, title, content, categoryIds);
    res.status(code).json(result);
  } catch (error) {
     return res.status(500).json(messageErrorServer);
  }
};

const getAllBlogPosts = async (_req, res) => {
  try {
    const { code, result } = await BlogPostService.getAllBlogPosts();
    res.status(code).json(result);
  } catch (error) {
     return res.status(500).json(messageErrorServer);
  }
};

const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const { code, result } = await BlogPostService.getBlogPostById(id);
    res.status(code).json(result);
  } catch (error) {
     return res.status(500).json(messageErrorServer);
  }
};

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const { code, result } = await BlogPostService.updatePostById(id, title, content);
    res.status(code).json(result);
  } catch (error) {
     return res.status(500).json(messageErrorServer);
  }
};

const excludeBlogPost = async (req, res) => {
  const { id } = req.params;
 try {
    const { code } = await BlogPostService.excludeBlogPost(id);
    res.status(code).send();
  } catch (error) {
     return res.status(500).json(messageErrorServer);
  } 
};

const findPostByQueryParam = async (req, res) => {
  const { q } = req.query;
  try {
    const { code, result } = await BlogPostService.findPostByQueryParam(q);
    return res.status(code).json(result);
  } catch (error) {
    return res.status(500).json(messageErrorServer);
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updatePostById,
  excludeBlogPost,
  findPostByQueryParam,
};