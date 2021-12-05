const db = require('../models');

const createBlogPosts = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.user;
  const blogPosts = {
    title,
    content,
    userId: id,
    };
    try {
      const blogPostsCreated = await db.BlogPosts.create(blogPosts);
      console.log(blogPosts);
      return res.status(201).json(blogPostsCreated);
    } catch (error) {
      return res.status(400).json(error.message);
    }
};

module.exports = {
  createBlogPosts,
};