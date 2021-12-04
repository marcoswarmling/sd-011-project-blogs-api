const postServices = require('../services/postServices');

const newPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const { id } = await postServices.newPost(title, content, categoryIds);

  const { id: userId } = req.user;

  return res.status(201).json({ id, userId, title, content });
};

const getAll = async (req, res) => {
  const allPosts = await postServices.getAll();

  return res.status(200).json(allPosts);
};

module.exports = {
  newPost,
  getAll,
};
