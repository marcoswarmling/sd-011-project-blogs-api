const postService = require('../services/postService');

const createPost = async (req, res) => {
  const result = await postService.createPost(req.body);
  return res.status(201).json(result);
};

module.exports = {
  createPost,
};