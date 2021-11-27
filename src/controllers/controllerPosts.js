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

const findById = async (req, res) => {
  const { id } = req.params;
  const getPost = await servicesPosts.findById(id);
  if (getPost.message) {
    return res.status(404).json({ message: getPost.message });
  }
  return res.status(200).json(getPost);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const updatePost = await servicesPosts.updateById(id, req.body);
  if (updatePost.message) {
    return res.status(404).json({ message: updatePost.message });
  }
  return res.status(200).json(updatePost);
};

module.exports = {
  createPost,
  allPosts,
  findById,
  updateById,
};