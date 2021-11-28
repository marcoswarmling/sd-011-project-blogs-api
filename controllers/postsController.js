const { createPost, getAllPosts } = require('../services/postsService');

const createPostController = async (req, res) => {
  const token = req.headers.authorization;
  const { title, content } = req.body;

  const createdPost = await createPost(token, title, content);
  const { id, userId } = createdPost;
  return res.status(201).json({ id, userId, title, content });
};

const getAllPostsController = async (_req, res) => {
  const posts = await getAllPosts();
  return res.status(200).json(posts);
};

module.exports = {
  createPostController,
  getAllPostsController,
};