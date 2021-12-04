const blogPostsServices = require('../services/blogPostsServices');

const getAllPostCategories = async (req, res) => {
  try {
    const blogposts = await blogPostsServices.getAllBlogPosts();
    return res.status(200).json(blogposts);
  } catch (error) {
    return res.status(400).json({ message: 'Erro no Servidor!' });
  }
};

const getByIdPostCategories = async (req, res) => {
  const { id } = req.params;
  try {
    const blogposts = await blogPostsServices.getByIdPostCategories(id);
    if (blogposts.error === 'BlogPOst_Not_Exixts') {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(blogposts);
  } catch (error) {
    return res.status(400).json({ message: 'Erro no Servidor!' });
  }
};

const createBlogPosts = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.user;
  try {
    const blogposts = await blogPostsServices.createBlogPosts({ title, content, id });
    return res.status(201).json(blogposts);
  } catch (e) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

const updateBlogPost = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const userId = req.user.id;
  console.log(`CONTROLLERS ---> Title: ${title}, COntent: ${content}, UserId: ${id}`);
  try {
    const update = await blogPostsServices.updateBlogPost({ title, content, id, userId });
    if (update.error === 'UserId_Not_Exists') {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    return res.status(200).json(update);
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

module.exports = { createBlogPosts, getAllPostCategories, getByIdPostCategories, updateBlogPost };
