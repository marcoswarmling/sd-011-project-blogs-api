const servicesPosts = require('../services/servicesPosts');

const createPost = async (req, res) => {
  const newCategorie = await servicesPosts.createPost({ ...req.body, userId: req.userId });
  if (newCategorie.message) {
    return res.status(201).json({ message: newCategorie.message });
  }
  return res.status(201).json(newCategorie);
};

const allPosts = async (req, res) => {
  const getAllPosts = await servicesPosts.allPosts();
  if (getAllPosts.message) {
    return res.status(500).json({ message: getAllPosts.message });
  }
  return res.status(200).json(getAllPosts);
};

module.exports = {
  createPost,
  allPosts,
};
