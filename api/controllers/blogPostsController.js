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

const findAllPostsBlog = async (req, res) => {
  const allPosts = await blogPostsServices.findAllPosts();
  return res.status(200).json(allPosts);
};

const findPostById = async (req, res) => {
  const { id } = req.params;
  const post = await blogPostsServices.findPostById(id);
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

module.exports = {
  createPostBlog,
  findAllPostsBlog,
  findPostById,
};
