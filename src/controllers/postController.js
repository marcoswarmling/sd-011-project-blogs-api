const { createdPost } = require('../service/postService');

const createdNewPost = async (req, res) => {
  const post = await createdPost(req.body, req.userId);
  if (post.message) {
    return res.status(400).json(post);
  }
  res.status(201).json(post);
};

module.exports = { createdNewPost };