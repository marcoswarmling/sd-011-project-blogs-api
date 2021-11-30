const db = require('../models');

const createBlogPost = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.user;

  const newBlogPost = {
    title,
    content,
    userId: id,
  };
  
  try {
    const createdBlogPost = await db.BlogPosts.create(newBlogPost);
    return res.status(201).json(createdBlogPost);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  createBlogPost,
};
