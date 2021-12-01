const postService = require('../services/postService');

const createPost = async (req, res, next) => {
  const { body, userId } = req;

  const post = await postService.createPost(body, userId);
 
  console.log('POST', post);
  if (post.err) return next(post.err);

  return res.status(201).json(post);
};

module.exports = {
  createPost,
};