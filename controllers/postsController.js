const { createPost } = require('../services/postsService');

const createPostController = async (req, res) => {
  const token = req.headers.authorization;
  const { title, content } = req.body;

  const createdPost = await createPost(token, title, content);
  const { id, userId } = createdPost;
  return res.status(201).json({ id, userId, title, content });
};

module.exports = {
  createPostController,
};