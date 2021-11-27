const blogPostsServices = require('../services/post');

const createBlogPost = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.user;

  const categoryIdExists = await blogPostsServices.categoryIdsExists(categoryIds);

  if (!categoryIdExists) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  const published = Date.now();
  const updated = Date.now();

  const newPost = await blogPostsServices.createBlogPosts(
    title,
    content,
    userId,
    categoryIds,
    published,
    updated,
  );

  return res.status(201).json({ id: newPost.id, userId, title, content, published, updated });
};

const getAllPosts = async (_req, res, _next) => {
  const posts = await blogPostsServices.getAllBlogPosts();

  return res.status(200).json(posts);
};

module.exports = {
  createBlogPost,
  getAllPosts,
};
