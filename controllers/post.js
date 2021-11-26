const blogPostsServices = require('../services/post');

const createBlogPost = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.user;

  const categoryIdExists = await blogPostsServices.categoryIdsExists(categoryIds);

  if (!categoryIdExists) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  const newPost = await blogPostsServices.createBlogPosts(title, content, userId);

  return res.status(201).json(newPost);
};

module.exports = {
  createBlogPost,
};
