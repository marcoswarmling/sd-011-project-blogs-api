const blogPostsServices = require('../services/blogPostsServices');

const createPostBlog = async (req, res) => {
  try {
    const newPost = req.body;
    const posts = await blogPostsServices.createPost(newPost);
    const { id, userId, title, content } = posts;
    return res.status(201).json({ id, userId, title, content });
  } catch (error) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
};

module.exports = {
  createPostBlog,
};
