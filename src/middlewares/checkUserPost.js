const Joi = require('joi');

const { User, BlogPost } = require('../models');

const checkBodyUpdate = async (title, content) => {
  const updateData = { title, content };
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
  });
  const { error } = schema.validate(updateData);
  if (!error) return false;
  return error;
};

const checkUserPost = async (req, res, next) => {
  const { id } = req.params;
  const { title, content, categoryIds } = req.body;
  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });

  const error = await checkBodyUpdate(title, content);
  if (error.message) return res.status(400).json({ message: error.message });

  const post = await BlogPost.findByPk(id);
  const [user] = await User.findAll({ where: { email: req.userEmail } });
  if (post.userId !== user.id) return res.status(401).json({ message: 'Unauthorized user' });
  next();
};

module.exports = { checkUserPost };