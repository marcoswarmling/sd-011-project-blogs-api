const postService = require('../services/postService');

const createPost = async (req, res, next) => {
  try{
    const { body, user } = req;


    const response = await postService.createPost(body, user);

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createPost,
}