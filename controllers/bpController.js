const blogPostService = require('../services/bpServices');
const categoryService = require('../services/categoryServices');

const createBlogPost = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const userId = req.user;

  const categories = await categoryService.getCategoryIds(categoryIds);
  const newPost = await blogPostService.createBlogPost({ title, categoryIds, content, userId });

  if (categories.length === 0) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  return res.status(201).json(newPost);
};

module.exports = {
  createBlogPost,
};