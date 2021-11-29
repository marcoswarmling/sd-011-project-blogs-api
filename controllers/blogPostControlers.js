const BlogPosts = require('../Services/blogPostsServices');

const addPost = async (req, res) => {
  try {
    const { data } = req.user;
    const { title, content } = req.body;
    const posts = await BlogPosts.createPosts(data, title, content);
    return res.status(201).json(posts);
  } catch (error) {
    return res.status(500).json({ message: `Erro: ${error}` });
  }
};

const getPost = async (req, res) => {
    try {
    const posts = await BlogPosts.getPost();
    if (!posts) {
      return res.status(404).json({ message: 'Post not Exists' });
    }
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: `Erro: ${error}` });
  }
};

module.exports = {
  addPost,
  getPost,
};
