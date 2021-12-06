const Service = require('../services/blogpost');

const createPost = async (req, res) => {
  const data = req.body;

  const { userId } = req.userData;

  const result = await Service.createPost(data, userId);

  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }

   return res.status(201).json(result);
};

const getAllPosts = async (req, res) => {
  const result = await Service.getAllPosts();

  return res.status(200).json(result);
};

module.exports = {
  createPost,
  getAllPosts,
};