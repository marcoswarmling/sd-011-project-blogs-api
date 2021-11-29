const db = require('../models');

class BlogPostController {
  static async createBlogPost(req, res) {
    const { title, content } = req.body;
    const { id } = req.user;
    const blogPost = {
      title,
      content,
      userId: id,
    };
    try {
      const createdBlogPost = await db.BlogPosts.create(blogPost);    
      return res.status(201).json(createdBlogPost);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = BlogPostController;
