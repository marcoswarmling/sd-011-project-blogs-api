const { createPost, getAllPosts, getPostById, updatePost } = require('../services/postsService');

const createPostController = async (req, res) => {
  const token = req.headers.authorization;
  const { title, content, categoryIds } = req.body;

  const createdPost = await createPost(token, title, content, categoryIds);
  const { id, userId } = createdPost;
  return res.status(201).json({ id, userId, title, content });
};

const getAllPostsController = async (_req, res) => {
  const posts = await getAllPosts();
  return res.status(200).json(posts);
};

const getPostByIdController = async (req, res) => {
  const { id } = req.params;
  const post = await getPostById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(post);
};

const updatePostController = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  const updatedPost = await updatePost(id, title, content);
  return res.status(200).json(updatedPost);
};

module.exports = {
  createPostController,
  getAllPostsController,
  getPostByIdController,
  updatePostController,
};