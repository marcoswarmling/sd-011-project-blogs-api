const { createdPost, getAllBlogPosts } = require('../service/postService');

const createdNewPost = async (req, res) => {
  const post = await createdPost(req.body, req.userId);
  if (post.message) {
    return res.status(400).json(post);
  }
  return res.status(201).json(post);
};

const getBlogPost = async (req, res) => {
  const blogPost = await getAllBlogPosts();
  return res.status(200).json(blogPost);
};

module.exports = { createdNewPost, getBlogPost };