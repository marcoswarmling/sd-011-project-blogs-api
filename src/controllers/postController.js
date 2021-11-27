const postService = require('../services/postService');

const createPost = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const newPost = await postService.postRegister(title, categoryIds, content, req.userId);
    if (newPost.message) {
      return res.status(400).json(newPost);
    }
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

const allPost = async (req, res) => {
  try {
    const callPost = await postService.getAllPost();
    if (callPost.message) {
      return res.status(400).json(callPost);
    }
    res.status(200).json(callPost);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

module.exports = {
  createPost,
  allPost,
};
