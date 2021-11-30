const { BlogPosts } = require('../models/index');

const postValidation = async (req, res, next) => {
  if (!req.body.title) return res.status(400).json({ message: '"title" is required' });
  if (!req.body.content) return res.status(400).json({ message: '"content" is required' });
  if (!req.body.categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  next();
};

const updateValidation = async (req, res, next) => {
  if (!req.body.title) return res.status(400).json({ message: '"title" is required' });
  if (!req.body.content) return res.status(400).json({ message: '"content" is required' });
  if (req.body.categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
  next();
};

const deleteValidation = async (req, res, next) => {
  const { id: postId } = req.params;
  const { data: { id } } = req.userInfo;
  const postToDelete = await BlogPosts.findByPk(postId);
  if (!postToDelete) return res.status(404).json({ message: 'Post does not exist' });
  if (id !== postToDelete.userId) return res.status(401).json({ message: 'Unauthorized user' });
  next();
};

module.exports = {
  postValidation,
  updateValidation,
  deleteValidation,
};
