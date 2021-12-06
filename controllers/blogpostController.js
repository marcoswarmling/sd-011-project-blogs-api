const BlogPost = require('../services/blogpostService');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const postData = await BlogPost.createPost({ title, content, categoryIds, id });
    if (postData.err) {
      return res.status(postData.err.code).json(postData.err.message); 
    }
    return res.status(201).json(postData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getPosts = async (req, res) => {
  try {
    const dataPosts = await BlogPost.getPosts();
    return res.status(200).json(dataPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const dataPost = await BlogPost.getPost(id);
    if (dataPost.err) return res.status(dataPost.err.code).json(dataPost.err.message);
    return res.status(200).json(dataPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createPost, getPosts, getPost };
