const PostService = require('../services/postService');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  console.log(req.user);

  const { user } = req;

  const userId = user.id;

  const post = await PostService.createPost(userId, title, content, categoryIds);

  if (post.message) {
    return res.status(400).json(post);
  }

  return res.status(201).json(post);
};

module.exports = {
  createPost,
};
