const blogPostsServices = require('../services/blogPostsServices');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user[0].dataValues; 
  const response = await blogPostsServices.createPost(title, content, id, categoryIds);
  if (response.error) {
    const { error } = response;
    return res.status(400).json(error);
  }
  return res.status(201).json(response);
};

const getPosts = async (_req, res) => {
  const posts = await blogPostsServices.getPosts();
  return res.status(200).json(posts);
};

module.exports = { createPost, getPosts };