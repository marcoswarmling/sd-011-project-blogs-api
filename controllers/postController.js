const postService = require('../services/postService');

const createPost = async (req, res, next) => {
  try {
    const { body, user } = req;

    const response = await postService.createPost(body, user);

    res.status(201).json(response);
  } catch (error) {
    // console.log(error);
    next(error);
  }
};

const getAllPosts = async (_req, res, next ) => {
  try {
    const posts = await postService.getAllPosts();

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  createPost,
  getAllPosts,
};