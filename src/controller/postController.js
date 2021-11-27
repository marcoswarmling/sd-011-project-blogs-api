const postService = require('../service/postService');

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { userId } = req;

    const newPost = await postService.createPost(
      title, content, userId,
    );

    return res.status(201).json(newPost);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const allPosts = await postService.getAllPosts();

    return res.status(200).json(allPosts);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllPosts,
  createPost,
};