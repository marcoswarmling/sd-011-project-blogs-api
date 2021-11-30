const BlogPostService = require('../services/BlogPostService');

class BlogPostController {
  constructor() {
    this.blogPostService = new BlogPostService();
  }

  async createPost(req, res) {
    const token = req.headers.authorization;
    const { code, data, message } = await this.blogPostService.createPost(token, req.body);
    if (message) {
      return res.status(code).json({ message });
    }

    res.status(code).json(data);
  }

  async getPosts(req, res) {
    const token = req.headers.authorization;
    const { code, data, message } = await this.blogPostService.getAllPosts(token);
    if (message) {
      return res.status(code).json({ message });
    }

    res.status(code).json(data);
  }

  async getPostById(req, res) {
    const token = req.headers.authorization;
    const { code, data, message } = await this.blogPostService.getPostById(token, req.params.id);
    if (message) {
      return res.status(code).json({ message });
    }

    res.status(code).json(data);
  }

  async updatePost(req, res) {
    const token = req.headers.authorization;
    const { 
      code, 
      data, 
      message, 
    } = await this.blogPostService.updatePost(token, req.params.id, req.body);
    if (message) {
      return res.status(code).json({ message });
    }

    res.status(code).json(data);
  }
}

module.exports = BlogPostController;