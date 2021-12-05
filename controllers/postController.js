const postService = require('../services/postService');

const ERROR_MESSAGE = {
  message: 'Internal Server Error',
};

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { userId } = req;
    
    const postData = await postService
    .createPost(title, content, userId, categoryIds);

    if (postData.message) {
      return res
      .status(400)
      .json(postData);
    }

    res
      .status(201)
      .json(postData);
  } catch (error) {
    res
      .status(500)
      .json(ERROR_MESSAGE);
  } 
};

module.exports = {
  createPost,
};
