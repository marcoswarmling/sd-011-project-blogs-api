const blogPostsServices = require('../services/blogPostsServices');

const getAllPosts = async (req, res) => {
  try {
    const posts = await blogPostsServices.getAllPosts();
   // console.log(posts, 'POSTS');
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: 'Oh no! Server error!' });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    // console.log(req.body, 'REQ-BODY');
    const { data } = req.user;
    // console.log(data, 'DATA-ID');
    const posts = await blogPostsServices.createPost({ title, content, data });
   // console.log(posts, 'POSTS');
    return res.status(201).json(posts);
  } catch (error) {
    return res.status(500).json({ message: 'Oh no! Server error!' });
  }  
};

module.exports = {
  getAllPosts,
  createPost,
};
