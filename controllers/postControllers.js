const postServices = require('../services/postServices');

const createPostController = async (req, res) => {
  const post = await postServices.createPostServices(req.body);
  if (!post) return res.status(400).json({ message: '"categoryIds" not found' });
  return res.status(201).json(post);
};

const getAllPostControllers = async (req, res) => {
  const posts = await postServices.getAllPostsServices();
  return res.status(200).json(posts);
};

const getByIdControllers = async (req, res) => {
  const { id } = req.params;
  const user = await postServices.getByIdServices(id);
  if (!user) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(user);
};

module.exports = {
  createPostController,
  getAllPostControllers,
  getByIdControllers,
};
