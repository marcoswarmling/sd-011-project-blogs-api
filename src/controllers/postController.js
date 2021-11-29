const postService = require('../services/postService');

const createPost = async (req, res, next) => {
  const { body, userId } = req;

  const post = await postService.createPost(body, userId);
 
  if (post.err) return next(post.err);

  return res.status(200).json({ post });
};

module.exports = {
  createPost,
};