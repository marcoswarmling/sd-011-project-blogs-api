const postServices = require('../services/postServices');

const ERROR_MESSAGE = { message: 'error interno' };

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { userId } = req;
    const post = await postServices.createPost(title, content, userId);
    return res.status(201).json(post);
  } catch (err) {
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  createPost,
};