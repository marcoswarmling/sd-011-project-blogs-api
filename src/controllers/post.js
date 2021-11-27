const servicesPost = require('../services/post');

const createPost = async (req, res) => {
  const newCategory = await servicesPost.createPost({ ...req.body, userId: req.userId });
  if (newCategory.message) {
    return res.status(201).json({ message: newCategory.message });
  }
  return res.status(201).json(newCategory);
};

const getAllPosts = async (req, res) => {
  const allPosts = await servicesPost.getAllPosts();
  if (allPosts.message) {
    return res.status(500).json({ message: allPosts.message });
  }
  return res.status(200).json(allPosts);
};

module.exports = {
  createPost,
  getAllPosts,
};