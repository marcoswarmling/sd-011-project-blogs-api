const { postService } = require('../services');

const newPost = async (req, res) => {
  const post = await postService.newPost({ ...req.body, userId: req.token.id });
  return res.status(201).json(post);
};

module.exports = {
  newPost,
};