const postService = require('../services/postService');

const registerNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req;

  const response = await postService.registerNewPost(title, content, categoryIds, userId);

  return res.status(201).json(response);
};

const searchAllPosts = async (_req, res) => {
  const response = await postService.searchAllPosts();

  return res.status(200).json(response);
};

module.exports = {
  registerNewPost,
  searchAllPosts,
};