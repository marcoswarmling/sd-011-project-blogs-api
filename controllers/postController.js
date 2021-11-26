const PostService = require('../services/postService');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const { user } = req;

  const userId = user.id;

  const post = await PostService.createPost(userId, title, content, categoryIds);

  if (post.message) {
    return res.status(400).json(post);
  }

  return res.status(201).json(post);
};

const getPosts = async (_req, res) => {
  const posts = await PostService.getPosts();

  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  getPosts,
};
