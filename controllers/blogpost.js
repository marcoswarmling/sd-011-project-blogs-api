const BlogPost = require('../services/blogpost');

const createPost = async (req, res, next) => {
  const { email } = req.user;
  const { title, content, categoryIds } = req.body;
  const post = await BlogPost.createPost(email, title, content, categoryIds);
  if (post.err) return next(post.err);

  return res.status(201).json(post);
};

module.exports = {
  createPost,
};
