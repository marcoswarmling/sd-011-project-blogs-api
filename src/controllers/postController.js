const { createdPost, getAllBlogPosts, getBlogPost } = require('../service/postService');

const createdNewPost = async (req, res) => {
  const post = await createdPost(req.body, req.userId);
  if (post.message) {
    return res.status(400).json(post);
  }
  return res.status(201).json(post);
};

const getBlogPostAll = async (req, res) => {
  const blogPost = await getAllBlogPosts();
  return res.status(200).json(blogPost);
};

const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  const blogPost = await getBlogPost(id);
  if (blogPost.message) {
    return res.status(404).json(blogPost);
  }
  return res.status(200).json(blogPost);
};

module.exports = { createdNewPost, getBlogPostAll, getBlogPostById };