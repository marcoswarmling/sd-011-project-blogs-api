const postServices = require('../services/postServices');

const createPostController = async (req, res) => {
  const post = await postServices.createPostServices(req.body);
  if (!post) return res.status(400).json({ message: '"categoryIds" not found' });
  return res.status(201).json(post);
};

module.exports = {
  createPostController,
};
