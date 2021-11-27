const servicesPost = require('../services/post');

const createPost = async (req, res) => {
  const newCategory = await servicesPost.createPost({ ...req.body, userId: req.userId });
  if (newCategory.message) {
    return res.status(201).json({ message: newCategory.message });
  }
  return res.status(201).json(newCategory);
};

module.exports = {
  createPost,
};