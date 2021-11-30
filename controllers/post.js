const { registerPost, getAllPosts } = require('../services/post');

const insertNewPost = async (req, res) => {
  const {
    title,
    content,
  } = req.body;
  const { user } = req;

  const newPost = await registerPost(title, user, content);

  return res.status(201).json(newPost);
};

const getPosts = async (_req, res) => {
  const posts = await getAllPosts();
  return res.status(200).json(posts);
};

module.exports = {
  insertNewPost,
  getPosts,
};
