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

module.exports = { createPost };
