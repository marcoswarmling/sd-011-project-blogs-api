const { User, BlogPost } = require('../models');

const checkUserDeletePost = async (req, res, next) => {
  const { id } = req.params;

  const post = await BlogPost.findByPk(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  const [user] = await User.findAll({ where: { email: req.userEmail } });
  if (post.userId !== user.id) return res.status(401).json({ message: 'Unauthorized user' });
  next();
};

module.exports = { checkUserDeletePost };