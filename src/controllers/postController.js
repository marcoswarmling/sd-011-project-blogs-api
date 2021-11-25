const postService = require('../services/postService');

const createPost = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const newPost = await postService.postRegister(title, categoryIds, content, req.userId);
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

module.exports = {
  createPost,
};
